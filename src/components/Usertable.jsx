import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import '../style/Usertable.css'

export default function ShowUser() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => { 
            return response.json();
        })
        .then((data) => {
            setUsers(data);
        })
        .catch((error) => {
            console.error("Error :", error);
        });
    }, []);

    if (users.length === 0)
        return (
            <div className="d-flex justify-content-center align-items-center mt-5">
                <Circles
                height="800" 
                width="100"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                />
            </div>
        );
    return (
        <div className="container">
        <table className="table table-striped my-5 border rounded-5 shadow">
            <thead className="">
            <tr>
                <th>ID</th>
                <th>Role</th>
                <th>Specaialization</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user) => (
                <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                    <div className="cradIcon">
                        <i class="fa-regular fa-eye fs-6 mx-1 text-warning"></i>
                        <i class="fa-regular fa-pen-to-square fs-6 mx-1 text-succe"></i>
                        <i class="fa-regular fa-trash-can fs-6 mx-1 text-danger"></i>
                    </div>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}
