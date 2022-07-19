import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// function Hello(){
//   return <h1>Hello there!</h1>;
// }
// class Hello extends React.Component {
//   render() {
//     return <h1>Hello world!</h1>;
//   }
// } 
// const el =  <Hello />;

function Item(props) {
  return <div className="item">
  <b>Name:</b> {props.name} <br />
  <b>Price:</b> ${props.price}
  </div>;
}

function App() {
  return <div>
    <Item name="Cheese" price="4.99" />
    <Item name="Bread" price="1.5" />
    <Item name="Ice cream" price="24" />
  </div>;
}

const el =<App />

ReactDOM.render(
  el,
  document.getElementById('root')
);
