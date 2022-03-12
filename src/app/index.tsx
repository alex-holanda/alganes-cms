import { useEffect, useMemo } from "react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";

import jwtDecode from "jwt-decode";

import { info } from "../core/utils/info";

import { EditorProfileView } from "./views/EditorProfile.view";
import { EditorsListView } from "./views/EditorsList.view";
import { HomeView } from "./views/Home.view";
import { NotFoundView } from "./views/NotFound";
import { PostCreateView } from "./views/PostCreate.view";
import { PostEditView } from "./views/PostEdit.view";

import AuthService from "auth/Authorization.service";
import { Authentication } from "auth/auth";
import { useAuth } from "core/hooks/useAuth";
import Loading from "./components/Loading";

const APP_BASE_URL = process.env.REACT_APP_BASE_URL

export default function App() {
  const history = useHistory();
  const { pathname } = useLocation();

  const { fetchUser, user } = useAuth();

  const isAuthorizationRoute = useMemo(() => pathname === "/authorize", [
    pathname,
  ]);

  useEffect(() => {
    window.onunhandledrejection = function (error: PromiseRejectionEvent) {
      info({
        title: error.reason.response?.data.title || "Error",
        description: error.reason.response?.data.detail || error.reason.message,
      });
    };
  }, []);

  useEffect(() => {
    async function identify() {
      const isInAuthorizationRoute = window.location.pathname === "/authorize";
      const code = new URLSearchParams(window.location.search).get("code");

      const codeVerifier = AuthService.getCodeVerifier();
      const accessToken = AuthService.getAccessToken();

      if (!accessToken && !isInAuthorizationRoute) {
        AuthService.imperativelySendToLoginScreen();
      }

      if (isInAuthorizationRoute) {
        if (!code) {
          info({
            title: "Erro",
            description: "Código não informado",
          });

          AuthService.imperativelySendToLoginScreen();
          return;
        }

        if (!codeVerifier) {
          // necessário fazer logout
          AuthService.imperativelySendToLogout();
          return;
        }

        // busca o primeiro token de acesso
        const {
          access_token,
          refresh_token,
        } = await AuthService.getFirstAccessToken({
          code,
          codeVerifier,
          redirectUri: `${APP_BASE_URL}/authorize`,
        });

        AuthService.setAccessToken(access_token);
        AuthService.setRefreshToken(refresh_token);

        // busca o usuário
        const decodedToken: Authentication.AccessTokenDecodedBody = jwtDecode(
          access_token
        );

        fetchUser(decodedToken["alganews:user_id"]);

        history.push("/");
      }

      if (accessToken) {
        const decodedToken: Authentication.AccessTokenDecodedBody = jwtDecode(
          accessToken
        );

        fetchUser(decodedToken["alganews:user_id"]);
      }
    }

    identify();
  }, [history, fetchUser]);

  if (isAuthorizationRoute || !user) {
    return <Loading show />;
  }

  return (
    <Switch>
      <Route component={HomeView} path="/" exact />
      <Route component={EditorsListView} path="/editores" exact />
      <Route component={EditorProfileView} path="/editores/:id" exact />
      <Route component={PostCreateView} path="/posts/criar" exact />
      <Route component={PostEditView} path="/posts/editar/:id" exact />
      <Route component={NotFoundView} />
    </Switch>
  );
}
