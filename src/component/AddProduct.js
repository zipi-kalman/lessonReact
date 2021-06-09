import React, { useState } from 'react'
import {connect} from 'react-redux'
import actions from '../redux/action'


function mapStateToProps(state) {
    return {
        products:state.products.products
    }
}
const mapDispatchToProps =(dispatch)=>({
    addProduct:(product)=>dispatch(actions.addProduct(product))


})
export default connect(mapStateToProps,mapDispatchToProps)(function AddProduct(props){
    const {addProduct} = props
    const product={name:"",companyName:""}

function name1(value){
product.name=value;
}
function conpany1(value){
    product.companyName=value;
    
    }
    return(
        <>
        <label>שם המוצר
        <input type="text"  onChange={(e)=>name1(e.target.value)}></input>
        </label>
         <label>שם החברה
        <input type="text"  onChange={(e)=>conpany1(e.target.value)}></input>
        </label>
        <button className="btn btn-danger" onClick={()=>addProduct(product)}>add product</button>
        </>
    )
})