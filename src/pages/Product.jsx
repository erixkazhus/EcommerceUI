//import React from 'react'

import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";


const Container = styled.div`
`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    object-fit: cover;
    ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
    font-weight: 700;

`;

const List = styled.ul`
    margin: 20px 0px;
    padding: 0;
    list-style: none;
    flex-wrap: wrap;    
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Price = styled.span`
    font-weight: 400;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
`;
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 500;
`;
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 4px;
    border: 1px solid black;
    cursor: pointer;
    
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
    font-size: 17px;
    font-weight: 500;
`;

const FilterSizeOption = styled.option`
  
`;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid black;
    background-color: white;
    cursor: pointer;
    font-weight: 600;

    &:hover{
        background-color: #e9f5f5;        
    }
`;



const Product = () => {
  return (
    <Container>
    <Announcement/>
    <Navbar/>
    <Wrapper>
        <ImgContainer>
            <Image src ="https://ballzy.eu/media/catalog/product/cache/1f82a4a518c32fa549b5e76a8b4522e3/n/i/nike-nike-lebron-ix-oran-hvne.jpg"/>
        </ImgContainer>
        <InfoContainer>
            <Title>
                Nike Lebron Ix
            </Title>
            <List>
                <ListItem>SKU: DH8006_800_8.5_CNF</ListItem>
                <ListItem>Color: Orange</ListItem>
                <ListItem>Brand: Nike</ListItem>
                <ListItem>Gender: Male</ListItem>          
            </List>
            <Price>
               Eur: 150.00 
            </Price>
            <FilterContainer>
            <Filter>
                <FilterTitle>
                    Color
                </FilterTitle>
                <FilterColor color="blue"/>
                <FilterColor color="orange"/>
                <FilterColor color="black"/>               
            </Filter>
            <Filter>
                <FilterTitle>
                    Size
                </FilterTitle>
                <FilterSize>
                    <FilterSizeOption>42</FilterSizeOption>
                    <FilterSizeOption>43</FilterSizeOption>
                    <FilterSizeOption>44</FilterSizeOption>
                    <FilterSizeOption>45</FilterSizeOption>
                    <FilterSizeOption>46</FilterSizeOption>
                    <FilterSizeOption>47</FilterSizeOption>
                    <FilterSizeOption>48</FilterSizeOption>
                    <FilterSizeOption>49</FilterSizeOption>
                    <FilterSizeOption>50</FilterSizeOption>
                </FilterSize>               
            </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>
                <Button>Add to cart</Button>
            </AddContainer>
        </InfoContainer>
    </Wrapper>    
    <Newsletter/>
    <Footer/>
  </Container>
  )
}

export default Product
