import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Doctors from "./components/Doctors";
import Navabar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Carousel/>}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/doctors" element={<Doctors/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
