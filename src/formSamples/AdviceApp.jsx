import React, { useEffect } from 'react'
import "./Advice.css";
import { useState } from 'react';

export const AdviceApp = () => {

  const [advice,setAdvice]=useState("Please Click Button to Get Advice");
  const [count,setCount]=useState(0);

  async function getAdvice(){
    const res=await fetch("https://api.adviceslip.com/advice");
    //console.log(res)
    const data=await res.json();
    //console.log(data)
    setAdvice(data.slip.advice);
    setCount((c)=>c+1);
  }

  useEffect(function(){
   // getAdvice();
  },[])

  return (
    <div>
        <h3>{advice}</h3>
        <button  onClick={getAdvice}>Get Advise</button>
        {/* <p>You have read <b>{count}</b> pieces of advice</p> */}
        <Counter count={count}/>
    </div>
  )
}


function Counter(props){
  return(
    <p>
    you have read <b>{props.count}</b> pieces of advice
  </p>
  )
}
