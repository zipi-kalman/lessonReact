import React,{useState} from 'react';
import ProductWithUseParams from './component/useParams'
import Father from './component/input5'
import './App.css';
import CounterFather from './component/Counter'
import P from './component/useParams2'
// import MainList from './component/List'
import MyForm from './component/form/MyForm'
import Screen1 from './component/form/Screen1'
import Screen2 from './component/form/Screen2'
import Screen3 from './component/form/Screen3'
import {CarouselImage,Img1, Img2, Img3} from './component/carousel'
import {FatchFunc,FatchFunc2} from './component/fatch'
import {Provider} from 'react-redux'
import store from './redux/store'
import ProductDisplay from './component/ProductDisplay'
import Div1 from './component/useRef'
// import AddProduct from './component/AddProduct'
import Card from './component/styleComponent'
import{hello} from './component/demo'
import User from './component/userName'
import UsersParams from './component/usersParams'
import Nav from './component/nav'
import Login from './component/login'
import Flash from './component/flash'   
import {
  BrowserRouter as
    Router,
  Switch,
  Route
} from "react-router-dom"

function App() {
  hello()
  const[userName,setUserName]=useState()
  return (
    
    <div className="App">
     
       <Provider store={store}>
     <Router>
     <Flash>
       <Nav/>
       <Switch>
          <Route path="/lesson1">
     <CounterFather/> 
     <Father></Father> 
       <User/>  
         </Route>
         <Route path="/lesson2">
          <MyForm >
       <Screen1></Screen1>
       <Screen2></Screen2>
       <Screen3></Screen3>
     </MyForm> 
        </Route>
          <Route path="/lesson3"> 
           <CarouselImage>
<Img1></Img1>
<Img2></Img2>
<Img3></Img3>
     </CarouselImage> 
         </Route>
         <Route path="/lesson4">
        <ProductDisplay userName={userName}/>
       
        {/* {/* <AddProduct/>  */}
        
         </Route>
         <Route path="/lesson5">
         <FatchFunc2/>
      <FatchFunc></FatchFunc>
         </Route> 
         <Route path="/lesson6">
           <Login userName={userName} setUserName={setUserName}> </Login>
         </Route>
         <Route path="/product/:productNameParams">
     <P/>
         </Route>
         <Route path="/product">
           <ProductWithUseParams></ProductWithUseParams>
         </Route>
         <Route path="/users/:id">
     <UsersParams/>
         </Route>
         <Route path="/lesson7">
           <Card></Card>
     <Div1/>
         </Route>
         
     </Switch>
     </Flash>
     </Router>
     </Provider>
     
    </div>
    
  );
}

export default App;
