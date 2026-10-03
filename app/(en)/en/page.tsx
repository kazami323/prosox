import Site from "@/components/Site";
import { homeMetadata } from "@/lib/meta";

export const metadata = homeMetadata("en");

export default function Page() {
  return <Site locale="en" />;
}
