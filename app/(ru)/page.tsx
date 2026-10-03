import Site from "@/components/Site";
import { homeMetadata } from "@/lib/meta";

export const metadata = homeMetadata("ru");

export default function Page() {
  return <Site locale="ru" />;
}
