export const FormCheck = ({ label, reference, name }) => (
  <div className="form-group row pb-3">
    <label
      className="form-check-label col-form-label col-sm-2 text-sm-right"
      htmlFor={name}
    >
      {label}
    </label>
    <div className="col-sm-10 d-flex align-items-center">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          ref={reference}
          name={name}
          id={name}
        />
      </div>
    </div>
  </div>
);
