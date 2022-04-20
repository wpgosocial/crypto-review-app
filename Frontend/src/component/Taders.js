import React, { useContext } from 'react';
import { CoinListContext } from "../context/CoinListContext";

const Taders = () => {
  const { TVL } = useContext(CoinListContext);



  console.log("T********************************", )

  return (
    <>
      <div>Taders</div>
      

    </>
  )
}

export default Taders