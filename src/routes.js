import { Switch, Route, Redirect } from "react-router-dom";
import { Tasks } from "./pages/tasks/Tasks";
import { AddTask } from "./pages/tasks/AddTask";
import { UpdateTask } from "./pages/tasks/UpdateTask";
import { Login } from "./pages/Login";

export const useRoutes = (username, token) => (
  <Switch>
    <Route path="/" component={Tasks} exact />
    <Route path="/add-task" component={AddTask} />
    {username === "admin" && (
      <Route path="/update-task/:id" component={UpdateTask} />
    )}
    {!token && <Route path="/login" component={Login} />}
    <Redirect to="/" />
  </Switch>
);
