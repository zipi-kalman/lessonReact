import produce from 'immer';
import execHandler from './ReducerUtils';

const initialState ={
    products:[
        {name:"Bread",id:"7551PRB",price:6.9,companyName:"angel",amount:1},
        {name:"Milk",id:"7651PRB",price:5.9,companyName:"angel",amount:1},
        {name:"YelloCheese",id:"7851PRB",price:28,companyName:"tnuva",amount:1},
        {name:"Cheese",id:"7555PRB",price:8,companyName:"tnuva",amount:1}
            
    ]
}

const products = {
    addToTheBasket(state, action) {
        if (state.products.find(x => x.id === action.payLoad.id)) {
            state.products.find(x => x.id === action.payLoad.id).amount++;
            state.sum+=(action.payLoad.price);
        }
        else{
            state.products.push(action.payLoad)
state.sum+=(action.payLoad.price)
        }
        
    },
    addProduct(state, action){
state.products.push(action.payLoad)
    },
    updateProduct(state, action) {
        state.products.find(x => x.id === action.payLoad.id).name = action.payLoad
    },
    plus(state, action) {
        state.products.find(x => x.id=== action.payLoad.id).amount++
        state.sum+=(action.payLoad.price)
    },
    minus(state, action) {
        let x=state.products.find(x => x.id=== action.payLoad.id)
        x.amount--
        if (x.amount<1) {x.amount=1
        

        }
        else{state.sum-=(action.payLoad.price)}
    },
    removeProduct(state, action) {
        state.products=state.products.filter((item) => item.id !== action.payLoad.id);
        state.sum-=(action.payLoad.amount*action.payLoad.price)
    },
    
   
}
export default produce((state, action) => { execHandler(state, action, products)
}, initialState)

 
 

 

   