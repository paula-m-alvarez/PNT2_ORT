import './App.css';
import User from './User/User';

function App() {
  return (
    <div className="App">
          <h3> Listado de Usuarios </h3>
          <User Nombre = "Adele Vance"/>
          <User Nombre = "Juan Perez"/>
    </div>
  );
}

export default App;
