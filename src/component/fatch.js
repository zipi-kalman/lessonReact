import React, { useEffect, useState } from 'react';

// export class Fatch extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           drink: [{}]
//         };
//       }

//     async componentDidMount() {
//         const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
//        const dataDrink=await response.json()
//        const data=(dataDrink.drinks);
//        this.setState({ drink: data })
    //    data.map(item=>(console.log (item)))
        // let requestObj={
        // }
        // requestObj=JSON.parse(response)
        // let d=requestObj.strDrink;
        
        // // const obj =await drink. JSON.parse();
        // // console.log(obj.strDrink);

           
            // console.log(data)
       
        // this.setState({ drink: drink })
    //   }
    // render() {
    //     const { drink } = this.state;
    //     return(
    //         <>
    //       <ul> {drink.map((item)=>
    //       (<li>{item}</li>
    //       ))}
          
//     //       </ul>
//             </>
//         )
//     }
// }
// .map((item)=>(<li>{item}</li>))
// 0: {strDrink: "1-900-FUK-MEUP", strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/uxywyw1468877224.jpg", idDrink: "15395"}
// 0: {created_at: "2020-05-27T16:05:32.000Z", title: "Guerrilla Public Service Redux (2017)", url: "https://99percentinvisible.org/episode/guerrilla-public-service/", author: "DerWOK", points: 421, …}

export function FatchFunc(){
    const[d,setD]=useState([])
    let data;
    useEffect(async() => {
        const response =  await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
     data= await response.json()
        data=data.drinks
        console.log(data)
setD(data)
    }, [])
   
    console.log(d)

    return(
        <>
        <h1 className="text-center mt-5">המשקאות ההאהובים</h1>
    <div className="row  " >
            {d.map((item)=>(
                <div className="card  col-3 mt-5 " style={{width:"18rem"}} key={item.id}>
                <img src={item.strDrinkThumb}/>
                <div className="card-body">
                          <h4 className="card-title"> {item.strDrink}</h4>

                 </div></div>
        //    <div key={item.id}>{item.strDrink}
        //      <img src={item.strDrinkThumb} ></img>
        //    </div>
       )
         )}
       </div>
       </>
     )
 }
export  function FatchFunc2(){
    const[d,setD]=useState([])
    let data;
    useEffect(async() => {
        const url="https://forbes400.herokuapp.com/api/forbes400/?limit=10"
        const response =  await fetch(url)
     data= await response.json()
        console.log(data)
setD(data)
    }, [])
   
    console.log(d)

    return(
        <>
        <h1 className="text-center mt-5">עשרת עשירי העולם</h1>
    <div className="row  " >
            {d.map((item)=>(
                <>
            <div className="card  col-3 mt-5 " style={{width:"18rem"}} key={item.id}>
                <img src={item.person.squareImage}/>
                <div className="card-body">
                          <h4 className="card-title"> {item.uri}</h4>
                            <h5 className="card-title">  {item.privateAssetsWorth}</h5>
                 </div></div>
            </>
        )
        )}
       </div>
        </>
    )
}
 
