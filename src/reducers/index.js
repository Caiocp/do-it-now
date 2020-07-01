import { combineReducers } from "redux";

import List from "./list";
import Task from "./task";
import SubTask from "./subTask";

export default combineReducers({
  List,
  Task,
  SubTask,
});
