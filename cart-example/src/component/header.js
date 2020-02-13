import React,{Component} from 'react';
import {BrowserRouter as Router ,Route, Link} from 'react-router-dom';
import Products from '../component/products';
import CartPage from '../component/cartPage';

class Header extends Component{
    render(){
        return(
            <React.Fragment>
               
                    <div className="header">                   
                        <div className="d-flex ">
                            <div className="p-2 mr-auto bg-info">
                                {/* Products */}
                                <Link to="/" className="app-pro"> Products</Link>
                            </div>
                            <div className="cart p-2">
                                {/* My Cart */}
                                <Link to="/cart" className="app-pro"> My Cart</Link>
                            </div>
                        </div>
                    </div>
             
                

                <style>
                    {
                        `.cart p{
                            border: 1px solid black;
                        }
                        .cart{
                            display: flex;
                            justify-content:center;
                            align-items:center;
                        }
                        .app-pro{
                            color:white;
                            text-decoration:none;
                        }
                        `
                    }
                </style>

            </React.Fragment>
        )
    }
};

export default Header;
