import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";

const mapBadge: Record<
  Status,
  { label: string; color: "red" | "violet" | "green" }
> = {
  OPEN: { label: "Open", color: "red" },
  IN_PROGRESS: { label: "In Progress", color: "violet" },
  CLOSED: { label: "Closed", color: "green" },
};

export default function IssueStatusBadge({ status }: { status: Status }) {
  return <Badge color={mapBadge[status].color}>{mapBadge[status].label}</Badge>;
}

// import { Status } from "@prisma/client";
// import { Badge } from "@radix-ui/themes";

// interface Props {
//   status: Status;
// }

// const statusMap: Record<
//   Status,
//   { label: string; color: "red" | "violet" | "green" }
// > = {
//   OPEN: { label: "Open", color: "red" },
//   IN_PROGRESS: { label: "In Progress", color: "violet" },
//   CLOSED: { label: "Closed", color: "green" },
// };

// export default function IssueStatusBadge({ status }: Props) {
//   return (
//     <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
//   );
// }
