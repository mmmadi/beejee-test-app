import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/auth/authActions";
import { Loader } from "../components/app/Loader";
import { Alert } from "../components/app/Alert";

export const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { loading, alert } = useSelector((state) => state.app);

  const loginHandler = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("username", form.username);
    formData.append("password", form.password);

    dispatch(login(formData, form.username));
  };

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div className="login-form">
      <form onSubmit={loginHandler}>
        <h3>Login</h3>
        {alert && <Alert message={alert} type={"warning"} />}
        <div className="mb-3">
          <label htmlFor="username-input" className="form-label">
            Username
          </label>
          <input
            type="text"
            name="username"
            className="form-control"
            id="username-input"
            value={form.username}
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pass-input" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="pass-input"
            value={form.password}
            onChange={changeHandler}
          />
        </div>
        <button
          type="submit"
          className="btn btn-dark text-uppercase"
          disabled={loading && true}
        >
          {loading ? <Loader /> : "Sign In"}
        </button>
      </form>
    </div>
  );
};
