import React from "react";

export const FormGroupBtn = ({ label, action }) => (
  <div className="form-group row">
    <div className="col-sm-2"></div>
    <div className="col-sm-10">
      <button className="btn btn-success w-100" onClick={action}>
        {label}
      </button>
    </div>
  </div>
);
