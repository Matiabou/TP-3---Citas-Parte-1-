
import Cita from '../Cita/Cita';
import './Citas.css';

const Citas = ({ citas, setCitas }) => {
  return (
    <div className="Citas">
      {citas.map((cita, index) => (
       <Cita setCitas={setCitas} citas={citas} ID={cita.ID} mascota={cita.mascota} dueno={cita.dueno} fecha={cita.fecha} hora={cita.hora} sintomas={cita.sintomas} />
      ))}
    </div>
  );
}

export default Citas;