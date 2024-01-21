
import './App.css';
import  { Testimonio } from './components/Tesmonio.jsx'
function App() {
  return (
    <div className="App">
      <Testimonio 
        name='kULAK'
        pais='arabia'
        cargo='camionero'
        imagen='1'
        empresa='google'
        testimonio='mucho texto' />
      <Testimonio 
        name='kULAK'
        pais='arabia'
        cargo='camionero'
        imagen='2'
        empresa='google'
        testimonio='mucho texto' />
    </div>
  );
}

export default App;
