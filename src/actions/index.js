let listId = 4;
let taskId = 4;
let subTaskId = 4;

export const addList = (List, listName, tasks) => {
  let taskArr = [];
  tasks.forEach((taskName) => {
    taskArr.push({
      id: taskId++,
      title: taskName,
      subTasks: [],
      completed: false,
    });
  });

  let newList = {
    id: listId++,
    title: listName,
    task: taskArr,
  };
  List.push(newList);
  return {
    type: "ADD_LIST",
    payload: [...List],
  };
};

export const deleteList = (Lists, id) => {
  Lists = Lists.filter((item) => item.id !== id);

  return {
    type: "DELETE_LIST",
    payload: [...Lists],
  };
};

export const updateList = (list) => ({
  type: "UPDATE_LIST",
  payload: { list },
});

export const addTask = (Lists, listId, task) => {
  Lists.filter((item) => {
    if (item.id === listId) {
      item.task.push({
        id: taskId++,
        title: task,
        subTasks: [],
        completed: false,
      });
    }
    return item;
  });

  return {
    type: "ADD_TASK",
    payload: [...Lists],
  };
};

export const deleteTask = (Lists, listId, taskId) => {
  Lists.filter((item) => {
    if (item.id === listId) {
      item.task = item.task.filter((el) => el.id !== taskId);
    }
    return item;
  });

  return {
    type: "DELETE_TASK",
    payload: [...Lists],
  };
};

export const toggleTaskStatus = (Lists, listId, taskId, bool) => {
  Lists.forEach((item) => {
    if (item.id === listId) {
      item.task.forEach((el) => {
        if (el.id === taskId) {
          el.completed = bool;
          el.subTasks.forEach((subTask) => {
            subTask.completed = bool;
          });
        }
      });
    }
  });

  return {
    type: "TOGGLE_TASK_STATUS",
    payload: [...Lists],
  };
};

export const addSubTask = (Lists, listId, taskId, subTask) => {
  Lists.forEach((list) => {
    if (list.id === listId) {
      list.task.forEach((task) => {
        if (task.id === taskId) {
          task.subTasks.push({
            id: subTaskId++,
            name: subTask,
            completed: false,
          });
        }
      });
    }
  });

  return {
    type: "ADD_SUBTASK",
    payload: [...Lists],
  };
};

export const deleteSubTask = (Lists, listId, taskId, subTaskId) => {
  Lists.forEach((list) => {
    if (list.id === listId) {
      list.task.forEach((task) => {
        if (task.id === taskId) {
          task.subTasks = task.subTasks.filter((el) => el.id !== subTaskId);
        }
      });
    }
  });

  return {
    type: "DELETE_SUBTASK",
    payload: [...Lists],
  };
};

export const toggleSubTaskStatus = (Lists, listId, taskId, subTaskId, bool) => {
  Lists.forEach((item) => {
    if (item.id === listId) {
      item.task.forEach((task) => {
        if (task.id === taskId) {
          task.subTasks.forEach((subTask) => {
            if (subTask.id === subTaskId) {
              subTask.completed = bool;
            }
          });
        }
      });
    }
  });

  return {
    type: "TOGGLE_SUBTASK_STATUS",
    payload: [...Lists],
  };
};
