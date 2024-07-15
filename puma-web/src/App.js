import Home from './components/Home';
import {Routes,Route} from 'react-router-dom';
import Register from './components/Register';
import Login from "./components/Login"
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
