"use client";

import { useEffect, useRef } from "react";

/** Гравитационная сетка: плоскость-каркас, которая проваливается под курсором.
 *
 *  Отличия от исходного сниппета — не вкусовые, а по делу:
 *  • three грузится динамически внутри эффекта, поэтому ~150 КБ не попадают
 *    в основной бандл и первый экран остаётся лёгким;
 *  • цикл отрисовки останавливается, когда блок ушёл с экрана или вкладка
 *    неактивна — иначе ноутбук греется всё время, пока открыта страница;
 *  • при размонтировании отменяется кадр и освобождаются geometry/material/
 *    renderer: без этого каждый hot-reload съедает WebGL-контекст, а их
 *    у браузера около шестнадцати;
 *  • размер берётся от контейнера, а не от окна;
 *  • при prefers-reduced-motion рисуется один статичный кадр без слежения
 *    за курсором. */
export default function MeshBackground() {
  const mount = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = mount.current;
    if (!host) return;

    let disposed = false;
    let cleanup = () => {};

    (async () => {
      const THREE = await import("three");
      if (disposed || !host) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const width = host.clientWidth || 1;
      const height = host.clientHeight || 1;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 10;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      host.appendChild(renderer.domElement);

      const pointer = new THREE.Vector2(0, 0);
      const clock = new THREE.Clock();

      const geometry = new THREE.PlaneGeometry(40, 40, 50, 50);
      const material = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uMouse: { value: new THREE.Vector2(0, 0) },
          uColor: { value: new THREE.Color(0x0a7f94) },
          uAccent: { value: new THREE.Color(0x4fd3e8) },
        },
        vertexShader: `
          uniform float uTime;
          uniform vec2 uMouse;
          varying float vIntensity;

          void main() {
            vec3 pos = position;
            float mouseDist = distance(pos.xy, uMouse * 20.0);

            float warp = 1.0 - smoothstep(0.0, 5.0, mouseDist);
            pos.z += warp * 3.0;
            vIntensity = warp;

            pos.z += sin(pos.x * 0.5 + uTime * 0.5) * 0.1;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 uColor;
          uniform vec3 uAccent;
          varying float vIntensity;

          void main() {
            // на тёплом светлом листе сетка должна быть видна и в покое,
            // поэтому базовая линия не гаснет в ноль, а под курсором
            // догорает до сигнального циана
            vec3 tint = mix(uColor, uAccent, vIntensity);
            float alpha = 0.16 + vIntensity * 0.6;
            gl_FragColor = vec4(tint, alpha);
          }
        `,
        wireframe: true,
        transparent: true,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.rotation.x = -0.2;
      scene.add(mesh);

      const handlePointer = (event: PointerEvent) => {
        const rect = host.getBoundingClientRect();
        pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      };

      let frame = 0;
      let visible = true;

      const render = () => {
        material.uniforms.uTime.value = clock.getElapsedTime();
        (material.uniforms.uMouse.value as InstanceType<
          typeof THREE.Vector2
        >).lerp(pointer, 0.05);
        renderer.render(scene, camera);
      };

      const loop = () => {
        frame = requestAnimationFrame(loop);
        render();
      };

      const start = () => {
        if (!frame && !reduceMotion) loop();
      };
      const stop = () => {
        if (frame) cancelAnimationFrame(frame);
        frame = 0;
      };

      const observer = new IntersectionObserver(
        ([entry]) => {
          visible = entry.isIntersecting;
          if (visible && !document.hidden) start();
          else stop();
        },
        { threshold: 0 },
      );
      observer.observe(host);

      const handleVisibility = () => {
        if (document.hidden || !visible) stop();
        else start();
      };
      document.addEventListener("visibilitychange", handleVisibility);

      const resizeObserver = new ResizeObserver(() => {
        const w = host.clientWidth || 1;
        const h = host.clientHeight || 1;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
        if (reduceMotion) render();
      });
      resizeObserver.observe(host);

      if (reduceMotion) {
        render();
      } else {
        window.addEventListener("pointermove", handlePointer, {
          passive: true,
        });
        start();
      }

      cleanup = () => {
        stop();
        observer.disconnect();
        resizeObserver.disconnect();
        document.removeEventListener("visibilitychange", handleVisibility);
        window.removeEventListener("pointermove", handlePointer);
        geometry.dispose();
        material.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    })();

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return <div className="mesh-bg" ref={mount} aria-hidden="true" />;
}
