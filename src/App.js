import { useEffect, useState } from "react";
import "./App.css"

function App() {
  
const [ listaTarefas, setListaTarefas ]= useState( [] );
const [ tarefa, setTarefa ] = useState( { id:'', texto: "", status: ""} );

function addTarefa()
{
  if( tarefa !=="" ) {
    setListaTarefas([...listaTarefas, tarefa ]);
  }
}

function excluirTarefa( id )
{
  const novalista = listaTarefas.filter( (tarefa) => tarefa.id !== id );
  setListaTarefas( novalista );
}

function statusTarefa( id , status)
{
   const index = listaTarefas.findIndex( (tarefa) => tarefa.id === id );
   const novoStatus = status;
   listaTarefas[index].status = !status;
   setListaTarefas( [...listaTarefas] );
}

useEffect( () => {
  setTarefa( { id: "" , texto: "" , status: "" } );
}, [ listaTarefas ] )
  return (
    <>
    <header className="tudo">
    <header>
      <h1 className="rodape1">Lista-Tarefas</h1>
    </header>
    <div className="caixa2">
      <input className="caixa"   type="text" name="tarefa" placeholder="Digite sua Tarefa"  value={tarefa.texto} onChange={ (e) => setTarefa( { id: Math.random(), texto: e.target.value, status: false} ) }/>
      <button onClick={addTarefa}>✚</button>
    </div>
    <div className="box">
      <ul>
      {listaTarefas.map( (item, index ) =>( 
        <li className="tarefa" key={index}>{item.texto} <button onClick={ () => statusTarefa(item.id, item.status) }>{item.status ?   '✔' : '𖣘' }</button><button onClick={ () => excluirTarefa(item.id) }>✖</button></li>
      ))}
      </ul>
    </div>
    <header>
      <h1 className="rodape2">●○●○●○●○●○●</h1>
    </header>
    </header>
    </>
  );
}

export default App;