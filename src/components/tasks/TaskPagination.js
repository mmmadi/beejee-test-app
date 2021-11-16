export const TaskPagination = ({
  list_of_pages,
  current_page,
  number_of_pages,
  changeCurrentPageAction,
  prevNextPageAction,
}) => (
  <nav>
    <ul className="pagination">
      <li className="page-item">
        <button
          className="page-link prev-next-btn"
          disabled={current_page === 1 && true}
          onClick={() => prevNextPageAction("prev")}
        >
          <span aria-hidden="true">&laquo;</span>
        </button>
      </li>
      {list_of_pages.map((page) => (
        <li
          className={`page-item${current_page === page ? " active" : ""}`}
          key={page}
        >
          <button
            className="page-link"
            onClick={() => changeCurrentPageAction(page)}
          >
            {page}
          </button>
        </li>
      ))}
      <li className="page-item">
        <button
          className="page-link prev-next-btn"
          disabled={current_page === number_of_pages && true}
          onClick={() => prevNextPageAction("next")}
        >
          <span aria-hidden="true">&raquo;</span>
        </button>
      </li>
    </ul>
  </nav>
);
