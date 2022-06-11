import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Edit = () => {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        userName: '',
        userEmail: '',
        userAge: '',
        userContact: '',
        userWork: '',
        userAddress: '',
        description: '',
    })

    const setData = (e) => {
        console.log(e.target.value);
        const {name, value} = e.target;
        setInputs((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    
    const {id} = useParams("");

    const getData = async () => {
        const res = await fetch(`https://user-details-mern.herokuapp.com/getuser/${id}`, {
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
            setInputs(data);
            console.log("get data")
        }
    }

    const updateUser = async (e) => {
        e.preventDefault();
        const res2 = await fetch(`https://user-details-mern.herokuapp.com/update/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inputs)
        });

        const data2 = await res2.json();
        console.log(data2);

        if(res2.status === 400 || !data2){
            alert("Could not update data.")
        }else{
            alert("Data updated successfully.")
            navigate("/");
        }
    }

    useEffect(() => {
        getData();
    },[]);


  return (
    <div className='container'>
        <form className='mt-5'>
        <div class="mb-3">
                <label for="userName" class="form-label">Name</label>
                <input type="text" value={inputs.userName} onChange={setData} name="userName" class="form-control" id="userName"/>
            </div>
            <div class="mb-3">
                <label for="userEmail" class="form-label">Email</label>
                <input type="email" value={inputs.userEmail} onChange={setData} name="userEmail" class="form-control" id="userEmail"/>
            </div>
            <div class="mb-3">
                <label for="userAge" class="form-label">Age</label>
                <input type="number" value={inputs.userAge} onChange={setData} name="userAge" class="form-control" id="userAge"/>
            </div>
            <div class="mb-3">
                <label for="userContact" class="form-label">Mobile</label>
                <input type="number" value={inputs.userContact} onChange={setData} name="userContact" class="form-control" id="userContact"/>
            </div>
            <div class="mb-3">
                <label for="userWork" class="form-label">Work</label>
                <input type="text" value={inputs.userWork} name="userWork" onChange={setData} class="form-control" id="userWork"/>
            </div>
            <div class="mb-3">
                <label for="userAddress" class="form-label">Address</label>
                <input type="text" value={inputs.userAddress} name="userAddress" onChange={setData} class="form-control" id="userAddress"/>
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea name="description" value={inputs.description} onChange={setData} className='form-control' rows="5" id="description"/>
            </div>
            <button type="submit" onClick={updateUser} class="btn btn-primary">Submit</button>
            </form>
    </div>
  )
}

export default Edit