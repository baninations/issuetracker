import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { number } from "zod";

interface Props {
  params: {
    id: string;
  };
}

export default async function IssueDetailPage({ params }: Props) {
  const { id } = await params;
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!issue) notFound();

  return (
    <div>
      <p>{issue?.title}</p>
      <p>{issue?.description}</p>
      <p>{issue?.createdAt.toDateString()}</p>
      <p>{issue?.status}</p>
    </div>
  );
}
