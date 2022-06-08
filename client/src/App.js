import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Register from './components/Register';
import { Routes, Route } from 'react-router-dom';
import Edit from './components/Edit';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/view/:id" element={<Details/>}/>
      </Routes>

    </div>
  );
}

export default App;
