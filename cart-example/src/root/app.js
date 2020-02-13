import React,{Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from '../component/header';
import {BrowserRouter as Router ,Route, Link} from 'react-router-dom';
import Routing from '../Routing/index.routing';


class App extends Component{

    render(){
        return(
            <React.Fragment>
                <Router>
                <div className="app-parent bg-info">
                    <div className="container">
                        <Header /> 
                    </div>
                </div>
                <div className="app-content">
                    <div className="container">
                    {/* <Route exact path="/" component={Products}/>
                    <Route path="/cart" component={CartPage}/> */}
                    <Routing />
                    </div>
                </div>
                {/* <div className="app-content">
                    <div className="container">
                      <CartPage />
                    </div>
                </div> */}
                </Router>
            </React.Fragment>
        )
    }
};

export default App;