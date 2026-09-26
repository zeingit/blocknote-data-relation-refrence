import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";

export default function App() {
  const editor = useCreateBlockNote();

  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#fff" }}>
      <BlockNoteView editor={editor} />
    </div>
  );
}
