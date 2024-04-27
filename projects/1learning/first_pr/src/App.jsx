import Butom2 from "./components/Buttom";
import MiComponente from "./components/micomponent";
import TaskList from './components/TaskList';
function Butom() {
  return (
    <div>
      <h1>lmao k</h1>

    </div>
  )
}


function App(){
  return (
    <div>

      <h1>Hi! there</h1>
      <Butom/>
      < Butom2 />
      <MiComponente titulo="Re" contenido="El contenido de la pagina es esto ctmr"/> 
      <TaskList />
    </div>
  )
}

export default App;