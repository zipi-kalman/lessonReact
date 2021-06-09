import{useParams} from 'react-router-dom'
import {connect} from 'react-redux'

function mapStateToProps(state){
    return {
        products:state.products.products
    }
}

export default connect(mapStateToProps) (function P(props) {
    const{productNameParams}=useParams()

    const{products}=props;
    console.log(productNameParams);
    
    const changProduct=products.filter((x)=>x.name===productNameParams)
        console.log(changProduct[0].name);
    
    return(
        <>
       <div className=" col-12 mt-5 " style={{width:"18rem"}} >
                    <img src={changProduct[0].name}/>
                    <div >
                              <h4 className="card-title"> {changProduct[0].name}</h4>
                                <h5 className="card-title">  {changProduct[0].id}</h5>
                                <h5 className="card-title">  {changProduct[0].price}</h5>
                     </div></div>
        </>
    )
    
    })