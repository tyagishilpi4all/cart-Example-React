import React,{Component} from 'react';

class CartPage extends Component{
    constructor(props){
        super(props);
        this.state={
            allData:[],
            isTotal: 1
        }
    }

    componentDidMount(){
        if(window.localStorage){
            let myData = JSON.parse(localStorage.getItem("storageData"))
            console.log("mydata is:::",myData)
            if(myData){
                this.setState({
                    allData:myData
                },()=>{
                    console.log("storeData",this.state.allData)
                })
            }
        }
    }

    quantity=(event)=>{
        console.log("hlo event", event.target.value);
        this.setState({
            isTotal:event.target.value
        },()=>{
            console.log("hlo", this.state.isTotal)
        })
    }

    delete=(obj)=>{
        console.log("delete data::",obj)
    }

    render(){
        const {allData,isTotal} = this.state;
        return(
            <React.Fragment>
                <h3 className="cart">Your Cart</h3>
                
                <table className="table">
                  <thead>
                      <tr>
                          <th>Products</th>
                          <th>Name of Products</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Remove</th>
                          <th>Total</th>
                      </tr>
                  </thead>
                  
                  <tbody>
                     {
                        allData && allData.map((obj,index)=>(
                        <tr key={index}>
                            <td><img src={obj.img} height="30px" /></td>
                            <td>{obj.phoneName}</td>
                            <td>{obj.price}</td>
                            <td>
                                <select onChange={this.quantity} className="form-control col-md-10">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </td>
                            <td onClick={()=>this.delete(obj)}>Delete</td>
                            <td>{isTotal * obj.price}</td>
                        </tr>
                        ))
                     }
                  </tbody>

                </table>

                <style jsx="true">
                   {
                       `.cart{
                           text-align:center;
                       }

                       `
                   }
                </style>
            </React.Fragment>
        )
    }
};

export default CartPage;