
import styled from "styled-components";
import ReviewBox from "./ReviewBox";
import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { CoinListContext } from "../context/CoinListContext";
import { BsFillEmojiHeartEyesFill, BsEmojiHeartEyes, BsReplyAllFill, BsReplyAll } from "react-icons/bs";
import { FaInfinity,FaCommentsDollar } from "react-icons/fa";

const CoinDetails = () => {

    const { onCoinList1 } = useContext(CoinListContext);
    const { coinid } = useParams();

    const [singleCoinReview, setSingleCoinReview] = useState(false);

    const [reviewContent, setReviewContent] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/reviews/${coinid}`)
            .then((res) => res.json())
            .then((json) => {
                setReviewContent(json.data);
            })
            .then(() => { setIsLoading(false); });
    }, [singleCoinReview]);

    if (isLoading) return ("Loading...");

    console.log("onCoinList1 RRRRRRRRRRRRR", onCoinList1)// remove when projet complete 

    const onecoin = onCoinList1.filter(coinFilter => coinFilter.id === coinid);

    return (
        <>
            <Banner >
                <Div1>
                <Name>{onecoin[0].name}</Name><br/>
                <div className="dark">Ticker: {onecoin[0].symbol.toUpperCase()}</div>
                <Dark>Rank by Market Cap: {onecoin[0].market_cap_rank}</Dark>
                <div>24 Hr Low: ${onecoin[0].low_24h}</div>
                <Dark>24 Hr High: ${onecoin[0].high_24h}</Dark>
                </Div1>
                <Div2>
                    <BannerImg className="banner" src={onecoin[0].image} />
                </Div2>
                <Div3>
                    <Price>USD$ {onecoin[0].current_price}</Price><br/>
                <div>Market Cap: ${onecoin[0].market_cap} {onecoin[0].market_cap_change_percentage_24h.toFixed(3) < 0 ? (<Span className="red"> {onecoin[0].market_cap_change_percentage_24h.toFixed(3)}% </Span>) : (<Span className="green"> {onecoin[0].market_cap_change_percentage_24h.toFixed(3)}% </Span>)} </div>
                <Dark>Total Volume: ${onecoin[0].total_volume}</Dark>
                <div>Total Supply: {onecoin[0].total_supply || <FaInfinity/>}</div>
                <Dark>Max Supply: {onecoin[0].max_supply || <FaInfinity/>} </Dark>
                <div>Circulating Supply: {onecoin[0].circulating_supply}</div>
                </Div3>
                <Div4>
                <Title>ATH/ATL</Title><br/>
                <div>ATH: ${onecoin[0].ath} {onecoin[0].ath_change_percentage}%</div>
                <Dark>ATL: ${onecoin[0].atl} {onecoin[0].atl_change_percentage}%</Dark>
                </Div4>
            </Banner>

            <hr />
            {/* +++++++++++++++++++++++++ header & banner +++++++++++++++++++++++++++ */}

            <ReviewDiv>
            <ReviewBox
                coinid={coinid}
                setSingleCoinReview={setSingleCoinReview}
            />
            {reviewContent?.reverse().map((theReview) => {
                return (
                    <>
                    <InnerWapper>
                        <ReviewText>{theReview.review}</ReviewText>
                        <LikeDiv><LikeSpan><BsEmojiHeartEyes/></LikeSpan> <LikeSpan><FaCommentsDollar/></LikeSpan> <LikeSpan><BsReplyAll/></LikeSpan>   </LikeDiv> 
                    </InnerWapper>
                    </>
                )
                
            })}
            </ReviewDiv>


        </>
    )
}

const Banner = styled.div`
    /* background-image: url(""); */
    background-image: url("https://cdn.pixabay.com/photo/2016/11/10/05/09/bitcoin-1813503_1280.jpg");
    background-repeat: repeat-x;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
    align-content: stretch;
    &.banner{
        width: 100%;
        height: 33%;
    }
    &:hover{
        /* background: var(--tertiary-color); */
        opacity: 0.8;
}
`;
const Name = styled.h2`
color: var(--primary-color);
`;
const Price = styled.h2`
color: var(--primary-color);
`;
const Title = styled.h3`
color: var(--primary-color);
`;
const Span = styled.span`
font-weight: bold;
color: var(--primary-color);

`;
const Div1 = styled.div`
background: rgba(9,121,66,0.33237044817927175);
padding:20px;
border-radius: 20px;
margin-right: 10px;
border: 1px solid var(--tertiary-color);
box-shadow: 0px 0px 43px 10px rgba(9,121,66,0.31);
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: flex-start;
align-items: flex-start;
align-content: stretch;
`;

const Div2 = styled.div`
margin-right: 10px;
padding: 20px;
`;
const Div3 = styled.div`
background: rgba(9,121,66,0.33237044817927175);
padding:20px;
border-radius: 20px;
margin-right: 10px;
border: 1px solid var(--tertiary-color);
box-shadow: 0px 0px 43px 10px rgba(9,121,66,0.31);
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: flex-start;
align-items: flex-start;
align-content: stretch;

`;
const Div4 = styled.div`
background: rgba(9,121,66,0.33237044817927175);
padding:20px;
border-radius: 20px;
margin-right: 10px;
border: 1px solid var(--tertiary-color);
box-shadow: 0px 0px 43px 10px rgba(9,121,66,0.31);
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: flex-start;
align-items: flex-start;
align-content: stretch;

`;

 
 const Dark = styled.div`
 background-color: rgba(9,121,66,0.61);
 padding: 0 5px 0 5px;
 width: 100%;
 border-top: 1px solid var(--primary-color);
 border-bottom: 1px solid var(--primary-color);
 display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: flex-start;
align-items: flex-start;
align-content: stretch;
 `;

const BannerImg = styled.img`
width: 200px;
/* opacity:100%; */
`;
// ReviewBox ******************************

const ReviewDiv = styled.div`
width: 50%;
padding: 0 25px 0px 25px;

`;
const ReviewText = styled.p`
border: 1px solid var(--tertiary-color);
padding: 20px 5px 20px 5px;
border-top-right-radius: 25px;
background-color: rgba(9,121,66,0.22);
color: var(--secondary-color);
&:hover { 
    background-color: var(--tertiary-color);
    font-size: 30px;
color: var(--secondary-color);

    
    }
`;
const LikeDiv = styled.div`
border: 1px solid var(--tertiary-color);
`;
const InnerWapper = styled.div`
padding: 10px 0 10px 0px;
`;
const LikeSpan = styled.span`
font-size:30px;
`;

export default CoinDetails

