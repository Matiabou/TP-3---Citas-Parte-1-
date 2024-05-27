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
      mascota: "Nina",
      dueño:"Martin",
      fecha:"2021-08-05",
      hora:"8:20",
      sintomas:"Le duele la pierna"
    },
    {
      ID: 2,
      mascota: "Sifon",
      dueño:"Flecha",
      fecha:"2023-08-04",
      hora:"09:24",
      sintomas:"Duerme mucho"
    },
    {
      ID: 3,
      mascota: "Floki",
      dueño:"Ari",
      fecha:"2023-08-05",
      hora:"16:15",
      sintomas:"No esta comiendo"
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