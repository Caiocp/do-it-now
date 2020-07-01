import List from "../utils/listData";

const listReducer = (state = List, action) => {
  switch (action.type) {
    case "ADD_LIST":
      let taskArr = [];
      let newTaskId = action.payload.taskId;
      action.payload.tasks.forEach((task) => {
        taskArr.push({
          id: newTaskId,
          title: task,
          subTasks: [],
        });
        newTaskId++;
      });

      let newList = {
        id: action.payload.id,
        title: action.payload.list,
        task: taskArr,
      };
      state.push(newList);
      return state;
    case "DELETE_LIST":
      return state.filter((item) => item.id !== action.payload.id);
    case "UPDATE_LIST":
      return action.payload;
    default:
      return state;
  }
};

export default listReducer;
