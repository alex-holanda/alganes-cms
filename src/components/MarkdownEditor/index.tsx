import MdEditor, { Plugins } from "react-markdown-editor-lite";
import MarkdownIt from "markdown-it";

import "react-markdown-editor-lite/lib/index.css";

MdEditor.unuse(Plugins.FontUnderline);

const parser = new MarkdownIt();

interface MarkdownEditorProps {}

export function MarkdownEditor(props: MarkdownEditorProps) {
  return (
    <MdEditor
      renderHTML={(text) => parser.render(text)}
      style={{ height: "300px" }}
    />
  );
}
