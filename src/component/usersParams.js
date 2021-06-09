import {useParams} from 'react-router-dom'

export default function UsersParams(){
const{id}=useParams()
    const users={
        1:"Ben",
        2:"Dan",
        3:"Chen"
    }
    return(
        <h1 className="mt-5"> hello  :{users[id]} !</h1>
    )}