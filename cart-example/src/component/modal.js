import React,{Component} from 'react';
import {withRouter} from 'react-router-dom'

class Modal extends Component{

    cartData=(data)=>{
        console.log("shilpi data::::", data);
        this.props.cartData(data)
        this.props.history.push("/cart");
    }

    render(){
        // console.log("++++",this.props.data);
        const{data}= this.props
        return(
            <React.Fragment>
                <div id="exampleModal" className="modaldemo" role="dialog" >
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{data.phoneName}</h5>
                        </div>
                        <div className="modal-body">
                            <div className="modal-img d-flex justify-content-center">
                                 <img src={data.img}/>
                            </div>
                            <div className="phone-price d-flex justify-content-center mt-3">
                                 <h5>Price: {data.price}</h5>
                            </div>
                            <div className="add-cart d-flex justify-content-center mt-3">
                                <button className="btn btn-info mr-3">Continue</button>
                                <button className="btn btn-success" onClick={()=>this.cartData(data)}>Add to cart</button>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.props.close}>Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
};

export default withRouter(Modal);