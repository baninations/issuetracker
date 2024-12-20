import { Button, TextField } from "@radix-ui/themes";
import Link from "next/link";

export default function IssuesPage() {
  return (
    <div className="p-4">
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
}
