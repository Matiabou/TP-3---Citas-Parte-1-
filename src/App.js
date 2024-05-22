import './App.css';
import Citas from './components/Citas/Citas.js';
import Form from './components/Form/Form.js';
import Subtitulo from './components/Subtitulo/Subtitulo.js';
import Titulo from  './components/Titulo/Titulo.js';
import { useState } from 'react';

function App() {

  const [citas, setCitas] = useState([
    {
      ID: 1,
      Mascota: "Nina",
      Dueño:"Martin",
      Fecha:"2021-08-05",
      Hora:"8:20",
      Sintomas:"Le duele la pierna"
    },
    {
      ID: 2,
      Mascota: "Sifon",
      Dueño:"Flecha",
      Fecha:"2023-08-05",
      Hora:"09:24",
      Sintomas:"Duerme mucho"
    },
    {
      ID: 3,
      Mascota: "Floki",
      Dueño:"Ari",
      Fecha:"2023-08-05",
      Hora:"16:15",
      Sintomas:"No esta comiendo"
    }
  ]
  )


  return (
    <div className="body">
      <Titulo />
      <div className="container" >

        <div className="one-half column" >
          <Subtitulo texto="CREAR MI CITA" />
          <Form setCitas={setCitas} citas={citas} />
        </div>
        <div className="one-half column">
          <Subtitulo texto="ADMINISTRA TUS CITAS" />
          <Citas setCitas={setCitas} citas={citas} />
        </div>
      </div>

    </div>
  );
}



export default App;