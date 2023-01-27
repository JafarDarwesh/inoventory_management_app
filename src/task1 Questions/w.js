import React, { useState } from 'react'
import Csv from './Qcsv';

export default function W() {
  const [n,N]=useState(0)
  const O=[true,false]
  function A(a) {
   if (a==1) {
    return <> <Csv/>  {alert("WEB")}</>
   } else {
    if (a==2) {
      return <> <Csv/>  {alert("AI")}</>
    } else {
      return <>
       <button hidden={!O[n]} onClick={()=>N(1)}>Web</button>
       <button hidden={!O[n]} onClick={()=>N(2)}>Ai</button>
      </>
    }
   }
  }
  return (
    <>
    {A(n)}
    </>
  );
  
}
