let listId = 4;
let taskId = 4;
let subTaskId = 4;

export const addList = (list, tasks) => ({
  type: "ADD_LIST",
  payload: { id: listId++, list, tasks, taskId: taskId++ },
});

export const deleteList = (id) => ({
  type: "DELETE_LIST",
  payload: { id },
});

export const updateList = (list) => ({
  type: "UPDATE_LIST",
  payload: { list },
});

export const addTask = (listId, task) => ({
  type: "ADD_TASK",
  payload: { listId, task, id: taskId++ },
});

export const deleteTask = (listId, taskId) => ({
  type: "DELETE_TASK",
  payload: { listId, taskId },
});

export const addSubTask = (listId, taskId, subTask) => ({
  type: "ADD_SUBTASK",
  payload: { listId, taskId, subTask, id: subTaskId++ },
});

export const deleteSubTask = (listId, taskId, subTaskId) => ({
  type: "DELETE_SUBTASK",
  payload: { listId, taskId, subTaskId },
});
