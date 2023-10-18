import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Checkcode from "./pages/Checkcode";
import ForgetPassword from "./pages/ForgetPassword";
import Usertable from "./components/Usertable";



function App() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgetpassword" element={<ForgetPassword/>} />
            <Route path="/checkcode" element={<Checkcode/>} />
            <Route path="/userdashboard" element={<Usertable/>} />

        </Routes>
        </>
    );
}

export default App;
