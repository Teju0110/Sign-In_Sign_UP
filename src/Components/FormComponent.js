import React, { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router";

const BackgroundBox = styled.div`
  background-color: #beeefb;
  height: 50vh;
  width: 50%;

  justify-content: center;
  align-items: center;

  margin: 15rem auto;
  position: relative;
  border-radius: 23px;

  .signIn {
    position: absolute;
    top: 0%;
    text-align: center;
    z-index: ${(props) => (props.clicked ? "-600" : "500")};
    transform: ${(props) => (props.clicked ? "none" : "translateX(150%)")};
    transition: all 1s;
  }

  .signUp {
    position: absolute;
    top: 0%;
    text-align: center;
    z-index: ${(props) => (props.clicked ? "500" : "-500")};
    transform: ${(props) => (props.clicked ? "translateX(20%)" : "none")};
    transition: all 1s;
  }

  .text1 {
    z-index: ${(props) => (props.clicked ? "700" : "-700")};
    transform: ${(props) =>
      props.clicked ? "translateX(250%)" : "translateX(0%)"};

    transition: transform 0.8s ease-in-out;
  }

  .text2 {
    z-index: ${(props) => (props.clicked ? "-700" : "700")};
    transform: ${(props) =>
      props.clicked ? "translateX(0)" : "translateX(100%)"};

    transition: transform 0.8s ease-in-out;
  }
`;

const Box1 = styled.div`
  background-color: #f1fdcd;
  width: 50%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;

  transform: ${(props) =>
    props.clicked ? "translateX(90%)" : "translateX(10%)"};

  transition: transform 1s;

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #f1fdcd;

    z-index: 600;
  }

  &::before {
    top: 3rem;
    border-radius: 23px;
    border-top:4px solid  #0492c2;
    border-right:4px solid  #0492c2;
    border-left:4px solid  #0492c2;
    border-bottom:4px solid  #0492c2;
  }

  &::after {
    bottom: 3rem;
    border-radius: 23px  23px 0 0;
    border-top:4px solid  #0492c2;
    border-right:4px solid  #0492c2;
    border-left:4px solid  #0492c2;
  }
  }
`;

const Box2 = styled.div`
  background-color: #0492c2;
  width: 45%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;

  transform: ${(props) =>
    props.clicked ? "translateX(-122%)" : "translateX(0%)"};

  border-radius: ${(props) =>
    props.clicked ? "23px 0 0 23px" : "0 23px 23px 0"};
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

const Input = styled.input`
  background-color: #fff;
  border: none;
  border-bottom: 2px solid #053271;
  padding: 1rem 2rem;
  margin: 0.5rem 0;
  width: 100%;
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

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 2rem;
`;

const AnimateButton = styled.button`
  position: absolute;
  z-index: 1000;
  height: 4rem;
  width: 10rem;
  top: 120%;
  border-bottom: 2px solid black;
  cursor: pointer;
  font-weight: bold;
  color: white;
  font-size: 2rem;

  background-color: #0492c2;

  transition: all 1.5s;

  left: ${(props) => (props.clicked ? "50%" : "40%")};
`;

const Text = styled.div`
  z-index: 1000;
  font-size: 1.5rem;
  display: flex;
  position: absolute;
  flex-direction: column;
  letter-spacing: 0.2rem;
  color: black;
  top: 25%;
`;

const Link = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 1.4rem;
  margin: 1rem 0;
  cursor: pointer;
`;

const Alert = styled.h2`
  color: black;
  background-color: #e3242b;
`;

const FormComponent = () => {
  const { signUp, signIn, currentUser } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [errorSignIn, setErrorSignIn] = useState("");
  const [errorSignUp, setErrorSignUp] = useState("");

  async function handleSignUp(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setErrorSignUp("Password do not match!!");
    }

    try {
      await signUp(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch {
      setErrorSignUp("Failed to sign up");
    }
  }

  async function handleSignIn(e) {
    e.preventDefault();

    try {
      const signin = await signIn(
        emailRef.current.value,
        passwordRef.current.value
      );
      navigate("/dashboard");
    } catch {
      setErrorSignIn("Failed to Sign In");
    }
  }

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  let navigate = useNavigate();
  const handleForgorPass = () => navigate("/forgotPassword");

  return (
    <>
      <BackgroundBox clicked={click}>
        <Form className="signIn" onSubmit={handleSignIn}>
          <Title>Sign In</Title>

          {errorSignIn && <Alert variant="danger">{errorSignIn}</Alert>}
          <Input
            type="email"
            name="email"
            id="emailIdIn"
            placeholder="Email"
            required
          />
          <Input
            type="password"
            name="password"
            id="passwordIdIn"
            placeholder="Password"
            required
          />
          <Link onClick={handleForgorPass}>Forgot Your Password?</Link>
          <Button>Sign In</Button>
        </Form>

        <Form className="signUp" onSubmit={handleSignUp}>
          <Title>Sign Up</Title>
          {errorSignUp && <Alert variant="danger">{errorSignUp}</Alert>}

          <Input
            type="email"
            ref={emailRef}
            id="emailIdUp"
            placeholder="Email"
            required
          />
          <Input
            type="password"
            ref={passwordRef}
            id="passwordIdUp"
            placeholder="Password"
            required
          />

          <Input
            type="password"
            ref={passwordConfirmRef}
            id="passwordconfirmId"
            placeholder="Confirm Password"
            required
          />
          <Button type="submit">Sign Up</Button>
        </Form>

        <Text className="text1" clicked={click}>
          <h1>Hi There !</h1>
          Already Have Acoount?
          <AnimateButton clicked={click} onClick={handleClick}>
            Sign In
          </AnimateButton>
        </Text>

        <Text className="text2" clicked={click}>
          <h1>Hi There !</h1>
          Don't have account ?
          <AnimateButton clicked={click} onClick={handleClick}>
            Sign Up
          </AnimateButton>
        </Text>

        <Box1 clicked={click} />
        <Box2 clicked={click} />
      </BackgroundBox>
    </>
  );
};

export default FormComponent;
