import actions from '../action';





export const plusOrminus=({ dispatch,getState})=>next=>action=>{
if (action.type==="MINUS") {
    alert(action.type)
    
}

    return next(action)
}
export const plusUser=({ dispatch,getState})=>next=>action=>{
    if (action.type==="PLUS") {
       let user=getState().users.users[2].name
       alert(`שים לב הגדלת את כמות המוצר   ${user}!`)
        
    }
    
        return next(action)
    }
    export const FatchToNode=({ dispatch,getState})=>next=>action=>{
        if (action.type==="PLUS") {
           let user=getState().users.users[2].name
           alert(`שים לב הגדלת את כמות המוצר   ${user}!`)
            
        }
        
            return next(action)
        }