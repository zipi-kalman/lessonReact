import React, { useEffect, useState } from 'react';


export default function CounterFather() {
const [max,setMax] = useState(0)




    return (
        <>
         <h1 className="text-center mt-5">my counter</h1>
        <h1>{max}</h1>
            <Counter1 setMax={setMax} max={max}></Counter1>
            <Counter1 setMax={setMax} max={max}></Counter1>          
            <Counter1 setMax={setMax} max={max}></Counter1>          
        </>
    )
}

function Counter1(props) {

    const {max,setMax} = props;
const[i,setI]= useState(false)
    const [counter, setCounter] = useState(0)
    function set(){
        setCounter(counter + 1) 
       
    }
    useEffect(()=>{
setMax(counter)
if (counter>max) {
    setMax(counter)
    setI(true)
}

    },[counter])
    function check(){
        setCounter(0)
        if (counter>max) {
            setMax(counter)
        }
    }
    return (
        <>
           <div style={{backgroundColor:(i && counter!==0) && "red"}}> <h2 >{counter}</h2>
            <button onClick={(e)=>check()}>reset</button>
            <button onClick={(e)=>set()}> click me</button></div>

        </>
    )
}
