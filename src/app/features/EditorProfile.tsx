import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getEditorDescription } from "../../core/utils/getEditorDescription";

import { FieldDescriptor } from "../components/FieldDescriptor";
import { ProgressBar } from "../components/ProgressBar";
import { ValueDescriptor } from "../components/ValueDescriptor";

import styled from "styled-components";
import { transparentize } from "polished";

import { User } from "alex-holanda-sdk/dist/@types";
import { UserService } from "alex-holanda-sdk";

interface EditorProfileProps {
  hidePersonalData?: boolean;
}

export function EditorProfile(props: EditorProfileProps) {
  const params = useParams<{ id: string }>();
  const [editor, setEditor] = useState<User.EditorDetailed>();

  useEffect(() => {
    UserService.getExistingEditor(Number(params.id)).then(setEditor);
  }, [params.id]);

  if (!editor) {
    return null;
  }

  return (
    <Wrapper>
      <HeadLine>
        <Avatar src={editor.avatarUrls.small} />
        <Name>{editor.name}</Name>
        <Description>
          {getEditorDescription(new Date(editor.createdAt))}
        </Description>
      </HeadLine>

      <Divisor />

      <Features>
        <PersonalInfo>
          <Biography>{editor.bio}</Biography>

          <Skills>
            {editor.skills?.map((skill, index) => {
              return (
                <ProgressBar
                  key={index}
                  progress={skill.percentage}
                  title={skill.name}
                  theme="primary"
                />
              );
            })}
          </Skills>
        </PersonalInfo>

        <ContactInfo>
          <FieldDescriptor field={"Cidade"} value={editor.location.city} />
          <FieldDescriptor field={"Estado"} value={editor.location.state} />
          {!props.hidePersonalData && (
            <>
              <FieldDescriptor field={"Telefone"} value={"+55 27 99900-9999"} />
              <FieldDescriptor
                field={"E-mail"}
                value={"ana.castillo@redacao.algacontent.com"}
              />
              <FieldDescriptor
                field={"Nascimento"}
                value={"26 de Dezembro de 1997 (22 anos)"}
              />
            </>
          )}
        </ContactInfo>
      </Features>

      {!props.hidePersonalData && (
        <Earnings>
          <ValueDescriptor
            color={"default"}
            value={21452}
            description={"Palavras nesta semana"}
          />
          <ValueDescriptor
            color={"default"}
            value={123234}
            description={"Palavras no mês"}
          />
          <ValueDescriptor
            color={"default"}
            value={12312312}
            description={"Total de palavras"}
          />
          <ValueDescriptor
            color={"primary"}
            value={545623.23}
            description={"Ganhos na semana"}
            isCurrency
          />
          <ValueDescriptor
            color={"primary"}
            value={545623.23}
            description={"Ganhos no mês"}
            isCurrency
          />
          <ValueDescriptor
            color={"primary"}
            value={545623.23}
            description={"Ganhos no total"}
            isCurrency
          />
        </Earnings>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border: 1px solid ${transparentize(0.9, "#274060")};
`;

const HeadLine = styled.header`
  display: grid;
  align-items: center;
  gap: 8px 16px;
  grid-template-columns: 48px auto;
  height: 48px;
`;

const Avatar = styled.img`
  grid-row-start: 1;
  grid-row-end: 3;
  object-fit: contain;
  width: 48px;
  height: 48px;
`;

const Name = styled.h1`
  font-size: 18px;
  font-weight: 400;
  grid-column-start: 2;
`;

const Description = styled.span`
  font-size: 12px;
  grid-column-start: 2;
`;

const Divisor = styled.div`
  border-bottom: 1px solid ${transparentize(0.9, "#274060")};
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2;
  gap: 24px;
`;

const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Biography = styled.p`
  font-size: 12px;
  line-height: 20px;
`;

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 0;

  > * {
    width: 100%;
  }

  & > :nth-child(1),
  & > :nth-child(2) {
    width: 50%;
  }
`;

const Earnings = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: column;
  grid-gap: 24px;
`;
