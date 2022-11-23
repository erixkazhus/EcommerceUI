//import React from 'react'
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(7, 63, 140, 0.5), rgba(7, 63, 140, 0.5)), url("https://www.pikpng.com/pngl/b/266-2669581_nike-air-max-infuriate-mid-for-80-nike.png") right;
    background-repeat: no-repeat;
    background-size: auto;    
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 40px;
    ${mobile({ background: "none", backgroundColor: "#073f8c"})}
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: transparent;
    ${mobile({ width: "70%", margin: "50px 50px" })}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;

`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    width: 70%;
    margin: 10px 0px;
    padding: 10px;
`;

const Link = styled.a`
    font-size: 12px;
    margin: 5px 0px;
    font-weight: 600;
    text-decoration: underline;
    cursor: pointer;
`;

const Button = styled.button`
    width: 76%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;

const Login = () => {
  return (
    <Container>
    <Wrapper>
        <Title>SIGN IN</Title>
        <Form>            
            <Input placeholder="Username"/>            
            <Input placeholder="Password"/>            
            <Button>LOGIN</Button>
            <Link>Forgot Password?</Link>
            <Link>Create New Account</Link>
        </Form>
    </Wrapper>      
</Container>
  )
}

export default Login
