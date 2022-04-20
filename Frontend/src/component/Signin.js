
import styled from "styled-components";
import { useNavigate } from "react-router-dom"
import { MembersContext } from "../context/MembersContext"
import React, { useState, useContext } from 'react';

const Signin = () => {

  const { isAmember, setIsAmember } = useContext(MembersContext);


  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleSignin = (event) => {
    event.preventDefault();
    fetch(`/api/registration`, {
      method: 'POST',
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify({ username: username, password: password, }),
    })
      .then(res => res.json())
      .then((data) => {
        setIsAmember(data.data)
        navigate(`/Trending`)
        // navigate(`/profile/${isAmember._id}`)

      })
      .catch((err) => { console.log(err) })
  }
  // console.log("The isAmember is ................ :", isAmember);
  return (
    <>
      <Wrapper>
        <SigninText>Sign in to Cryptomeo.com <Span>Network</Span></SigninText>
        <Wra>
          <Form onSubmit={handleSignin}>
            {/* <Label>Username</Label> */}
            <Input type="text" placeholder="Hi! Plz enter ur username..." value={username} onChange={((e) => { setUsername(e.target.value); })} />
            {/* <Label className="left">Password</Label> */}
            <Input type="password" placeholder="Then ur password..." value={password} onChange={((e) => { setPassword(e.target.value); })} />
            <Button typte="submit">Sign in</Button>
          </Form>
        </Wra>
      </Wrapper>
    </>
  )
}

const Form = styled.form`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: flex-start;
align-items: center;
align-content: stretch;
width: 100%;
padding: 45px;

`;
const Label = styled.label`

color: var(--tertiary-color);
&.left{
  display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: stretch;
}
`;
const Input = styled.input`
width: 100%;
margin: 5px 5px;
padding: 11px;
font-size: 15px;
border-width: 1px;
border-color: #165731;
background-color: #FFFFFF;
color: #165731;
border-style: solid;
border-radius: 5px;
box-shadow: 0px 0px 0px rgba(22,87,49,.75);
text-shadow: 0px 0px 5px rgba(66,66,66,.0);
  :focus {
    outline: 2px solid var(--tertiary-color);
  }
`;
const Button = styled.button`
font-size:18px;
width: 100%;
color: var(--secondary-color);
padding: 10px;
margin-top: 10px;
border: 0;
border-radius: 5px;
background-color: var(--tertiary-color);
&:hover {

	background-color:var( --primary-color );
}
&:active {
	position:relative;
	top:1px;
}
`;
const SigninText = styled.h3`
`;
const Span = styled.span`
color: var(--tertiary-color);
`;
const Wrapper = styled.div`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
align-content: stretch;
margin-top: 50px;
`;
const Wra = styled.div`
border-radius:10px;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
align-content: stretch;
width: 400px;
margin-top: 30px;
background-color: var(--secondary-color);
`;
const Banner = styled.div`
background-color: #FFFFFF ;
position: relative;
`;
const ImageBaner = styled.img`
width:100%;
height:100%;
align-items: center;
position: relative;
`;

export default Signin