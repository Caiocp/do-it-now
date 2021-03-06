import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { addList } from "../../../store/actions";

import Header from "../../Header";
import schema from "../../../utils/inputValidatorSchema";

import {
  addButton,
  deleteListIcon,
  editListIcon,
  listIcon,
  deleteTaskIcon,
} from "../../../assets";

import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

function NewList() {
  const [listName, setList] = useState("");
  const [task, setTask] = useState("");
  const [allTasks, setAllTasks] = useState([]);

  const Lists = useSelector((lists) => lists);
  const dispatch = useDispatch();
  const history = useHistory();

  async function handleAddTask() {
    try {
      await schema.validate({ title: task });
      setAllTasks([...allTasks, task]);
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

  async function handleCreateButton() {
    try {
      await schema.validate({ title: listName });
      dispatch(addList(Lists, listName, allTasks));
      setList("");
      setAllTasks([]);
      history.push("/dashboard");
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

  function handleCancelButton() {
    setList("");
    setTask("");
    setAllTasks([]);
    history.push("/dashboard");
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="newListContainer">
          <div className="newListHeader">
            <p>Criar Lista</p>
          </div>
          <div className="newListForm">
            <input
              type="text"
              placeholder="Digite o nome da lista..."
              value={listName}
              onChange={(e) => {
                setList(e.target.value);
              }}
            />
            <div className="inputWithButton">
              <input
                type="text"
                placeholder="Adicionar tarefa"
                value={task}
                onChange={(e) => {
                  setTask(e.target.value);
                }}
              />
              <button onClick={handleAddTask}>
                <img src={addButton} alt="adicionar tarefa" />
              </button>
            </div>
            <div className="formButtons">
              <button className="button cancelBtn" onClick={handleCancelButton}>
                Cancelar
              </button>
              <button
                className="button createBtn"
                type="submit"
                onClick={handleCreateButton}
              >
                Criar lista
              </button>
            </div>
          </div>
          <div className="newListPreview">
            <div className="listPreview">
              <div className="newListHeaderPreview">
                <img src={listIcon} alt="ícone lista" />
                <p>{listName}</p>
              </div>
              <div className="newListIcons">
                <img src={editListIcon} alt="editar lista" />
                <img src={deleteListIcon} alt="deletar lista" />
              </div>
            </div>
            {allTasks.length === 0 ? (
              <div className="newTaskPreview">
                <div className="newTaskHeader">
                  <input type="checkbox" className="subTaskCheckbox" />
                  <p>Adicione tarefas</p>
                </div>
                <img src={deleteTaskIcon} alt="deletar tarefa" />
              </div>
            ) : (
              allTasks.map((taskName) => (
                <div key={taskName} className="newTaskPreview">
                  <div className="newTaskHeader">
                    <input type="checkbox" className="subTaskCheckbox" />
                    <p>{taskName}</p>
                  </div>
                  <img src={deleteTaskIcon} alt="deletar tarefa" />
                </div>
              ))
            )}
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default NewList;
