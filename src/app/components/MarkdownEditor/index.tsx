import MdEditor, { Plugins } from "react-markdown-editor-lite";
import MarkdownIt from "markdown-it";

import "react-markdown-editor-lite/lib/index.css";

MdEditor.unuse(Plugins.FontUnderline);

const parser = new MarkdownIt();

interface MarkdownEditorProps {
  onChange?: (text: string) => any;
  value?: string;
  readOnly?: boolean;
}

export function MarkdownEditor(props: MarkdownEditorProps) {
  return (
    <MdEditor
      readOnly={props.readOnly}
      value={props.value}
      renderHTML={(text) => parser.render(text)}
      style={{ height: props.readOnly ? "auto" : 300 }}
      onChange={({ text }) => props.onChange && props.onChange(text)}
      view={props.readOnly ? { menu: false, md: false, html: true } : undefined}
    />
  );
}
