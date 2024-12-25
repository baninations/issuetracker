import { Box, Flex, Card } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function IssueNewLoading() {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Skeleton count={10} />
      <Skeleton width="2rem" />
    </Box>
  );
}
