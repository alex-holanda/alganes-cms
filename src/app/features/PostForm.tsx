import { useState } from "react";

import { Tag } from "react-tag-input";

import styled from "styled-components";
import { Button } from "../components/Button";

import { ImageUpload } from "../components/ImageUpload";
import { Input } from "../components/Input";
import { MarkdownEditor } from "../components/MarkdownEditor";
import { TagInput } from "../components/TagInput";
import { WordPriceCounter } from "../components/WordPriceCounter";

export function PostForm() {
  const [tags, setTags] = useState<Tag[]>([]);
  return (
    <PostFormWrapper>
      <Input
        label="título"
        placeholder="e.g.: Como fiquei rico aprendendo React"
      />

      <ImageUpload label="Thumbnail do post" />

      <MarkdownEditor />

      <TagInput
        tags={tags}
        onAdd={(tag) => setTags([...tags, tag])}
        onDelete={(index) => setTags(tags.filter((_, i) => i !== index))}
        placeholder="Insira as tags desse post"
      />

      <PostFormSubmitWrapper>
        <WordPriceCounter pricePerWord={0.25} wordsCounter={40} />

        <Button variant="primary" label="Salvar post" type="submit" />
      </PostFormSubmitWrapper>
    </PostFormWrapper>
  );
}

const PostFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const PostFormSubmitWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
