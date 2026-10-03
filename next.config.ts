import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Disable next dev's auto-generated AGENTS.md/CLAUDE.md: a tool-written
  // CLAUDE.md at the repo root collides with Claude Code's own
  // project-instructions convention and is out of scope for this migration.
  agentRules: false,

  // Свой <html> для 404 (app/global-not-found.tsx): у приложения несколько
  // корневых layout, обычный not-found для них не работает.
  experimental: { globalNotFound: true },

  // Префикс для «сырых» путей (<video src>), которые next сам не переписывает.
  env: { NEXT_PUBLIC_BASE_PATH: process.env.BASE_PATH ?? "" },

  // Статическая выгрузка: STATIC_EXPORT=1 npm run build кладёт готовый сайт
  // в ./out. Включается только переменной окружения, обычная сборка не
  // меняется. next/image при экспорте не оптимизирует на лету, поэтому в
  // этом режиме отдаём исходный файл.
  //
  // BASE_PATH нужен, когда сайт живёт не в корне домена (GitHub Pages отдаёт
  // его из /<имя-репозитория>/). Без него next/image ссылается на картинку
  // от корня и она отдаёт 404.
  ...(process.env.STATIC_EXPORT === "1"
    ? {
        output: "export" as const,
        images: { unoptimized: true },
        // каждая страница — каталог с index.html: GitHub Pages отдаёт /en/
        // только так, а без слэша сам перенаправит на него
        trailingSlash: true,
        ...(process.env.BASE_PATH
          ? { basePath: process.env.BASE_PATH }
          : { assetPrefix: "." }),
      }
    : {}),
};

export default nextConfig;
