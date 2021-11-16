export const Alert = ({ message, type }) => (
  <div
    className={`alert alert-${type} alert-dismissible fade show`}
    role="alert"
  >
    {message}
  </div>
);
