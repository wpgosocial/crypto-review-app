import React, { useState, useEffect, useContext } from 'react';
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
import { ReviewContext } from "../context/ReviewContext";

const ReviewBox = ({ coinid, setSingleCoinReview }) => {
  const { reviewContent, setReviewContent } = useContext(ReviewContext);
  const [review, setReview] = useState("")

  // let navigate = useNavigate();

  const handleReviewFunction = (e) => {
    e.preventDefault();
    // console.log("The value is ................ :", value);
    fetch(`/api/reviews`, {
      method: 'POST',
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify({ review: review, coinid: coinid }),
    })
      .then(res => res.json())
      .then((data) => {
        setReviewContent(data.data)
        setReview("")
        setSingleCoinReview(true)
      })
      .catch((err) => { console.log(err) })
  }

  // console.log("review ************", review)

  return (
    <>
      <Wapper>
        <div>Tell us</div>
        <form onSubmit={handleReviewFunction}>
          <Title>What's your views ... </Title><br/><br/>
          <div><Input classsName="reviewinput" value={review} placeholder="Express your views..." type="text" onChange={(e) => { setReview(e.target.value); }} /></div>
          <div><Button classsName="reviewbutton" type="submit" >Views</Button></div>
        </form>
      </Wapper>
    </>
  )
}

const Wapper = styled.div`
padding: 10px;
background-color:#011c10;
border: 1px solid var(--tertiary-color);
margin-bottom:15px;
`;

const Title = styled.h2``;

const Input = styled.input`
padding: 20px 0  20px 0px;
font-size: 25px;
border-width: 3px;
border-color: var(--tertiary-color);
background-color: #ffffff;
color: var(--tertiary-color);
border-style: dashed;
border-radius: 5px;
box-shadow: 0px 0px 5px rgba(66,66,66,.75);
width: 98%;

 &.reviewinput:focus {
     outline:none;
}
`;
const Button = styled.button`
width: 100%;
padding:20px;
font-size:20px;
font-weight:bold;
border-radius:10px;
border:0;
color: var(--secondary-color);
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,66,0.9262079831932774) 35%, rgba(196,66,13,1) 100%);

&:hover {
  background: rgb(196,66,13);
background: linear-gradient(90deg, rgba(196,66,13,1) 0%, rgba(9,121,66,0.9262079831932774) 35%, rgba(35,34,42,1) 100%);
}
`;


export default ReviewBox;