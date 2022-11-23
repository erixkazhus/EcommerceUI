import styled from 'styled-components';
import React from 'react';
import {sliderItems} from "../data";
import { useState } from "react";
import  {ArrowLeft, ArrowRight}  from '@mui/icons-material';
//import  {ArrowRight}  from '@mui/icons-material/ArrowRight';
import { mobile } from "../responsive";


const Container = styled.div`
    height: 100vh;
    width: 100%; 
    display: flex;
    position: relative;
    overflow: hidden;
    margin-top:10px;
    ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
    height: 50px;
    width: 50px; 
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;
const Wrapper = styled.div`
    height: 50px;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props)=>props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
    
    
`;
const ImgContainer = styled.div`
    height: 85%;
    flex: 1;
    
    
`;

const Image = styled.img`
    width: 90%;
    position: 'absolute';
    marginTop: 90px;
    top: 30px;
    bottom: 0;
    left: 0;
    right: 0; 
    padding: 60px 0px 0px 40px;  
    background-color: transparent;
`;

const InfoContainer = styled.div`
    flex: 1;
    
`;
const Title = styled.h1`
    font-size: 70px;
    
`;
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500px;
    letter-spacing: 3px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) =>{
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
        } else{
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }
    };
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeft>
            </ArrowLeft>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map(item=>(
            <Slide bg={item.bg} key={item.id}>             
            <ImgContainer>
            <Image  src={item.img}/>
            </ImgContainer>                       
            <InfoContainer>
                <Title>
                    {item.title}
                </Title>
                <Desc>
                    {item.desc}
                </Desc>
                <Button>
                    Show Now
                </Button>
            </InfoContainer>   
            </Slide>
            ))}      
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRight>
            </ArrowRight>
        </Arrow>

    </Container>
  )
}

export default Slider
