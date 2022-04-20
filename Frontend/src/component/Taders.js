import React, { useContext } from 'react';
import { CoinListContext } from "../context/CoinListContext";

const Taders = () => {
  const { TVL } = useContext(CoinListContext);



  // console.log("T********************************", )

  return (
    <>
      <div>Tading Data</div><br /><br />
      <h2>Coming Soon ... !</h2>

    </>
  )
}

export default Taders