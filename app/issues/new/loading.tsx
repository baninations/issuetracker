import { Skeleton } from "@/app/components";
import { Box } from "@radix-ui/themes";

export default function IssueNewLoading() {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Skeleton count={10} />
      <Skeleton width="2rem" />
    </Box>
  );
}
