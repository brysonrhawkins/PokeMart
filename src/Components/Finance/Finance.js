import React, { Component } from 'react';
import Usercart from '../Storefront/Usercart';

class Finance extends Component{
    constructor(props){
        super(props)

        this.state = {
            userbalance: 1
        }
//{bindings}
        this.addMoney = this.addMoney.bind(this)
        this.resetMoney = this.resetMoney.bind(this)

    }
//{financial work}
    addMoney(){
        this.setState({
            userbalance: this.state.userbalance * 10
        })
    }

    resetMoney(){
        this.setState({
            userbalance: 1
        })
    }
  
    render(){
        return(
            <div>
                <h1>{this.state.userbalance}</h1>
                <button onClick={this.resetMoney}>Reset Account</button>
                <button onClick={this.addMoney}>add addMoney</button>
                <Usercart userbalance={this.state.userbalance} addMoney={this.addMoney} resetMoney={this.resetMoney}/>
            </div>
        )
    }
}
export default Finance;