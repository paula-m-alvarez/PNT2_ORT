import './App.css';
import UserList from './User/UserList';
import users from "./mocUser.js";

function App() {
  return (
    <div className="App">
          <h3> Listado de Usuarios </h3>
          <UserList users={users} />
    </div>
  );
}

export default App;