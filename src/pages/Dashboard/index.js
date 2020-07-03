import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import Header from "../../components/Header/";
import {
  deleteList,
  addTask,
  deleteTask,
  toggleTaskStatus,
  addSubTask,
  deleteSubTask,
  toggleSubTaskStatus,
} from "../../actions";
import schema from "../../utils/inputValidatorSchema";

import addButton from "../../assets/botao_adicionar.png";
import listIcon from "../../assets/icone_lista.png";
import editListIcon from "../../assets/icone_editar.png";
import deleteListIcon from "../../assets/icone_deletar_lista.png";
import deleSubTaskIcon from "../../assets/icone_deletar_tarefa-subtarefa.png";

import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

function Dashboard() {
  const [editMode, setEditMode] = useState(false);
  const [editlistId, setEditListId] = useState(null);
  const [task, setTask] = useState("");
  const [subTask, setSubTask] = useState("");

  const inputref = useRef([]);

  const Lists = useSelector((lists) => lists);
  const dispatch = useDispatch();

  function toggleEditMode(id) {
    if (editlistId !== id) {
      setEditMode(true);
      setEditListId(id);
    } else {
      setEditMode(!editMode);
      setEditListId(id);
    }
    setTask("");
  }

  async function handleAddTask(List, listId) {
    try {
      await schema.validate({ title: task });
      dispatch(addTask(List, listId, task));
      setTask("");
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  function handleDeleteTask(listId, taskId) {
    dispatch(deleteTask(Lists, listId, taskId));
  }
  function handleToggleTaskStatus(listId, taskId, bool) {
    let newList = [];
    newList = Lists.map((list) => {
      if (list.id === listId) {
        list.task.map((task) => {
          if (task.id === taskId) {
            task.subTasks.forEach((subTask) => {
              subTask.completed = bool;
            });
          }
          return task;
        });
      }
      return list;
    });
    dispatch(toggleTaskStatus(newList, listId, taskId, bool));
  }

  async function handleAddSubTask(listId, taskId, subTask) {
    try {
      await schema.validate({ title: subTask });
      dispatch(addSubTask(Lists, listId, taskId, subTask));
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  function handleDeleteSubTask(listId, taskId, subTaskId) {
    dispatch(deleteSubTask(Lists, listId, taskId, subTaskId));
  }
  function handleToggleSubTaskStatus(listId, taskId, subTaskId, bool) {
    dispatch(toggleSubTaskStatus(Lists, listId, taskId, subTaskId, bool));
    let completedCount = 0;
    let subTaskAmount = 0;
    let hasSubTask = false;
    let motherCheckBoxValue = false;
    Lists.forEach((list) => {
      if (list.id === listId) {
        list.task.forEach((item) => {
          if (item.id === taskId) {
            item.subTasks.length ? (hasSubTask = true) : (hasSubTask = false);
            item.subTasks.forEach((subTask) => {
              subTaskAmount += 1;
              if (subTask.completed) completedCount += 1;
            });
          }
        });
      }
    });
    if (subTaskAmount === completedCount && hasSubTask) {
      motherCheckBoxValue = true;
    }
    dispatch(toggleTaskStatus(Lists, listId, taskId, motherCheckBoxValue));
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="listContainerHeader">
          <p>Listas</p>
          <Link to="/task">
            <img src={addButton} alt="adicionar tarefa" />
          </Link>
        </div>
        <div className="listContainer">
          {Lists.map((list) => (
            <div key={list.id} className="item">
              <div className="listItemHeader">
                <div>
                  <img src={listIcon} alt="ícone da lista" />
                  <strong>{list.title}</strong>
                </div>
                <div>
                  <img
                    src={editListIcon}
                    onClick={() => toggleEditMode(list.id)}
                    alt="editar lista"
                    style={{ cursor: "pointer" }}
                  />
                  <img
                    src={deleteListIcon}
                    alt="excluir lista"
                    onClick={() => {
                      dispatch(deleteList(Lists, list.id));
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
              {editMode && list.id === editlistId ? (
                <div className="toggleEditInput">
                  <input
                    type="text"
                    placeholder="Adicionar tarefa"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                  />
                  <button onClick={() => handleAddTask(Lists, list.id)}>
                    <img src={addButton} alt="adicionar tarefa" />
                  </button>
                </div>
              ) : null}
              <div>
                {list.task.map((task, key) => (
                  <div key={task.id} className="taskContainer">
                    <div className="taskHeader">
                      <div className="fix">
                        <input
                          type="checkbox"
                          className="taskCheckbox"
                          checked={task.completed}
                          onChange={(e) => {
                            handleToggleTaskStatus(
                              list.id,
                              task.id,
                              e.target.checked
                            );
                          }}
                        />
                        <p>{task.title}</p>
                      </div>
                      <img
                        src={deleSubTaskIcon}
                        alt="excluir tarefa"
                        onClick={() => handleDeleteTask(list.id, task.id)}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                    <div className="subTaskContainer">
                      {task.subTasks.map((el) => (
                        <div key={el.id} className="subTaskItem">
                          <div className="subTaskDiv">
                            <input
                              type="checkbox"
                              className="subTaskCheckbox"
                              checked={el.completed}
                              onChange={(e) => {
                                handleToggleSubTaskStatus(
                                  list.id,
                                  task.id,
                                  el.id,
                                  e.target.checked
                                );
                              }}
                            />
                            <p>{el.name}</p>
                          </div>
                          <img
                            src={deleSubTaskIcon}
                            alt="excluir subtarefa"
                            onClick={() =>
                              handleDeleteSubTask(list.id, task.id, el.id)
                            }
                            style={{ cursor: "pointer" }}
                          />
                        </div>
                      ))}
                    </div>
                    {editMode && list.id === editlistId ? (
                      <div className="toggleEditSubTaskInput">
                        <input
                          type="text"
                          ref={(el) => (inputref.current[key] = el)}
                          placeholder="Adicionar subtarefa"
                          value={
                            inputref.current[key]
                              ? inputref.current[key].value
                              : ""
                          }
                          onChange={(e) => setSubTask(e.target.value)}
                        />
                        <button
                          onClick={() => {
                            handleAddSubTask(
                              list.id,
                              task.id,
                              inputref.current[key].value
                            );
                            inputref.current[key].value = "";
                          }}
                        >
                          <img src={addButton} alt="adicionar tarefa" />
                        </button>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Dashboard;
