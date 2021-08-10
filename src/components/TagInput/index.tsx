import { WithContext as ReactTagInput, Tag } from "react-tag-input";

import * as TI from "./styles";

interface TagInputProps {
  onAdd: (tag: Tag) => any;
  onDelete: (i: number) => any;
  tags: Array<Tag>;
  placeholder: string;
}

const KeyCodes = {
  comma: 188,
  enter: 13,
  tab: 9,
  semicolon: 191,
  // space: 32,
};

export function TagInput(props: TagInputProps) {
  return (
    <TI.Wrapper>
      <ReactTagInput
        placeholder={props.placeholder}
        handleAddition={props.onAdd}
        handleDelete={props.onDelete}
        allowDragDrop={false}
        autofocus={false}
        tags={props.tags}
        delimiters={[
          KeyCodes.comma,
          KeyCodes.enter,
          KeyCodes.tab,
          KeyCodes.semicolon,
          // KeyCodes.space,
        ]}
      />
    </TI.Wrapper>
  );
}
