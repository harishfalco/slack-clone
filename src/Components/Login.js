import React from 'react'
import styled from 'styled-components'
import {auth , provider} from '../FireBase/FireBase'
const Login = (props) => {
   const signIn = () =>{
     
    auth.signInWithPopup(provider)
     .then((result)=>{
         const newUser = {
             name:result.user.displayName,
             photo:result.user.photoURL
             
         }
         localStorage.setItem('user',JSON.stringify(newUser))
         props.setUser(newUser);
     })
     .catch((error)=>{
         console.log(error.message)
     })
   }
    return (
        <Container>
           <Contnet>
               <Image  src="https://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png"/>
               <h1>Sign in slack</h1>
               <SignInButton onClick={signIn}>
                   Sign in with google
               </SignInButton>
           </Contnet>
        </Container>
    )
}

export default Login

const Container = styled.div
`
width:100%;
height:100vh;
background-color:#f8f8f8;
display:flex;
align-items:center;
justify-content:center;
`;

const Image = styled.img
`
height:100px;
`;

const Contnet = styled.div
`
background-color:white;
padding:100px;
border-radius:10px;
box-shadow: 0 1px 3px rgb( 0 0 0 / 124),0 1px 2px rgb(0 0 0 /24%);
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`


const SignInButton = styled.button
`
margin-top:50px;
background-color: green;
color:white;
padding: 10px; 
border:none;
height:40px;
border-radius:4px;
cursor:pointer;
font-size:15px;
`;































































