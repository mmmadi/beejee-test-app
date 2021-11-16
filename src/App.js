import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRoutes } from "./routes";
import { Navbar } from "./components/app/Navbar";
import { checkLogin } from "./redux/auth/authActions";

function App() {
  const { username, token } = useSelector((state) => state.auth);
  const routes = useRoutes(username, token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkLogin());
  }, []);

  return (
    <Router>
      <Navbar />
      {routes}
    </Router>
  );
}

export default App;
