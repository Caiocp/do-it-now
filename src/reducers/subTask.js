import List from "../utils/listData";

const subTaskReducer = (state = List, action) => {
  switch (action.type) {
    case "ADD_SUBTASK":
      state.forEach((list) => {
        if (list.id === action.payload.listId) {
          list.task.forEach((task) => {
            if (task.id === action.payload.taskId) {
              task.subTasks.push({
                id: action.payload.id,
                name: action.payload.subTask,
              });
            }
          });
        }
      });
      return state;

    case "DELETE_SUBTASK":
      state.forEach((list) => {
        if (list.id === action.payload.listId) {
          list.task.forEach((task) => {
            if (task.id === action.payload.taskId) {
              console.log(task);
              task.subTasks = task.subTasks.filter(
                (el) => el.id !== action.payload.subTaskId
              );
            }
          });
        }
      });

      return state;
    default:
      return state;
  }
};

export default subTaskReducer;
