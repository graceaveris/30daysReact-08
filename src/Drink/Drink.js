import React from 'react';

const drink = ( props ) => {


  const outputstyle = {
  textAlign: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: 'white'
  };

  const divstyle = {
  border: '4px solid white',
  display: 'inline-block',
  margin: '10px',
  padding: '10px',
  alignItems: 'center',
  width: '25%',
  };

  const buttonstyle = {
  border: '2px solid white',
  borderRadius: '0px',
  margin: '10px',
  };

 return (

    <div style={divstyle}>
      
      <h3 style={outputstyle}>{props.name}</h3>
      <p>${props.price}</p>
      
      <button 
        style={buttonstyle}
        onClick={props.click}>Order Drink
      </button>
    
    </div>

  );
};

export default drink;