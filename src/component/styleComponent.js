import React, { useState } from 'react';
import styled from 'styled-components';



export default function Card() {
    const { bgColor,setBgColor } = useState();
    


    return(
        <>
        <div className="d-flex">
                <div >
                    <h2>עריכת הכרטיס</h2>
                    <label className="">בחר צבע<br></br><input type="color"  ></input></label>
                </div>
        <Container> 
<div>
    <h1>כרטיס ברכה</h1>
    <h4>תוכן הכרטיס</h4>
    <pre></pre>
</div>
        </Container>
        </div>
        </>
    )
}
const Container = styled.div`
  width: calc(100vw - 100px);
  height: 100px;
  background-color: ${ (props) => props.bgColor || 'orange'};
  color: ${ (props) => props.theme.textColor || 'black'}
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.3s;
border:2px solid black;
  &:hover {
    opacity: 0.7;
  }
`

            
        
            