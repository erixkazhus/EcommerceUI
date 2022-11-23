//import React from 'react'
import { mobile } from "../responsive";
import  styled  from "styled-components";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;
const Image = styled.img`
    width: 100%;
    padding: 5px 5px 0px 5px; 
    background-color: transparent;
    height: 80%;
    object-fit: cover;
    ${mobile({ height: "20vh" })}
`;
const Info = styled.div`
    position: absolute;
    height: 65%;
    width: 65%;   
    
`;
const Title = styled.h1`
    padding: 5px 0px 0px 120px; 
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    font-weight: 600;
    background-color: transparent;
    cursor: pointer;
    margin-left:140px;
    margin-top:10px;
`;

const CategoryItem = ({item}) => {
  return (    
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>
                    {item.title}
                </Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
  )
}

export default CategoryItem
