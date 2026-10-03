import Site from "@/components/Site";
import { homeMetadata } from "@/lib/meta";

export const metadata = homeMetadata("vi");

export default function Page() {
  return <Site locale="vi" />;
}
