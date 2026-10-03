import RootShell from "@/components/RootShell";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell locale="vi">{children}</RootShell>;
}
