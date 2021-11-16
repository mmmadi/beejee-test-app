export const FormGroup = ({ label, name, type, listener, value }) => (
  <div className="form-group row pb-3">
    <label htmlFor={name} className="col-form-label col-sm-2 text-sm-right">
      {label}
    </label>
    <div className="col-sm-10">
      <div className="input-group">
        <input
          type={type}
          className="form-control"
          autoComplete="false"
          value={value}
          onChange={listener}
          id={name}
          name={name}
        />
      </div>
    </div>
  </div>
);
