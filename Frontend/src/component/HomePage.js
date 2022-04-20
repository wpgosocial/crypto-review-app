import axios from 'axios';
import styled from 'styled-components';
import bgImage from "../assets/bg1.gif";
import React, { useContext , useState} from 'react';
import { useNavigate } from "react-router-dom";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { CoinListContext } from "../context/CoinListContext";



const HomePage = () => {
  let navigate = useNavigate();
  const {onCoinList1, setOnCoinList1, onCoinList2 } = useContext(CoinListContext);
  const [coinSearch, setCoinSearch] = useState("");


  const handleCoinDetails = (ev, coinid) => {
    ev.preventDefault();
    navigate(`/${coinid}`);
  }
  console.log(onCoinList2)

  // const price_change_pct = top5theCoins["1d"].price_change_pct;
const coinSearchHandle = (e) => {
  setCoinSearch(e.target.value)
}


console.log("TTTTTTTTTTTTTTTTTTT",onCoinList1)


onCoinList2.sort(((a, b)=>{return parseInt(a["1d"].price_change_pct)-parseInt(b["1d"].price_change_pct)})).reverse();
// onCoinList1["1d"].price_change_pct.sort(((a, b)=>{return a-b}));


console.log("a^^^^^^^^^^^^^^^^^^^^^^",);

const selectCoin = onCoinList1.filter(onCoinList1 => onCoinList1.name.toUpperCase().includes(coinSearch.toUpperCase()))

  return (

    <>
      <Title>Know Your Coins<P>nomics [24Hr]</P></Title>
      {onCoinList2.filter((top5 , index) => index < 4).map((top5theCoins) => {
        return (
          <>

            <TitleDiv key={Math.floor(Math.random() * 200000000000)}>
              <Top5CoinLayout style={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: "no-repeat" }}>
                <Top5DivHalf>
                  <Top5CoinImg src={top5theCoins.logo_url} />
                </Top5DivHalf>

                <Top5DivHalf>
                  <Top5Text><Top5Div>  {top5theCoins.symbol.toUpperCase()}</Top5Div> <Top5Div>${top5theCoins.price.toLocaleString()}</Top5Div> <Top5Div>{top5theCoins["1d"].price_change_pct < 0 ? (<Span className="red"> {top5theCoins["1d"].price_change_pct}% </Span>) : (<Span className="green"> {top5theCoins["1d"].price_change_pct}% </Span>)}</Top5Div><Top5Div> {top5theCoins.circulating_supply}</Top5Div></Top5Text>

                </Top5DivHalf>
              </Top5CoinLayout>
            </TitleDiv>
          </>
        )
      })}
      <Top5Hr />



      {/* //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}

      <div>


        
        <div>
          <H2>Coin Search</H2>
          <form>
            <Input type="text" placeholder="Search here..." className="coinValue" onChange={coinSearchHandle}/>
          </form>
        </div>


        <P>coingeco [24Hr]</P>
      <CoinHeader>
        #Rank <Div><Span>{" "}Assset</Span></Div><Div><Span>Price USD</Span></Div><Div><Span>24Hr Change</Span></Div><Div><Span>24Hr Low USD</Span></Div><Div><Span>24Hr Volume</Span></Div>
      </CoinHeader>

        {selectCoin.map((theCoins)=>{
          return(
            <>
            <div key={Math.floor(Math.random() * 300000000000)}>
              <CoinLayout onClick={(ev) => handleCoinDetails(ev, theCoins.id)}>
                <CoinImg src={theCoins.image} />{theCoins.market_cap_rank} <Div> <DivName> {theCoins.name}{" - "}{theCoins.symbol.toUpperCase()}</DivName></Div> <Div>${theCoins.current_price} </Div> <Div>{theCoins.price_change_percentage_24h.toFixed(3) < 0 ? (<Span className="red"> {theCoins.price_change_percentage_24h.toFixed(3)}% </Span>) : (<Span className="green"> {theCoins.price_change_percentage_24h.toFixed(3)}% </Span>)} </Div> <Div> ${theCoins.low_24h}</Div>{"  "}<Div> ${theCoins.total_volume.toLocaleString()}</Div>
              </CoinLayout>
              <Hr />
            </div>
          </>
          )
        })}
      </div>
    </>
  )
}

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


const Title = styled.h3`
color: var(--primary-color);
text-align: left;
padding: 20px;
`;
const H2 = styled.h2`
padding: 20px;
`;

const Top5DivHalf = styled.span`
/* float:left; */
`;
const TitleDiv = styled.div`
padding: 0 20px;
`;

const Top5CoinLayout = styled.div`
float:left;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: flex-start;
align-items: center;
align-content: center;
border-radius: 20px;
padding: 0 20px 0 20px;
margin: 5px;
`;
const P = styled.p`
font-size:10px;
text-align:left;
padding-left: 45px;
`;
const Top5CoinImg = styled.img`
width: 120px; 
height: 120px;
margin: 20px 25px 20px 0;
`;
const Top5Hr = styled.hr`
width: 100%;
border: 0.5px solid #165731;
`;
const Top5Text = styled.div``;
const Top5Div = styled.div`
  width: 20%;
`;


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
width: 50%;

 &.reviewinput:focus {
     outline:none;
}
`;

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
const CoinHeader = styled.div`
color: var(--primary-color);
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
background-color: var(--tertiary-color) ;
cursor: pointer;
}
`;

const Span = styled.span`
color: var(--primary-color);
&.red{
color:#f24747;
}
&.green{ 
  color:#82e472;
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
const Hr = styled.hr`
width: 95%;
/* height: 1px; */
border: 0.5px solid #165731;
`;

const DivNameH = styled.div`
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


export default HomePage