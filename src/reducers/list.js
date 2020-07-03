import List from "../utils/listData";

const listReducer = (state = List, action) => {
  switch (action.type) {
    case "ADD_LIST":
      return action.payload;
    case "DELETE_LIST":
      return action.payload;
    case "UPDATE_LIST":
      return action.payload;

    case "ADD_TASK":
      return action.payload;
    case "DELETE_TASK":
      return action.payload;
    case "TOGGLE_TASK_STATUS":
      return action.payload;

    case "ADD_SUBTASK":
      return action.payload;
    case "DELETE_SUBTASK":
      return action.payload;

    default:
      return state;
  }
};

export default listReducer;
