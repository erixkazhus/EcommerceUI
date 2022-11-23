//import { WorkspacePremiumRounded } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(93, 53, 204, 0.5), rgba(93, 53, 204, 0.5)), url("https://www.pikpng.com/pngl/b/158-1582218_nike-basketball-nike-pg2-paul-george-sneakers-sony.png") center;
    background-repeat: no-repeat;
    background-size: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: transparent;
    ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;

`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 10px;
    font-weight: 600;
`;

const Button = styled.button`
    min-width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create an Account</Title>
            <Form>
                <Input placeholder="Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="Username"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Agreement>By creating account I agree personal data processing in accordance to with the <b>PRIVACY POLICY</b> </Agreement>
                <Button>Create Account</Button>
            </Form>
        </Wrapper>      
    </Container>
  )
}

export default Register