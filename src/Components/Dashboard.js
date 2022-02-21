import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useAuth } from "../Context/AuthContext";

const Alert = styled.h2`
  color: black;
  background-color: #e3242b;
`;

const Container=styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top:20px;
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
  margin-bottom:50px;
  box-shadow: 0 7px #999;
`;

const Box1 = styled.div`
  background-color: #f1fdcd;
  width: 50%;
  height: 100%;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 2rem;
`;


const Dashboard = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/");
    } catch {
      setError("Failed to logout");
    }
  }

  return (
    <Container>
      <Box1>
        <Title>Welcome !!</Title>
        {error && <Alert variant="danger">{error}</Alert>}

        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </Box1>
    </Container>
  );
};

export default Dashboard;
