import {Switch, Route} from 'react-router-dom';
import React,{Component} from 'react';
import Products from '../component/products';
import CartPage from '../component/cartPage';
import Notfound from '../component/notFound';

const routingIs = [
    {
        path:"/",
        component:Products,
        exact: true
    },
    {
        path:"/cart",
        component:CartPage,
        exact: true
    },
    {
        path:"*/",
        component:Notfound ,
        exact: true
    }
]

class Routing extends Component{
    constructor(props){
        super(props);
        this.state={
            isLogin:false
        }
    }

    componentDidMount(){
        this.setState({
            isLogin:true
        })
    }

    render(){
        return(
            <React.Fragment>
                <Switch>
                    {routingIs && this.state.isLogin && this.state.isLogin ?
                        routingIs.map((route, index) => (
                        <Route
                            key={index}
                            exact
                            path={route.path}
                            component={route.component}
                        />
                        )):<h1>You are not login</h1>}
                </Switch>
            </React.Fragment>
        )
    }
}
export default Routing;