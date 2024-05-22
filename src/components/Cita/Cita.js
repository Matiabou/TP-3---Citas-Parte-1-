
import './Cita.css';

const Cita = ({ mascota, dueno, fecha, hora, sintomas,ID, setCitas, citas}) => {
  const eliminarCita = () => {
  if(window.confirm("Desea eliminar la cita?")){
    const nuevasCitas = citas.filter(cita => cita.ID !== ID); 
    setCitas(nuevasCitas);
  }
  }
  return (
    <div className="Cita">
      <p>Mascota: <span>{mascota}</span></p>
      <p>Dueño: <span>{dueno}</span> </p>
      <p>Fecha: <span>{fecha}</span> </p>
      <p>Hora: <span>{hora}</span> </p>
      <p>Sintomas: <span>{sintomas}</span> </p>
      <button class="button elimnar u-full-width" onClick={eliminarCita}>Eliminar ×</button>    
      </div>
  );
}



export default Cita;