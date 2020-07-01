import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { addList } from "../../actions";

import Header from "../../components/Header/";
import addButton from "../../assets/botao_adicionar.png";
import listIcon from "../../assets/icone_lista.png";
import deletelistIcon from "../../assets/icone_deletar_lista.png";
import editlistIcon from "../../assets/icone_editar.png";
import deleteTaskIcon from "../../assets/icone_deletar_tarefa-subtarefa.png";
import schema from "../../utils/inputValidatorSchema";

import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

function NewList() {
  const [list, setList] = useState("");
  const [task, setTask] = useState("");
  const [allTasks, setAllTasks] = useState([]);

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
      await schema.validate({ title: list });
      dispatch(addList(list, allTasks));
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
              value={list}
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
                <p>{list}</p>
              </div>
              <div className="newListIcons">
                <img src={editlistIcon} alt="editar lista" />
                <img src={deletelistIcon} alt="deletar lista" />
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
              allTasks.map((item) => (
                <div key={item} className="newTaskPreview">
                  <div className="newTaskHeader">
                    <input type="checkbox" className="subTaskCheckbox" />
                    <p>{item}</p>
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
