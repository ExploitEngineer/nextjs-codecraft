import { Card } from "@/components/custom/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <div>Archived notifications</div>
      <div>
        <Link className="hover:underline text-blue-500" href="/complex-dashboard">Default</Link>
      </div>
    </Card>
  );
}
