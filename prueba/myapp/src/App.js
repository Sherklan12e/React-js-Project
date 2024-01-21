
import './App.css';
import  { Testimonio } from './components/Tesmonio.jsx'
import testimonioData from './testimonios/TestimoniosData.js'
function App() {
  return (
    <div className="App">
      {testimonioData.map((testimonio , index) =>(

        <Testimonio 
        key={index}
        id={index} //
        name={testimonio.name}
        pais={testimonio.pais}
        cargo={testimonio.cargo}
        imagen={testimonio.imagen}
        empresa={testimonio.empresa}
        testimonio={testimonio.testimonio}

        />
      ))}


      

    </div>
  );
}

export default App;
