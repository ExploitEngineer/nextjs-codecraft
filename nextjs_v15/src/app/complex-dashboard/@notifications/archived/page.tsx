import { Card } from "@/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <div>Archived notifications</div>
      <div>
        <Link
          className="underline text-blue-600 text-sm ms-2"
          href="/complex-dashboard"
        >
          Default
        </Link>
      </div>
    </Card>
  );
}
