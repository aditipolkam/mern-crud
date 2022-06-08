import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import MailIcon from '@mui/icons-material/Mail';
import WorkIcon from '@mui/icons-material/Work';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';

const Details = () => {
  return (
    <div className='container mt-3'>
        <h1>Welcome, Mark!</h1>
        <Card sx={{ maxWidth: 600 }}>
            <CardContent>
                <div classname="row">
                    <div className="left-view col-lg-6 col-md-6 col-12">
                        <img src="/profile.png" style={{width:50}} alt="profile"/>
                        <h3 className='mt-3'><span style={{fontWeight:400}}>Mark</span><span>(21)</span></h3>
                        <p><MailIcon/><span style={{fontWeight:400}}>mark@gmail.com</span></p>
                        <p><WorkIcon/><span style={{fontWeight:400}}>SDE</span></p>
                    </div>
                    <div className="right-view col-lg-6 col-md-6 col-12">
                       
                        <p><CallIcon/><span style={{fontWeight:400}}>45677654345</span></p>
                        <p><HomeIcon/><span style={{fontWeight:400}}>NYC</span></p>
                        <p>Description: <span style={{fontWeight:400}}>Mark details</span></p>
                        <button className="btn btn-primary mx-2"><BorderColorIcon/></button>
                        <button className="btn btn-danger"><DeleteIcon/></button>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default Details