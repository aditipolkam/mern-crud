import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailIcon from '@mui/icons-material/Mail';
import WorkIcon from '@mui/icons-material/Work';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import { useParams, NavLink } from 'react-router-dom';
import { useEffect,useState } from 'react';

const Details = () => {

    const [user, setUser] = React.useState([]);
    console.log(user);
    const {id} = useParams("");

    const getData = async () => {
        const res = await fetch(`/getuser/${id}`, {
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
            setUser(data);
            console.log("get data")
        }
    }

    useEffect(() => {
        getData();
    },[]);

  return (
    <div className='container mt-3'>
        <h1>Welcome, {user.userName}!</h1>
        <Card sx={{ maxWidth: 600 }}>
            <CardContent>
                <div classname="row">
                    <div className="left-view col-lg-6 col-md-6 col-12">
                        <img src="/profile.png" style={{width:50}} alt="profile"/>
                        <h3 className='mt-3'><span style={{fontWeight:400}}>{user.userName}</span><span>({user.userAge})</span></h3>
                        <p><MailIcon/><span style={{fontWeight:400}}>{user.userEmail}</span></p>
                        <p><WorkIcon/><span style={{fontWeight:400}}>{user.userWork}</span></p>
                    </div>
                    <div className="right-view col-lg-6 col-md-6 col-12">
                       
                        <p><CallIcon/><span style={{fontWeight:400}}>{user.userContact}</span></p>
                        <p><HomeIcon/><span style={{fontWeight:400}}>{user.userAddress}</span></p>
                        <p>Description: <span style={{fontWeight:400}}>{user.description}</span></p>
            
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default Details