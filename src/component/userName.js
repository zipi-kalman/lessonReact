import React, { useState ,useRef} from 'react'
import {connect} from 'react-redux'
import {setUserName,addUser} from '../redux/action'
import actions from '../redux/action'


function mapStateToProps(state) {
return {
    userName:state.users.users[0].name,
    users:state.users.users
}
}
function mapDispatchToProps(dispatch){
    return {
        setUserName:(name)=>dispatch(actions.setUserName(name)),
        addUser:(name,id)=>dispatch(actions.addUser({ name: name,id:id }))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(function User(props) {
const{userName,setUserName,addUser,users} = props
const nameRef=useRef('')
const idRef=useRef('')


    return(
        <>
       
        <input type="text" onChange={(e)=>setUserName(e.target.value)} placeholder={"set the second user name"}></input><br></br>
        <h1>The nwe name of second user is: {userName}</h1>
      <input type="text"  ref={nameRef} placeholder={"הקלד שם"}/>
      <input type="text"  ref={idRef} placeholder={"הקלד id"}/>
        <button onClick={(e)=>addUser(nameRef.current.value,idRef.current.value)}>add user</button>
      <ul>{users.map((item)=>
      <li key={item.id}>name is{item.name} id is:{item.id}</li>)}
      </ul>
    
        </>
    )
})