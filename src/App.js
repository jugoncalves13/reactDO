import { useEffect, useState } from "react";

function App() {
  
const [ listaTarefas, setListaTarefas ]= useState( [] );
const [ tarefa, setTarefa ] = useState( { id:'', texto: ""} );

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

useEffect( () => {
  setTarefa( { id: "" , texto: "" } );
}, [ listaTarefas ] )
  return (
    <>
    <header>
      <h1>Lista-Tarefas</h1>
    </header>
    <div>
      <input type="text" name="tarefa" placeholder="Digite sua Tarefa"  value={tarefa.texto} onChange={ (e) => setTarefa( { id: Math.random(), texto: e.target.value} ) }/>
      <button onClick={addTarefa}>Adicionar</button>
    </div>
    <div>
      <ul>
      {listaTarefas.map( (item, index ) =>( 
        <li key={index}>{item.texto} <button onClick={ () => excluirTarefa(item.id) }>X</button></li>
      ))}
      </ul>
    </div>
    </>
  );
}

export default App;
