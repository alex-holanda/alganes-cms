import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { info } from "../core/utils/info";

import { EditorProfileView } from "./views/EditorProfile.view";
import { EditorsListView } from "./views/EditorsList.view";
import { HomeView } from "./views/Home.view";
import { NotFoundView } from "./views/NotFound";
import { PostCreateView } from "./views/PostCreate.view";
import { PostEditView } from "./views/PostEdit.view";

export default function App() {
  useEffect(() => {
    window.onunhandledrejection = function (error: PromiseRejectionEvent) {
      info({
        title: error.reason.response?.data.title || "Error",
        description: error.reason.response?.data.detail || error.reason.message,
      });
    };
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route component={HomeView} path="/" exact />
        <Route component={EditorsListView} path="/editores" exact />
        <Route component={EditorProfileView} path="/editores/:id" exact />
        <Route component={PostCreateView} path="/posts/criar" exact />
        <Route component={PostEditView} path="/posts/editar/:id" exact />
        <Route component={NotFoundView} />
      </Switch>
    </BrowserRouter>
  );
}
