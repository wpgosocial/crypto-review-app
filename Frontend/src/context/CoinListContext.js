import React, { useState, useEffect, createContext } from 'react';
import axios from "axios";

export const CoinListContext = createContext(null);

const CoinListProvider = ({ children }) => {
  const [onCoinList1, setOnCoinList1] = useState([]);
  const [onCoinList2, setOnCoinList2] = useState([]);
  const [coinTrending, setCoinTrending] = useState([]);
  const [coinExchange, setCoinExchange] = useState([]);
  const [TVL,setTVL] = useState([]);

  const CoinFunction1 = () => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=240&page=1&sparkline=false")
      .then(res => {
        setOnCoinList1(res.data);
      })
      .catch(err => {console.log(err)});
  }
  useEffect(() => {
    CoinFunction1()
  }, []);


  const CoinFunction2 = () => {
    axios.get("https://api.nomics.com/v1/currencies/ticker?key=8b8357df6c07ebe40a342a860805004f5982cc85")
      .then(res => {
        setOnCoinList2(res.data);
      })
      .catch(err => {console.log(err)});
  }
  useEffect(() => {
    CoinFunction2()
  }, []);


  const TrendingFunction = () => {
    axios.get("https://api.coingecko.com/api/v3/search/trending")
      .then(res => {
        setCoinTrending(res.data.coins);
      })
      
}
useEffect(() => {
  TrendingFunction()
}, []);

const ExchangeFunction = () => {
  axios.get("https://api.coingecko.com/api/v3/exchanges?per_page=25")
    .then(res => {
      setCoinExchange(res.data);

    })
}
useEffect(() => {
  ExchangeFunction()
}, []);


const defiTVL = () => {
  axios.get("https://api.llama.fi/protocols")
    .then(res => {
      setTVL(res.data);

    })
}
useEffect(() => {
  defiTVL()
}, []);


return (
  <>
    <CoinListContext.Provider
      value={{
        onCoinList1, setOnCoinList1,
        onCoinList2,
        coinTrending,
        coinExchange,
        TVL,

      }}
    >

      {children}
    </CoinListContext.Provider>
  </>
)
}

export default CoinListProvider;