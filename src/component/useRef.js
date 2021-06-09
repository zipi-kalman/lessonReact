import React,{useRef} from 'react'

export default function Div1(){
const divRef1=useRef()
const divRef2=useRef()
const divRef3=useRef()

function click(){
divRef1.current.style.backgroundColor="red"
divRef2.current.style.backgroundColor="red"
divRef3.current.style.backgroundColor="red"

}
return(


<div>
<div onClick={click}>1</div>
<div ref={divRef1}>2</div>
<div ref={divRef2}>3</div>
<div ref={divRef3}>4</div>

</div>

)

}