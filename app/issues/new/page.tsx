"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

export default function NewIssuePage() {
  return (
    <div className="space-y-2">
      <TextField.Root placeholder="title" />
      {/* <TextArea placeholder="Description" /> */}
      <SimpleMDE />
      <Button>Submit new Issue</Button>
    </div>
  );
}
