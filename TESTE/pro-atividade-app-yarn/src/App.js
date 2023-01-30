import { useState } from 'react';
import './App.css';

let initialState = [
  {
    id: 1,
    description: "Estudar"
  },
  {
    id: 2,
    description: "Malhar"
  },

];

function App() {
  const [atividades, setAtividades] = useState(initialState);

  function addAtividade(e) {
    e.preventDefault();

    const atividade = {
      id: document.getElementById("id").value,
      description: document.getElementById("description").value
    };
    setAtividades([...atividades, { ...atividade }]);
  }
  return (
    <>
      <form className="row g-3">

        <div className="col-md-6">
          <label className="form-label">Id</label>
          <input type="text" className="form-control" id="id" />
        </div>

        <div className="col-md-6">
          <label className="form-label">Descrição</label>
          <input type="text" className="form-control" id="description"></input>
        </div>
        <div className="col-12">
          <button className='btn btn-outline-secondary' onClick={addAtividade}>+ Atividade</button>
        </div>
      </form>

      <div className='mt-3'>
        {atividades.map(atividade => (
          <div key={atividade.id} className="card mb-2 shadow-sm" style={{width: "18rem"}}>
            <div className="card-body">
              <h5 className="card-title">Atividade</h5>
              <p className="card-text">  {atividade.id} - {atividade.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
