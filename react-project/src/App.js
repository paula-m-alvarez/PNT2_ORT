import './App.css';
import UserPage from './User/UserPage.jsx';
import UserDetails from './User/UserDetails.jsx';
import { BrowserRouter, Router } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //       <h3> Listado de Usuarios </h3>
    //       <UserPage />
    // </div>
    <BrowserRouter>
      <Router>
        <Router Path="/" element = {<h1>Home</h1>} />
        <Router Path="/users" element = { <UserPage />} />
        <Router Path="/users/:id" element = { <UserDetails /> } />
        <Router Path="/login" element = {<h1> Login </h1>} />
      </Router>
    </BrowserRouter>
  );
}

export default App;