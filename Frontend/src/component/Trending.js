import styled from 'styled-components';
import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { CoinListContext } from "../context/CoinListContext";

const Trending = () => {
  let navigate = useNavigate();
  const { coinTrending } = useContext(CoinListContext);
  console.log("coinTrending %%%%%%%%%%", coinTrending)

  return (
    <>
      <CoinHeader>
        <div>#Trend</div> <Div>Assset</Div>  <Div>#Rank</Div><Div>Price BTC</Div>
      </CoinHeader>
      {/* <HrHead /> */}
      {coinTrending.map((theCoinsObject) => {
        return (
          <div key={theCoinsObject.item.coin_id} >
            <CoinLayout>
              <DivTrendNum><CoinImg src={theCoinsObject.item.small}/>{theCoinsObject.item.score + 1}</DivTrendNum>   <Div> {theCoinsObject.item.name}{" - "}{theCoinsObject.item.symbol.toUpperCase()} </Div>  <Div> {theCoinsObject.item.market_cap_rank} </Div> <Div><BsCurrencyBitcoin />{theCoinsObject.item.price_btc.toFixed(9)} </Div>
            </CoinLayout>
            <Hr />
          </div>)
      })}

    </>
  )
}

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


export default Trending