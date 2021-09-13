import React, { useState } from "react";
import { useHistory } from "react-router";

import { Tag } from "react-tag-input";

import styled from "styled-components";

import { countWordsInMarkdown } from "../../core/utils/countWordsInMarkdown";
import { info } from "../../core/utils/info";
import PostService from "../../sdk/services/Post.service";

import { Button } from "../components/Button";
import { ImageUpload } from "../components/ImageUpload";
import { Input } from "../components/Input";
import Loading from "../components/Loading";
import { MarkdownEditor } from "../components/MarkdownEditor";
import { TagInput } from "../components/TagInput";
import { WordPriceCounter } from "../components/WordPriceCounter";

export function PostForm() {
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState<Tag[]>([]);

  const [publishing, setPublishing] = useState(false);

  async function handleFormSubmit(event: React.FormEvent) {
    event.preventDefault();

    try {
      setPublishing(true);

      const newPost = {
        body,
        title,
        tags: tags.map((tag) => tag.text),
        imageUrl,
      };

      const insertedPost = await PostService.insertNewPost(newPost);

      info({
        title: "Post salvo com sucesso",
        description: `Você acabou de criar o post com o id + ${insertedPost.id}`,
      });

      history.push("/");
    } finally {
      setPublishing(false);
    }
  }

  return (
    <PostFormWrapper onSubmit={handleFormSubmit}>
      <Loading show={publishing} />

      <Input
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
        label="título"
        placeholder="e.g.: Como fiquei rico aprendendo React"
      />

      <ImageUpload label="Thumbnail do post" onImageUpload={setImageUrl} />

      <MarkdownEditor onChange={setBody} />

      <TagInput
        tags={tags}
        onAdd={(tag) => setTags([...tags, tag])}
        onDelete={(index) => setTags(tags.filter((_, i) => i !== index))}
        placeholder="Insira as tags desse post"
      />

      <PostFormSubmitWrapper>
        <WordPriceCounter
          pricePerWord={0.05}
          wordsCounter={countWordsInMarkdown(body)}
        />

        <Button
          variant="primary"
          label="Salvar post"
          type="submit"
          disabled={!title || !imageUrl || !body || !tags.length}
        />
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
