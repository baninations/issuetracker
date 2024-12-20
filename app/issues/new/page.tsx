import { Button, TextArea, TextField } from "@radix-ui/themes";

export default function NewIssuePage() {
  return (
    <div className="space-y-2">
      <TextField.Root placeholder="title" />
      <TextArea placeholder="Description" />
      <Button>Submit new Issue</Button>
    </div>
  );
}
