import React, { Component } from 'react';



class Header extends Component {
  constructor(){
    super()

    this.state = {
      accountName: '',
      totalitems: 0,

    }
    //{bindings}
  }
  //{functions}

  render(){
    return(
      <div>
          <h1 className='Title-text'><img  className='pokemon-logo'src="https://www.serebii.net/platinum/items/premium-ball.gif" alt="pokemon logo"></img>Poké-Mart </h1>
      <div class="navbar">
      <button className="homepgButtons">Welcome Back, {accountName}</button>
      <button className="homepgButtons">Cart ({totalitems})</button>
      <button className="homepgButtons">Recommended</button>
      <button className="homepgButtons">Recently Viewed</button>
      <div class="dropdown">
        <button class="dropbtn">Manage Account
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <button>Account Details</button>
          <button>Order History</button>
          <button>Payment Method</button>
        </div>
      </div>
    </div>
    </div>
  )
  }
  
}
var accountName = "Bryson Hawkins";
var totalitems = 0;


export default Header;
