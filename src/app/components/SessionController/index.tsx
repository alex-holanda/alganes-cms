import { useCallback } from "react";

import Skeleton from "react-loading-skeleton";

import { confirm } from "core/utils/confirm";

import { useAuth } from "core/hooks/useAuth";

import AuthService from "auth/Authorization.service";

import { Button } from "../Button";

import * as SC from "./styles";

interface SessionControllerProps {
  name: string;
  description: string;
  onLogout: () => any;
}

export function SessionController(props: SessionControllerProps) {
  const { user } = useAuth();

  const logout = useCallback(() => {
    confirm({
      title: "Deseja sair?",
      onConfirm: AuthService.imperativelySendToLogout,
    });
  }, []);

  if (!user) {
    return <Skeleton height={215} />;
  }

  return (
    <SC.Wrapper>
      <SC.Avatar src={user.avatarUrls.small} />
      <SC.Name>{user.name}</SC.Name>
      <SC.Description>
        Editor desde{" "}
        <strong>
          {new Date(user.createdAt).toLocaleDateString(navigator.language, {
            month: "long",
            year: "numeric",
          })}
        </strong>
      </SC.Description>

      <Button variant="danger" label="Logout" onClick={logout} />
    </SC.Wrapper>
  );
}
