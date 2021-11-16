import {
  GET_TASKS,
  ADD_TASK,
  EDIT_TASK,
  GET_LIST_OF_PAGES,
  CHANGE_CURRENT_PAGE,
  GET_SORTED_TASKS,
} from "./taskTypes";

const initialState = {
  data: [],
  total_task_count: 0,
  count_per_page: 3,
  current_page: 1,
  number_of_pages: 0,
  list_of_pages: [],
  status: "",
  sort: [
    { id: 1, sort_field: "id", sort_direction: "asc" },
    { id: 2, sort_field: "id", sort_direction: "desc" },
    { id: 3, sort_field: "username", sort_direction: "asc" },
    { id: 4, sort_field: "username", sort_direction: "desc" },
    { id: 5, sort_field: "email", sort_direction: "asc" },
    { id: 6, sort_field: "email", sort_direction: "desc" },
    { id: 7, sort_field: "status", sort_direction: "asc" },
    { id: 8, sort_field: "status", sort_direction: "desc" },
  ],
  list_of_status: [
    { id: 1, value: 0, name: "задача не выполнена" },
    { id: 2, value: 1, name: "задача не выполнена, отредактирована админом" },
    { id: 3, value: 10, name: "задача выполнена" },
    { id: 4, value: 11, name: "задача отредактирована админом и выполнена" },
  ],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        data: action.tasks,
        total_task_count: action.total_task_count,
        status: "",
      };
    case ADD_TASK:
      return {
        ...state,
        status: action.status,
      };
    case EDIT_TASK:
      return {
        ...state,
        status: action.status,
      };
    case GET_LIST_OF_PAGES:
      return {
        ...state,
        list_of_pages: action.payload,
        number_of_pages: action.number_of_pages,
      };
    case CHANGE_CURRENT_PAGE:
      return {
        ...state,
        current_page: action.page,
      };
    case GET_SORTED_TASKS:
      return {
        ...state,
        data: action.tasks,
        total_task_count: action.total_task_count,
      };
    default:
      return state;
  }
};
