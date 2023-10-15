import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./Register";
import AdminDash from "./AdminDash";
import Admin from "./pages/Admin";



function App() {
    return (
        <>
        <Routes>
            <Route path="/register" element={<Register/>} />
            <Route path="/admin" element={<AdminDash/>} />
            <Route path="/Admin" element={<Admin/>} />
        </Routes>
        </>
    );
}

export default App;
