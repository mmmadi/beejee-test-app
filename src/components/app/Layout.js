import React from "react";
import { Link } from "react-router-dom";

export const Layout = ({
  section,
  desc,
  haveAddBtn = false,
  link,
  label,
  children,
}) => (
  <div className="container">
    <div className="d-flex align-items-center justify-content-between my-4">
      <h3>
        {section}
        <div className="text-muted text-tiny mt-1">
          <small className="font-weight-normal">{desc}</small>
        </div>
      </h3>
      <div>
        {haveAddBtn && (
          <Link className="btn btn-primary rounded-pill d-block" to={link}>
            {label}
          </Link>
        )}
      </div>
    </div>
    <div className="card my-3">
      <div className="card-body">{children}</div>
    </div>
  </div>
);
