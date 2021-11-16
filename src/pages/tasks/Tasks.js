import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Layout } from "../../components/app/Layout";
import { TaskDataTable } from "../../components/tasks/TaskDataTable";
import { TaskFilter } from "../../components/tasks/TaskFilter";
import { TaskPagination } from "../../components/tasks/TaskPagination";
import {
  changeCurrentPage,
  getListOfPages,
  getSortedTasks,
  getTasks,
} from "../../redux/tasks/taskActions";

export const Tasks = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const username = useSelector((state) => state.auth.username);
  const {
    data,
    total_task_count,
    count_per_page,
    list_of_pages,
    current_page,
    number_of_pages,
    sort,
    list_of_status,
  } = useSelector((state) => state.tasks);
  const loading = useSelector((state) => state.app.loading);

  useEffect(() => {
    const listOfPages = [];
    const numberOfPages = Math.ceil(total_task_count / count_per_page);

    for (let i = 1; i <= numberOfPages; i++) {
      listOfPages.push(i);
    }

    dispatch(getListOfPages(listOfPages, numberOfPages));
  }, [total_task_count, count_per_page]);

  useEffect(() => {
    dispatch(getTasks(current_page));
  }, [current_page]);

  const updateTaskHandler = (state) => {
    if (username !== "admin") {
      return;
    }
    history.push({
      pathname: `/update-task/${state.id}`,
      state: state,
    });
  };

  const changeCurrentPageHandler = (page) => {
    dispatch(changeCurrentPage(page));
  };

  const prevNextPageHandler = (type) => {
    const page = type === "prev" ? current_page - 1 : current_page + 1;
    dispatch(changeCurrentPage(page));
  };

  const getSortedTasksHandler = (e) => {
    const findSort = sort.find(
      (sort) => sort.id === parseInt(e.currentTarget.value)
    );
    dispatch(
      getSortedTasks(current_page, findSort.sort_field, findSort.sort_direction)
    );
  };

  return (
    <Layout
      section={"Tasks"}
      desc={"List of Tasks"}
      haveAddBtn={true}
      link={"/add-task"}
      label={"Add Task"}
    >
      <TaskFilter data={sort} select={getSortedTasksHandler} />
      <TaskDataTable
        tasks={data}
        list_of_status={list_of_status}
        action={updateTaskHandler}
        loading={loading}
      />
      <TaskPagination
        list_of_pages={list_of_pages}
        current_page={current_page}
        number_of_pages={number_of_pages}
        changeCurrentPageAction={changeCurrentPageHandler}
        prevNextPageAction={prevNextPageHandler}
      />
    </Layout>
  );
};
