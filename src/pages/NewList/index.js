import React, { useState } from "react";

import Header from "../../components/Header/";
import addButton from "../../assets/botao_adicionar.png";
import listIcon from "../../assets/icone_lista.png";
import deletelistIcon from "../../assets/icone_deletar_lista.png";
import editlistIcon from "../../assets/icone_editar.png";
import deleteTaskIcon from "../../assets/icone_deletar_tarefa-subtarefa.png";

import "./styles.css";

function NewList() {
  const [list, setList] = useState("");
  const [task, setTask] = useState("");

  return (
    <>
      <Header />
      <div className="container">
        <div className="newListContainer">
          <div className="newListHeader">
            <p>Criar Lista</p>
          </div>
          <form className="newListForm">
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
              <button>
                <img src={addButton} alt="adicionar tarefa" />
              </button>
            </div>
            <div className="formButtons">
              <button className="button cancelBtn" type="submit">
                Cancelar
              </button>
              <button className="button createBtn" type="submit">
                Criar lista
              </button>
            </div>
          </form>
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
            <div className="newTaskPreview">
              <div className="newTaskHeader">
                <input type="checkbox" className="subTaskCheckbox" />
                <p>{task}</p>
              </div>
              <img src={deleteTaskIcon} alt="deletar tarefa" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewList;
