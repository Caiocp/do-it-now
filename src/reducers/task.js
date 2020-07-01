import List from "../utils/listData";

const taskReducer = (state = List, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return state.filter((item) => {
        if (item.id === action.payload.listId) {
          item.task.push({
            id: action.payload.id,
            title: action.payload.task,
            subTasks: [],
          });
        }
        return item;
      });

    case "DELETE_TASK":
      return state.filter((item) => {
        if (item.id === action.payload.listId) {
          item.task = item.task.filter((el) => el.id !== action.payload.taskId);
        }
        return item;
      });

    default:
      return state;
  }
};

export default taskReducer;
