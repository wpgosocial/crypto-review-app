import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <Wapper>
            <Section1>
                <Title>Company</Title><br/>
                <p>About Us</p>
                <p>Terms of use</p>
                <p>Privacy Policy</p>
            </Section1>
            <Section2>
                <Title>Support</Title><br/>
                <p>FAQ</p>
                
                <p>Contact Support</p><br/>
            </Section2>
            <Section3>
                <Title>Social</Title><br/>
                <p>Twitter</p>
                <p>Discord</p>
            </Section3>
        </Wapper>
    )
}
const Wapper = styled.div`
margin-top: 55px ;
border-top: 1px solid var(--primary-color);
padding: 25px 0 25px 0;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-evenly;
align-items: center;
align-content: stretch;
/* background-color: var(--tertiary-color); */
background-color:#011c10 ;
`;
const Title = styled.h3``;
const Section1 = styled.div``;
const Section2 = styled.div``;
const Section3 = styled.div``;
export default Footer