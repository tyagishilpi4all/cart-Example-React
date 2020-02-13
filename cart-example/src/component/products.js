import React,{Component} from 'react';
import  img from '../../src/images.png';
import Modal from '../component/modal';

const arr1=[
    {img:img, phoneName:'Samsung A10', price:22000},
    {img:img, phoneName:'Samsung A11' ,price:11000},
    {img:img, phoneName:'Samsung A12', price:28000},
    {img:img, phoneName:'Samsung A13',price:10000},
    {img:img, phoneName:'Samsung A14',price:30000},
    {img:img, phoneName:'Samsung A14', price:24000}
]

class Products extends Component{
  constructor(props){
        super(props);
        this.state={
            data:{},
            isModel:false,
            isCart:[]
        }
    }

    openModel=(obj)=>{
        // alert("fghjn")
      this.setState({
          data: obj,
          isModel: true
      },()=>{
        //   console.log(this.state.data , this.state.isModel)
      })
    }

    close=()=>{
        this.setState({
            isModel:false
        })
    }

    cartData=(obj)=>{
        console.log("cart on pro", obj);
        const {isCart} = this.state;
        let localCart = isCart;
        if(obj){
            localCart.push(obj)
        }
        this.setState({
            isCart:localCart
        },()=>{
            console.log("will state set", this.state.isCart)
        })
        if(window.localStorage){
            localStorage.setItem("storageData",JSON.stringify(this.state.isCart))
        }
    }

    render(){
        const {data , isModel} =this.state;
        return(
            <React.Fragment>
               <h3 className="product mt-3 mb-3">Our Products</h3>
               <div className="col-md-12">
                  <div className="anyModal" id="overlay">
                        <div className="formodel">
                                {
                                    isModel?<div>
                                        <Modal data={data} close={this.close} cartData={this.cartData}/>
                                    </div>:""
                                }
                        </div>
                  </div>
                    <div className="row">
                        {
                            arr1.map((obj,index)=>(
                            <div className="col-md-3 mb-5" key={index}>
                                <div className="per-mobile" onClick={()=>this.openModel(obj)}>
                                    <div className="mobile-img">
                                        <img src={obj.img} />
                                    </div>
                                    <div className="d-flex mt-3 mobile-data">
                                        <div className="mr-auto">
                                            <p className="mb-0 p-name">
                                                {obj.phoneName}
                                            </p>
                                        </div>
                                        <div className="">
                                            <p className="mb-0 p-name">
                                               {obj.price}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                    </div>
               </div>  

                <style>
                    {
                        `.per-mobile{
                            padding:20px;
                            border-radius:15px;
                            border: 1px solid silver;
                        }
                        .per-mobile:hover{
                            box-shadow: -1px 0px 10px silver;
                            border: 1px solid transparent;
                            transition:2s;
                        }
                        .mobile-img{
                            display: flex;
                            justify-content:center;
                            align-items:center;
                        }
                        .product{
                            text-align:center
                        }
                        .per-mobile img{
                            height:120px;
                        }
                        .p-name{
                            font-size:12px;
                        }
                        .mobile-data{
                            border-top:1px solid silver;
                            padding-top:10px;
                        }
                        .formodel{
                            position:absolute;
                            top:40%;
                            width:80%;
                            left:50%;
                            right:50%;
                            z-index:99;
                            transform: translate(-50% ,-50%);
                        }
                        // #overlay {
                        //     position: fixed;
                        //     width: 100%; /* Full width (cover the whole page) */
                        //     height: 100%; /* Full height (cover the whole page) */
                        //     top: 0;
                        //     left: 0;
                        //     right: 0;
                        //     bottom: 0;
                        //     background-color: rgba(0,0,0,0.5); /* Black background with opacity */
                        //     z-index: 2;
                        //     cursor: pointer;
                        //   }
                        
                        `
                    }
                </style>
            </React.Fragment>
        )
    }
};

export default Products;