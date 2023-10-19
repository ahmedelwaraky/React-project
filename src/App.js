import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Checkcode from "./pages/Checkcode";
import ForgetPassword from "./pages/ForgetPassword";
import TeacherTable from "./components/TeacherTable";
import StudentTable from "./components/StudentTable";
import NewRequest from "./components/NewRequest";



function App() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgetpassword" element={<ForgetPassword/>} />
            <Route path="/checkcode" element={<Checkcode/>} />
            <Route path="/teachertable" element={<TeacherTable/>} />
            <Route path="/studenttable" element={<StudentTable/>} />
            <Route path="/newrquest" element={<NewRequest/>} />

        </Routes>
        </>
    );
}

export default App;
