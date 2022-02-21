import React, { useRef, useState } from 'react';
import styled from "styled-components";
import { useAuth } from '../Context/AuthContext';

const Input = styled.input`
  background-color: #fff;
  border: none;
  border-bottom: 2px solid #053271;
  padding: 1rem 2rem;
  width: 50%;
  margin-top:50px;
`;

const Button = styled.button`
  border-radius: 3px;
  padding: 1rem 3.5rem;
  margin-top: 1rem;
  border: 1px solid black;
  background-color: black;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 1px;
  box-shadow: 0 7px #999;
`;

const Link = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 1.4rem;
  margin-top:15px;
  margin-bottom:100px;
  font-size:20px;
  font-weight:bold;
  text-transform: uppercase;
  cursor:pointer;
  
`;
const Title = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 2rem;
    `;

const Container=styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top:20px;
`;


const Form = styled.form`
  color: #1b1b1b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 4rem;
`;

const Box1 = styled.div`
  background-color: #f1fdcd;
  width: 50%;
  height: 100%;
  margin-top:20px;
    
`;

const Alert=styled.h2`
   color:white;
   background-color:black;
`;

const ForgotPassword = () => {
    const emailRef=useRef()
    const[message,setMessage]=useState("");
    const[error,setError]=useState("");
    const {resetPassword}=useAuth();

    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
          

          await resetPassword(emailRef.current.value)
          setError("")
          setMessage("Check your inbox for further instructions")
        } catch {
          setError("Failed to reset password")
          setMessage("")
        }

      }


  return (
  <Container>
     <Box1>
      <Form onSubmit={handleSubmit}>
      <Title>Password Reset</Title>
      {message && <Alert variant="danger">{message}</Alert>} 
      {error && <Alert variant="danger">{error}</Alert>} 
              
      <Input 
            type="email"
            ref={emailRef}
            id="emailIdUp"
            placeholder="Email" required
          />

        <Button type='submit'>
            Reset Password
        </Button>
        <Link href='/'>Login</Link>
      </Form>
      </Box1>
  </Container>
  );
};

export default ForgotPassword;
