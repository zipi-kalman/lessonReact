import React,{useState} from 'react';
import {connect} from 'react-redux'
import actions from '../redux/action'
import { Redirect}from 'react-router-dom'

function mapStateToProps(state){
    return {
        products:state.products.products
    }
}
const mapDispatchToProps=(dispatch)=>({
    removeProduct: (product) => dispatch(actions.removeProduct(product)),
      plus: (plusProduct) => dispatch(actions.plus(plusProduct)), 
      minus: (minusProduct) => dispatch(actions.minus(minusProduct)), 

})
export default connect(mapStateToProps, mapDispatchToProps)(function ProductDisplay(props){
    const{products,removeProduct,plus,minus,userName} = props
    console.log(userName);
    if (!userName) {
        
        return <Redirect to={{pathname:"/lesson6",state:{flash:"pleass enter user name"}}}/>
    }
return (
    <>
    {products.map((item)=>(
         <div key={item}  >
         <div className="row border-top" >
         <div className="col-2"><h5 className="card-title mt-5" style={{backgroundColor:"red"}}>$ {item.price} </h5></div> 
         <div className="col-5"><h5 className="card-title mt-5">{item.name}</h5></div> 
         <div className="col-5"><h5 className="card-title mt-5">{item.companyName}</h5></div> 
         </div>
         <div className="row">
         <div className="col-2 border-bottom">
             <button className="btn-secondary"onClick={(e)=>removeProduct(item)}>remove</button></div> 
         <div className="col-5"><button className="btn-secondary" onClick={(e)=>plus(item)}>+</button>
                       <button className="btn-secondary">{item.amount}</button>
                       <button className="btn-secondary" onClick={(e)=>minus(item)}>-</button></div> 
         <div className="col-5"></div> 
         </div> 
          </div> 
             
    ))}
    </>
)

})