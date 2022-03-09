import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";

import { getEditorDescription } from "../../core/utils/getEditorDescription";
import useSingleEditor from "../../core/hooks/useSingleEditor";

import { FieldDescriptor } from "../components/FieldDescriptor";
import { ProgressBar } from "../components/ProgressBar";
import { ValueDescriptor } from "../components/ValueDescriptor";

import styled from "styled-components";
import { transparentize } from "polished";
import { useAuth } from "core/hooks/useAuth";
import { User } from "alex-holanda-sdk";

interface EditorProfileProps {
  hidePersonalData?: boolean;
}

export function EditorProfile(props: EditorProfileProps) {
  const params = useParams<{ id: string }>();

  const { editor, fetchEditor } = useSingleEditor();
  const { user } = useAuth();

  const editorIsAuthenticatedUser = useMemo(() => {
    return Number(params.id) === user?.id;
  }, [params.id, user?.id]);

  const editorData = useMemo(() => {
    return editorIsAuthenticatedUser ? user : editor;
  }, [editorIsAuthenticatedUser, user, editor]);

  useEffect(() => {
    if (!editorIsAuthenticatedUser) {
      fetchEditor(Number(params.id));
    }
  }, [fetchEditor, params.id, editorIsAuthenticatedUser]);

  if (!editorData) {
    return null;
  }

  return (
    <Wrapper>
      <HeadLine>
        <Avatar src={editorData.avatarUrls.small} />
        <Name>{editorData.name}</Name>
        <Description>
          {getEditorDescription(new Date(editorData.createdAt))}
        </Description>
      </HeadLine>

      <Divisor />

      <Features>
        <PersonalInfo>
          <Biography>{editorData.bio}</Biography>

          <Skills>
            {editorData.skills?.map((skill, index) => {
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
          {editorData.location.city && (
            <FieldDescriptor
              field={"Cidade"}
              value={editorData.location.city}
            />
          )}

          {editorData.location.state && (
            <FieldDescriptor
              field={"Estado"}
              value={editorData.location.state}
            />
          )}

          {(editorData as User.Detailed).phone && (
            <FieldDescriptor
              field={"Telefone"}
              value={(editorData as User.Detailed).phone}
            />
          )}

          {(editorData as User.Detailed).email && (
            <FieldDescriptor
              field={"E-mail"}
              value={(editorData as User.Detailed).email}
            />
          )}

          {(editorData as User.Detailed).birthdate && (
            <FieldDescriptor
              field={"Nascimento"}
              value={new Date(
                (editorData as User.Detailed).birthdate
              ).toLocaleDateString(navigator.language, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            />
          )}
        </ContactInfo>
      </Features>

      {(editorData as User.Detailed).metrics && (
        <Earnings>
          <ValueDescriptor
            color={"default"}
            value={(editorData as User.Detailed).metrics.weeklyWords}
            description={"Palavras nesta semana"}
          />
          <ValueDescriptor
            color={"default"}
            value={(editorData as User.Detailed).metrics.monthlyWords}
            description={"Palavras no mês"}
          />
          <ValueDescriptor
            color={"default"}
            value={(editorData as User.Detailed).metrics.lifetimeWords}
            description={"Total de palavras"}
          />
          <ValueDescriptor
            color={"primary"}
            value={(editorData as User.Detailed).metrics.weeklyEarnings}
            description={"Ganhos na semana"}
            isCurrency
          />
          <ValueDescriptor
            color={"primary"}
            value={(editorData as User.Detailed).metrics.monthlyEarnings}
            description={"Ganhos no mês"}
            isCurrency
          />
          <ValueDescriptor
            color={"primary"}
            value={(editorData as User.Detailed).metrics.lifetimeEarnings}
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
