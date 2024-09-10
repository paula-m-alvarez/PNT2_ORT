import './App.css';
import UserPage from './User/UserPage.jsx';
import UserDetails from './User/UserPage.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //       <h3> Listado de Usuarios </h3>
    //       <UserPage />
    // </div>
    <BrowserRouter>
       <div className="App">
          <Routes>
            <Route path="/" element = {<h1>Home</h1>} />
            <Route path="/users" element = { <UserPage />} />
            <Route path="/users/:id" element = { <UserDetails /> } />
            <Route path="/login" element = {<h1> Login </h1>} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;