import { Skeleton } from "@/app/components";
import { Box, Card, Flex } from "@radix-ui/themes";

export default function LoadingIssuesPage() {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Flex className="space-x-3" my="2">
        <Skeleton width="3rem" />
        <Skeleton width="7rem" />
      </Flex>
      <Card mt="4">
        <Skeleton count={5} width="6" />
      </Card>
    </Box>
  );
}
