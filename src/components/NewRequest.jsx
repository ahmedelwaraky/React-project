import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";

export default function NewRequest() {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                setRequests(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    if (requests.length === 0) {
        return (
            <div className="table table-striped table-hover table-sm my-5 border rounded-5 shadow">
                <Circles
                    height={800}
                    width={100}
                    color="#4fa94d"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        );
    }

    return (
        <div className="container">
            <table className="table table-striped table-hover table-sm my-5 border rounded-5 shadow m-5">
                <thead>
                    <tr>
                        <th className="ps-5">Name</th>
                        <th>Role</th>
                        <th>Grade</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.map((request) => (
                        <tr key={request.id}>
                            <td><span className="mx-2"><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></span>{request.name}</td>
                            <td>{request.address.suite}</td>
                            <td>{request.email}</td>
                            <td>{request.phone}</td>
                            <td>
                                <div className="cradIcon">
                                    <i className="fa-solid fa-circle-check mx-2"></i>
                                    <i className="fa-solid fa-circle-xmark"></i>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
