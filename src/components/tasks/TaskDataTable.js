import { Loader } from "../../components/app/Loader";

export const TaskDataTable = ({ tasks, list_of_status, action, loading }) => {
  const Row = ({ text }) => (
    <tr>
      <td colSpan="5" className="text-center">
        {text}
      </td>
    </tr>
  );

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">№</th>
            <th scope="col">Username</th>
            <th scope="col">E-mail</th>
            <th scope="col">Text</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <Row text={<Loader />} />
          ) : !tasks.length ? (
            <Row text={"No records..."} />
          ) : (
            tasks.map((el) => (
              <tr
                className={el.status === 10 || el.status === 11 ? "active" : ""}
                key={el.id}
                onClick={() => action(el)}
              >
                <td>{el.id}</td>
                <td>{el.username}</td>
                <td>{el.email}</td>
                <td>{el.text}</td>
                <td>
                  {list_of_status.map(
                    (status) => status.value === el.status && status.name
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
