import { Card } from "@/components/custom/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div>Notifications</div>
      <div>
        <Link className="hover:underline text-blue-500" href="/complex-dashboard/archived">Archived</Link>
      </div>
    </Card>
  );
}
