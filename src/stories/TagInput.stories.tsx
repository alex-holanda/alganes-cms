import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { Tag } from "react-tag-input";

import { TagInput } from "../components/TagInput";

export default {
  title: "Example/TagInput",
  component: TagInput,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as ComponentMeta<typeof TagInput>;

const Template: ComponentStory<typeof TagInput> = (args) => (
  <TagInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Insira as tags deste post",
  tags: [{ id: "1", text: "JavaScript" }],
};

export const VariousTags = Template.bind({});
VariousTags.args = {
  placeholder: "Insira as tags deste post",
  tags: [
    { id: "1", text: "JavaScript" },
    { id: "2", text: "JAVA" },
    { id: "3", text: "Ruby on Rails" },
    { id: "4", text: "Python" },
    { id: "5", text: "C#" },
    { id: "6", text: "ReactJS" },
    { id: "7", text: "Angular" },
  ],
};

export function WorkingLiveExample() {
  const [tags, setTags] = useState<Tag[]>([]);

  return (
    <TagInput
      placeholder="Insira as tags deste post"
      tags={tags}
      onAdd={(tag) => setTags([...tags, tag])}
      onDelete={(index) => setTags(tags.filter((tag, i) => i !== index))}
    />
  );
}
