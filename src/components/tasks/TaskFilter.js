export const TaskFilter = ({ data, select }) => (
  <div className="mb-4">
    <div className="row">
      <div className="col-md-8" />
      <div className="col-md-4">
        <label className="form-label" htmlFor="sort">
          Sort By
        </label>
        <select
          className="form-select"
          defaultValue={0}
          id="sort"
          onChange={select}
        >
          <option value={0} disabled>
            Choose...
          </option>
          {data.map((el) => (
            <option value={el.id} key={el.id}>
              {el.sort_field + " (" + el.sort_direction + ")"}
            </option>
          ))}
        </select>
      </div>
    </div>
  </div>
);
