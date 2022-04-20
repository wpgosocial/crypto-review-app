import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import React, { useState, useContext } from 'react';
import { RegistrationContext } from "../context/RegistrationContext";

const Registration = ({ }) => {
  const { isRgistered, setIsRgistered } = useContext(RegistrationContext);

  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleRegistration = (event) => {
    event.preventDefault();
    // console.log("The value is ................ :", value);
    fetch(`/api/registration`, {
      method: 'POST',
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify({ username: username, email: email, password: password, confirmPass: confirmPass }),
    })
      .then(res => res.json())
      .then((data) => {
        setIsRgistered(data.data)
        navigate(`/signin`)
      })
      .catch((err) => { console.log(err) })
  }

  // console.log("isRgistered @@@@@@", isRgistered)
  return (
    <>
      <Wrapper>
        <SigninText>Sign up on Cryptomeo.com <Span>Network</Span></SigninText>
        <DivForm>
          {/* <Form onSubmit={(e) => handleRegistration(e)}> */}
          <Form onSubmit={handleRegistration}>
            {/* <Label>Username</Label> */}
            <Input type="text" placeholder="Hi! Enter ur username" value={username} onChange={((e) => { setUsername(e.target.value); })} />
            {/* <Label>Email</Label> */}
            <Input type="email" placeholder="and ur email" value={email} onChange={((e) => { setEmail(e.target.value); })} />
            {/* <Label>Password</Label> */}
            <Input type="password" placeholder="then ur password" value={password} onChange={((e) => { setPassword(e.target.value); })} />
            {/* <Label>Confirm password</Label> */}
            <Input type="password" placeholder="last, confirm password." value={confirmPass} onChange={((e) => { setConfirmPass(e.target.value); })} />
            <Button type="submit" > Register </Button>
          </Form>
        </DivForm>
      </Wrapper>
    </>
  )
}


const Wrapper = styled.div`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
align-content: stretch;
margin-top: 50px;
`;

const Form = styled.form`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
align-content: stretch;
width: 100%;
padding: 25px;
`;
const SigninText = styled.h3`
/* color: var(--); */
`;
const Span = styled.span`
color: var(--tertiary-color);
`;
const Label = styled.label`
color: var(--tertiary-color);
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

	background-color:var(--primary-color );
}
&:active {
	position:relative;
	top:1px;
}
`;
const DivForm = styled.div`
padding: 20px;
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

export default Registration