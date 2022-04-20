import React from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BsFillFileEarmarkBarGraphFill, BsBarChartLineFill, BsCurrencyExchange, BsGrid1X2Fill } from "react-icons/bs";

const Header = () => {

    return (
        <Wrapper>
            <InnerDiv>
                <LogoLinks exact="true" to="/"><BsGrid1X2Fill className="iconLogo" />{" "}Cryptomeo.com</LogoLinks>
                <Cat>
                    <PageLinks to="/Trending"><MenuButton><BsBarChartLineFill />{" "}Trending Coins</MenuButton></PageLinks>
                    <PageLinks to="/taders"><MenuButton><BsFillFileEarmarkBarGraphFill />{" "}Taders</MenuButton></PageLinks>
                    <PageLinks to="/exchanges"><MenuButton><BsCurrencyExchange />{" "}Exchanges</MenuButton></PageLinks>
                </Cat>
                <Reg>
                    <PageLinks to="/signin"><MenuButtonReg>Sign in</MenuButtonReg></PageLinks>
                    <PageLinks to="/registration"><RegBut><MenuButtonReg>Register</MenuButtonReg></RegBut></PageLinks>
                </Reg>
            </InnerDiv>
        </Wrapper>
    )
}
const Wrapper = styled.div`
background-color:#011c10 ;
padding: 10px 0 10px 0;
border-bottom: 1px solid #165731;

`;
const InnerDiv = styled.div`
  
    display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	align-content: stretch;

    padding: 0px 20px 0px 20px;
   
`;
const LogoLinks = styled(NavLink)`
font-family: cursive;
font-weight: 800;
font-size: 29px;
&:active {
    /* color: #c4420d; */
  }
  
  `;
const PageLinks = styled(NavLink)`

&:active {
   
  }
  `;
const MenuButton = styled.button`
display: inline-block;
padding: 10px 20px 10px 20px;
/* font-size: 12px; */
font-weight: 700;
background-color: transparent;
margin: 0 10px 0 10px;
color: #fff0ea;
border: 0px;
border-radius:5px;

  
&:hover{
    background-color:#165731;
    cursor: pointer;
  }
`;


const MenuButtonReg = styled.button`
display: inline-block;
padding: 10px 12px 10px 12px;
font-weight: 700;
background-color: transparent;
color: #fff0ea;
border: 0px; 
border-radius:5px;


&:hover{
    background-color:#165731;
    cursor: pointer;
  }
`;
const RegBut = styled.div`
display: inline-block;
background-color: #c26a39;
border-radius:5px;
`;
const Reg = styled.div`
display: inline-block;

`;
const Cat = styled.div`
display: inline-block;
`;

export default Header
