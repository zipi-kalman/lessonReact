import produce from 'immer';
import execHandler from './ReducerUtils';

const initialState ={
    users:[
        {name:"chaia",id:"201198675"},
        {name:"dov",id:"2066788675"},
        {name:"RUN",id:"399898675"},
        {name:"ben",id:"201197686"},
        {name:"shaul",id:"342198675"},
            
    ]
}
const users = {
    setUserName(state, action) {
        state.users[0].name=action.payLoad
    },
    addUser(state, action){
        state.users.push(action.payLoad)
    },
    
}

export default produce((state, action) => {
    execHandler(state, action, users)
}, initialState)

