import React, { Component } from 'react';
import logo from './friedhead.svg';
import './App.css';
import Drink from './Drink/Drink';
import Bill from './Bill/Bill';

class App extends Component {


  state = {
    drinks: [
      { name: 'Mojito', price: 3 },
      { name: 'Beer', price: 2 },
      { name: 'Red Wine', price: 1 },
      { name: 'White Wine', price: 1 },
      { name: 'Gin & Tonic', price: 8 },
      { name: 'Tequila Shot', price: 1 },
  ],

  bill: 0,
}


addDrinkHandler = (drinkIndex) => {
  let currentBill = this.state.bill;
  let addToBill = this.state.drinks[drinkIndex].price;
  let newBill = currentBill + addToBill;
  this.setState({bill: newBill})
  console.log(this.state.bill)
  };


payBillHandler = () => {
  this.setState({bill: 0})
  };


render() {


 let drinks = (
       <div>
        {this.state.drinks.map((drink, index) => {
          return <Drink
          name={drink.name}
          price={drink.price}
          click={() => this.addDrinkHandler(index)}/>
        })} 
      </div> 
    );


    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>30 days of React</h1>
          <h2>Day Eight / React Bar</h2>
        </header>


        <ul>
          {drinks}
        </ul>

        <div>
          <Bill
            total={this.state.bill}
            click={() => this.payBillHandler()}/>
        </div>
      </div>
    );
  }
}

export default App;

