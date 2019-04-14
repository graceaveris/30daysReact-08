import React from 'react';

const bill = ( props ) => {

  const outputstyle = {
  textAlign: 'center',
  fontSize: 'calc(10px + 4vmin)',
  color: 'black'
  };

 const divstyle = {
  backgroundColor: 'white',
  display: 'inline-block',
  margin: '10px',
  padding: '10px',
  minWidth: '40%',
  };

  const buttonstyle = {
  border: '2px solid black',
  borderRadius: '0px',
  fontSize: '20px',
  margin: '10px',
  };


 return (

    <div style={divstyle}>
      
      <h3 style={outputstyle}>Customer Bill:</h3>
      <h2 style={outputstyle}>${props.total}</h2>
      
      <button 
        style={buttonstyle}
        onClick={props.click}>Pay Bill
      </button>
    
    </div>

  );
};

export default bill;