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
            completed: false,
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

    case "TOGGLE_TASK_STATUS":
      state.forEach((item) => {
        if (item.id === action.payload.listId) {
          item.task.forEach((el) => {
            if (el.id === action.payload.taskId) {
              el.completed = action.payload.bool;
              el.subTasks.forEach((subTask) => {
                subTask.completed = action.payload.bool;
              });
            }
          });
        }
      });
      return state;

    default:
      return state;
  }
};

export default taskReducer;
