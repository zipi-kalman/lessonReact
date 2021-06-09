import { useState } from 'react';
import {Link,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import actions from '../redux/action'
import { FatchFunc2 } from './fatch';




export default withRouter( function Login(props) {
    const{history,userName, setUserName}=props;
  
    

    function next(){
        if (!userName) {
        }
        else{
history.push('/product')}
    }
    
    
    return(
      <>
      <h1>hello branch</h1>
      <h2>hello test2</h2>
     
      <h2>hello test1</h2>
        <div className="row mt-5">
            <div className="col-2"></div>
            <div className="col-8">
        <form>
  <div className="mb-3 " >
    <label htmlFor="exampleInputEmail1" className="form-label">name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={
        (e)=>setUserName(e.target.value) }
        />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    {userName && <h4>hello  {userName}</h4>}
  </div>
  <button type="submit" className="btn btn-primary" onClick={next} >Next</button>

</form>
</div>
<div className="col-2"></div>
</div></>
    )
})