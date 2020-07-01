import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Header from "../../components/Header/";
import {
  deleteList,
  addTask,
  deleteTask,
  addSubTask,
  deleteSubTask,
} from "../../actions";

import addButton from "../../assets/botao_adicionar.png";
import listIcon from "../../assets/icone_lista.png";
import editListIcon from "../../assets/icone_editar.png";
import deleteListIcon from "../../assets/icone_deletar_lista.png";
import deleSubTaskIcon from "../../assets/icone_deletar_tarefa-subtarefa.png";

import "./styles.css";

function Dashboard() {
  const [editMode, setEditMode] = useState(false);
  const [editlistId, setEditListId] = useState(null);
  const [task, setTask] = useState("");
  const [subTask, setSubTask] = useState("");
  const [render, setRender] = useState(false);

  const Lists = useSelector((state) => state.List);
  const dispatch = useDispatch();

  function toggleEditMode(id) {
    if (editlistId !== id) {
      setEditMode(true);
      setEditListId(id);
    } else {
      setEditMode(!editMode);
      setEditListId(id);
    }
  }

  function handleAddTask(listId) {
    dispatch(addTask(listId, task));
    setTask("");
  }
  function handleDeleteTask(listId, taskId) {
    dispatch(deleteTask(listId, taskId));
    setRender(!render);
  }

  function handleAddSubTask(listId, taskId, subTask) {
    dispatch(addSubTask(listId, taskId, subTask));
    setSubTask("");
  }
  function handleDeleteSubTask(listId, taskId, subTaskId) {
    dispatch(deleteSubTask(listId, taskId, subTaskId));
    setRender(!render);
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
                  <p>{list.title}</p>
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
                      dispatch(deleteList(list.id));
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
                  <button onClick={() => handleAddTask(list.id)}>
                    <img src={addButton} alt="adicionar tarefa" />
                  </button>
                </div>
              ) : null}
              <div>
                {list.task.map((task) => (
                  <div key={task.id} className="taskContainer">
                    <div className="taskHeader">
                      <div className="fix">
                        <input type="checkbox" className="taskCheckbox" />
                        <strong>{task.title}</strong>
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
                          placeholder="Adicionar subtarefa"
                          onChange={(e) => setSubTask(e.target.value)}
                        />
                        <button
                          onClick={() =>
                            handleAddSubTask(list.id, task.id, subTask)
                          }
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
    </>
  );
}

export default Dashboard;
