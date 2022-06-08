import React from 'react'
import { useState } from 'react';

const Edit = () => {

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
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
    </div>
  )
}

export default Edit