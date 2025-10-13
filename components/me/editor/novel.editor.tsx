import { EditorRoot, EditorContent } from "novel";
import { useCurrentEditor } from "@tiptap/react";
import parse from 'html-react-parser';

type NovelEditorProps = {
  setContent: any;
  title: string;
  content: string | undefined;
};

function EditorWrapper({ setContent }: { setContent: any }) {
  const { editor } = useCurrentEditor();
  
  if (editor) {
    editor.on('update', () => {
      setContent(editor.getHTML());
    });
  }
  
  return null;
}

export default function NovelEditor({ setContent, content, title }: NovelEditorProps) {
  return (
    <div className="">
        <h2 className="pt-4 pb-3">{title}</h2>
        <EditorRoot>
          <EditorContent
            initialContent={{
              type: "doc",
              content: [],
            }}
            className="rounded-md border shadow-none"
          >
            <EditorWrapper setContent={setContent} />
          </EditorContent>
        </EditorRoot>
        {content}
        {parse(content || '')}
    </div>
  );
}
