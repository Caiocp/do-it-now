import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header/";
import addButton from "../../assets/botao_adicionar.png";
import Lists from "../../utils/listData";
import listIcon from "../../assets/icone_lista.png";
import editListIcon from "../../assets/icone_editar.png";
import deleteListIcon from "../../assets/icone_deletar_lista.png";
import deleSubTaskIcon from "../../assets/icone_deletar_tarefa-subtarefa.png";

import "./styles.css";

function Dashboard() {
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
                    onClick={() => alert("alo")}
                    alt="editar lista"
                  />
                  <img src={deleteListIcon} alt="excluir lista" />
                </div>
              </div>
              <div>
                {list.task.map((task) => (
                  <div key={task.id} className="taskContainer">
                    <div className="taskHeader">
                      <div className="fix">
                        <input type="checkbox" className="taskCheckbox" />
                        <strong>{task.title}</strong>
                      </div>
                      <img src={deleSubTaskIcon} alt="excluir tarefa" />
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
                          <img src={deleSubTaskIcon} alt="excluir subtarefa" />
                        </div>
                      ))}
                    </div>
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
