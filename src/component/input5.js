import React, { useState } from 'react';


export default function Father() {

    const[input,setInput]=useState()
let number=1;

    return(
        <>
         <h2 className="mt-5">father</h2>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}></input>
        <h2>hello   {input}</h2>
        <Son input={input} setInput={setInput} num={number}></Son>
        {/* <Son input={input} setInput={setInput} num={number+1}></Son>
        <Son input={input} setInput={setInput} num={number+2}></Son>
        <Son input={input} setInput={setInput} num={number+3}></Son>
        <Son input={input} setInput={setInput} numb={number+4}></Son> */}
        </>
    )
    
}

 function Son(props){
     const {input,setInput,num} = props;
     return(
<>
<h2>son {num}</h2>
<input  type="text" value={input} onChange={(e)=>setInput(e.target.value)}></input>
<input  type="text" value={input} onChange={(e)=>setInput(e.target.value)}></input>
<input  type="text" value={input} onChange={(e)=>setInput(e.target.value)}></input>
<input  type="text" value={input} onChange={(e)=>setInput(e.target.value)}></input>
<input  type="text" value={input} onChange={(e)=>setInput(e.target.value)}></input>

<h3>{input}</h3>
</>
     )
 }
 