import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// function Hello(){
//   return <h1>Hello there!</h1>;
// }
class Hello extends React.Component {
  render() {
    return <h1>Hello world!</h1>;
  }
} 
const el =  <Hello />;

ReactDOM.render(
  el,
  document.getElementById('root')
);
