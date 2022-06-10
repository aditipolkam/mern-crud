import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';


const Home = () => {

    const [users, setUsers] = React.useState([]);
    console.log(users);

    const getData = async (e) => {
        const res = await fetch("/view", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
        const data = await res.json();
        console.log(data);
        if(res.status === 400 || !data){
            alert("Could not fetch data.")
        }
        else{
            setUsers(data);
            console.log("get data")
        }
    }

    useEffect(() => {
        getData();
    },[]);

    return(
        <div className="mt-5">
            <h1>Home</h1>
            <div className="container">
                <div className="add_btn mt-2 mb-2">
                    <NavLink to="/register" className="btn btn-primary">Add Data</NavLink>
                </div>

                <table class="table">
                    <thead>
                        <tr className="table-dark">
                        <th scope="col">Id</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Job</th>
                        <th scope="col">Contact</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                return(
                                    <tr>
                                        <th scope="row">{index+1}</th>
                                        <td>{user.userName}</td>
                                        <td>{user.userEmail}</td>
                                        <td>{user.userWork}</td>
                                        <td>{user.userContact}</td>
                                        <td className="d-flex justify-content-between">
                                            <NavLink to={`view/${user._id}`}><button className="btn btn-success"><VisibilityIcon/></button></NavLink>
                                            <button className="btn btn-primary"><BorderColorIcon/></button>
                                            <button className="btn btn-danger"><DeleteIcon/></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;