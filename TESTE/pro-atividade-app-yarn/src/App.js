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
          <div key={atividade.id} className="card mb-2 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between">

                <h5 className="card-title">
                  <span className="badge bg-secondary me-1">
                    {atividade.id}
                  </span>
                  - titulo
                </h5>
                <h6>Prioridade: <i className='far fa-smile'></i> Normal</h6>

              </div>
              <p className="card-text">  {atividade.id} - {atividade.description}</p>
              <div className="d-flex justify-content-end pt-2 m-0 border-top">

                <button className="btn btn-outline-primary me-2 btn-sm">
                  Editar
                </button>

                <button className="btn btn-outline-danger me-2 btn-sm">Deletar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
