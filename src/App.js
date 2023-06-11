
import './App.css';
import {Testimonio} from './componentes/Testimonio.js';
import testimoniosData from './datos/datos-testimonio.json';

function App() {
  const testimonios = testimoniosData.testimonios;
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        {testimonios.map((testimonio, index) => (
        <Testimonio
          key={index}
          nombre={testimonio.nombre}
          pais={testimonio.pais}
          imagen={testimonio.imagen}
          cargo={testimonio.cargo}
          texto={testimonio.texto}
          empresa={testimonio.empresa}
        />
      ))}
      </div>
      
    </div>
  );
}

export default App;
