import './App.css';
import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';
import PhoneAuth from './PhoneAuth'

const App=()=>{

  const [login,setLogin]=useState(false)
  const [data,setData]=useState({})
  const [picture,setPicture]=useState('')

  const responseFacebook=(res)=>{
    console.log(res)
    setData(res)
    setPicture(res.picture.data.url)
    if(res.accessToken){
      setLogin(true)
    }
    else {
      setLogin(false)
    }
  }

  return(
   <>
    <div align="center" className="container">
    <Card style={{width:'600px'}}>
    <Card.Header>
    { 
    <FacebookLogin
    appId='850425218886243'
    callback={responseFacebook}
    autoLoad={true}
    fields="name,email,picture"
    scope="public_profile, email"
    icon='fa-facebook'
    /> }

    { login && <Image src={picture} roundedCircle/>}
    </Card.Header>
    {login &&
    <Card.Body>
    <Card.Title>{data.name}</Card.Title>
    <Card.Text>{data.email}</Card.Text>
    </Card.Body>}
    </Card>
    </div>
    
    <div align="center">
    <br></br>
    <PhoneAuth/>
    </div>

    </>
    )
}

export default App;
