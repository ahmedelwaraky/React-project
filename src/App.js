import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import Login from "./pages/Login";



function App() {
    return (
        <>
        <Routes>
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/Admin" element={<Admin/>} />
        </Routes>
        </>
    );
}

export default App;
