import React, { useState } from 'react';
import $ from 'jquery'

export default function MainList(){
    const[list,setList]=useState([1,2,3,4,5,6])
    const[selectedItem,setSelectedItem]=useState()
   

    return(
        <>
<List list={list} setList={setList} selectedItem={selectedItem}setSelectedItem={setSelectedItem} ></List>
<List list={list} setList={setList} selectedItem={selectedItem}setSelectedItem={setSelectedItem} ></List>

        </>
    )
}
function List(props) {
    const{list,setList,selectedItem,setSelectedItem}=props;
    const[clor,setClor]=useState(false)

function check(item,index){
setClor(true);
let chaced=$("input")[item+5]
chaced.checked =true
// let chaced1=$("input")[selectedItem-1]
// setSelectedItem(selectedItem)
// let chaced=$("input")[index]
// console.log(index);
// chaced.checked =true


}
function check1(e){
    const itemCheced=e.target.checked
    console.log(itemCheced);
    if (itemCheced) {
        setClor(true)
    } else {
        
    }
}
    return(
        <>
        <ul>{list.map((item,index) =><li key={item} >
                        <label >
                            {item}
                            <input
                                type="checkbox"
                                onChange={(e)=>check(item,index),check1}

                            
                
                                />
                        </label>
                    </li>)}
        </ul>
        </>
    )

}

// function List(props) {
//     const{list,setList,selectedItem,setSelectedItem}=props;
//     const[clor,setClor]=useState(false)

// function onClick(selectedItem,index){
// setClor(true);
// // let chaced=$("input")[selectedItem+5]
// // let chaced1=$("input")[selectedItem-1]
// // $(chaced1).css("background-color", "green");
// // setSelectedItem(selectedItem)
// // chaced.checked =true
// let chaced=$("input")[index]
// console.log(index);
// chaced.checked =true

// }
//     return(
//         <>
//         <ul>{list.map((item,index) =><li key={item} >
//                         <label >
//                             {item}
//                             <input
//                                 type="checkbox"
                                
//                                 onChange={(e)=>onClick(item,index)}
                     
//                                 />
//                         </label>
//                     </li>)}
//         </ul>
//         </>
//     )

// }
// function check(e) {

//     const checke = e.target.checked;
//     if (checke)
//       setFlag(true)
//     else
//       setFlag(false)
   
//   }‏
// ואת כל הinput את עוטפת בדיב
//  <div style={{ background: (flag && "red") }}>

// {items.map((item)=>{
//     return (
//         <>
//   <Inpute  setId={setId} item={item} checked={checked} setChecked={setChecked}></Inpute>         
//       </>  
//     )
// })
