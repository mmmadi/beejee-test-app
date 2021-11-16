import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/auth/authActions";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { username, token } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout());
  };

  const LoginBtn = () => {
    return !token ? (
      <Link to="/login" className="btn btn-secondary">
        Login
      </Link>
    ) : (
      <button className="btn btn-secondary" onClick={logoutHandler}>
        Logout
      </button>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid container">
        <Link className="navbar-brand" to="/">
          BeeJee Test App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <div className="text-white mx-3">
            <span>{username}</span>
          </div>
          <LoginBtn />
        </div>
      </div>
    </nav>
  );
};
