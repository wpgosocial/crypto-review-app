import styled from 'styled-components';
import React, { useContext } from 'react';
import { CoinListContext } from "../context/CoinListContext";
import { BsCurrencyBitcoin } from "react-icons/bs";
// import {Link} from "react-router-dom"



const Exchanges = () => {
  const { coinExchange } = useContext(CoinListContext);
  console.log("coinExchange SSSSSSSSSS", coinExchange)
  return (
    <>
      <CoinHeader>
        <DivTrendNum>Assset </DivTrendNum> <Div>Exchange</Div><Div>Trade Volume BTC</Div>
      </CoinHeader>
      {/* <HrHead /> */}
      {coinExchange.map((theCoinsObject) => {
        return (
          <div key={theCoinsObject.id} >
            <CoinLayout>
              <DivTrendNum><a href={theCoinsObject.url} target="_blank"><CoinImg src={theCoinsObject.image} /> </a>{theCoinsObject.trust_score_rank}</DivTrendNum><Div>{theCoinsObject.name}</Div> <Div><BsCurrencyBitcoin />{theCoinsObject.trade_volume_24h_btc_normalized.toFixed(9)} </Div>
            </CoinLayout>
            <Hr />
          </div>)
      })}

    </>
  )
}

// country: "Cayman Islands"
// description: ""
// has_trading_incentive: false
// id: "binance"
// image: "https://assets.coingecko.com/markets/images/52/small/binance.jpg?1519353250"
// name: "Binance"
// trade_volume_24h_btc: 246914.26496694246
// trade_volume_24h_btc_normalized: 246914.26496694246
// trust_score: 10
// trust_score_rank: 1
// url: "https://www.binance.com/"
// year_established: 2017


const CoinHeader = styled.div`

  display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	align-content: flex-start;

  padding: 30px 65px 30px 105px;
  `;
const CoinLayout = styled.div`
  display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	align-content: flex-start;
  
  padding: 0 65px 0 65px;

  &:hover{
background-color: #165731 ;
}
  `;

const CoinImg = styled.img`
  width: 50px; 
  height: 50px;
  margin: 0 25px 0 0;
`;

// const CoinImg = styled.img`
// width: 50px; 
// height: 50px;
// margin: 0 25px 0 0;
// `;
const HrHead = styled.hr`
width: 100%;
/* height: 1px; */
border: 0.5px solid #165731;
`;
const Hr = styled.hr`
width: 95%;
/* height: 1px; */
border: 0.5px solid #165731;
`;

const DivTrendNum = styled.div`
display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
	align-content: stretch;
`;
const DivName = styled.span`
  display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
	align-content: center;
  /* align-items: left; */
`;

const Div = styled.div`
  display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flex-end;
	align-items: center;
	align-content: center;

  width: 20%;
`;

export default Exchanges