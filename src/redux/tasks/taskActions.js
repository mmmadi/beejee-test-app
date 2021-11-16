import {
  ADD_TASK,
  CHANGE_CURRENT_PAGE,
  EDIT_TASK,
  GET_LIST_OF_PAGES,
  GET_SORTED_TASKS,
  GET_TASKS,
} from "./taskTypes";
import { httpRequest, developerName } from "../../http/httpRequest";
import { showLoader, hideLoader, showAlert } from "../app/appActions";

export function getTasks(currentPage) {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const res = await httpRequest(`/${developerName}&page=${currentPage}`);

      if (res.status === "error") {
        return console.log(res.message);
      }

      dispatch({
        type: GET_TASKS,
        tasks: res.message.tasks,
        total_task_count: res.message.total_task_count,
      });
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(hideLoader());
    }
  };
}
export function addTask(formData) {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const res = await httpRequest(
        "/create" + developerName,
        "POST",
        formData
      );

      if (res.status === "error") {
        const usernameMessage = res.message.username
          ? "Username: " + res.message.username
          : "";
        const emailMessage = res.message.email
          ? "E-mail: " + res.message.email
          : "";
        const textMessage = res.message.text ? "Text: " + res.message.text : "";
        return dispatch(
          showAlert(usernameMessage + " " + emailMessage + " " + textMessage)
        );
      }

      dispatch({
        type: ADD_TASK,
        status: res.status,
      });
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(hideLoader());
    }
  };
}
export function editTask(formData, id) {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const res = await httpRequest(
        `/edit/${id}` + developerName,
        "POST",
        formData
      );

      if (res.status === "error") {
        return dispatch(showAlert(res.message.token ? res.message.token : ""));
      }

      dispatch({
        type: EDIT_TASK,
        status: res.status,
      });
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(hideLoader());
    }
  };
}
export function getListOfPages(list_of_pages, number_of_pages) {
  return (dispatch) => {
    dispatch({
      type: GET_LIST_OF_PAGES,
      payload: list_of_pages,
      number_of_pages,
    });
  };
}
export function changeCurrentPage(page) {
  return (dispatch) => {
    dispatch({
      type: CHANGE_CURRENT_PAGE,
      page,
    });
  };
}
export function getSortedTasks(page, sortField, sortDirection) {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const res = await httpRequest(
        `/${developerName}&page=${page}&sort_field=${sortField}&sort_direction=${sortDirection}`
      );

      if (res.status === "error") {
        return console.log(res.message);
      }

      dispatch({
        type: GET_SORTED_TASKS,
        tasks: res.message.tasks,
        total_task_count: res.message.total_task_count,
      });
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(hideLoader());
    }
  };
}
