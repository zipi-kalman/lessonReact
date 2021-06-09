import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'


function mapStateToProps(state){
    return {
        products:state.products.products
    }
}


export default withRouter (connect(mapStateToProps)(function ProductWithUseParams(props){
const{products,history} = props
function click(x){

history.push(`/product/${x}`)
}

return (<>

<ul>{products.map((item)=>(
<li key={item.id} onClick={
    ()=>click(item.name)
}
    
    >{item.name}</li>


))}

</ul>

</>



)


}))
