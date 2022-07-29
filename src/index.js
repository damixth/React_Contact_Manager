import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function AddPersonForm(props) {
  const [person, setPerson] = useState("");

  function handleChange(e) {
    setPerson(e.target.value);
  }

  function handleSubmit(e) {
    if(person !== ''){
      props.handleSubmit(person);
      setPerson('');
    }
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>

      <input type="text"
      placeholder='Add new Contact'
      onChange={handleChange}
      value={person}/>

      <button type='submit'>Add</button>
    </form>

  )
}

function PeopleList(props) {
  const arr = props.data;
  const listItems = arr.map((val,index) =>
    <li key={index}>{val}</li>
  );
  return <ul>{listItems}</ul>
}

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  return(
    <div>
      <AddPersonForm handleSubmit={addPerson}/>
      <PeopleList data={contacts} />
    </div>
  )
}

const contacts = ["Damith Tharuka", "Tharani Amarasinghe", "Bruce Wayne"];
const el =(
  <div>
    <ContactManager data={contacts} />
  </div>
)

ReactDOM.render(
  el,
  document.getElementById('root')
);


// function Hello(){
//   return <h1>Hello there!</h1>;
// }
// class Hello extends React.Component {
//   render() {
//     return <h1>Hello world!</h1>;
//   }
// } 
// const el =  <Hello />;

// function Item(props) {
//   return <div className="item">
//   <b>Name:</b> {props.name} <br />
//   <b>Price:</b> ${props.price}
//   </div>;
// }

// function App() {
//   return <div>
//     <Item name="Cheese" price="4.99" />
//     <Item name="Bread" price="1.5" />
//     <Item name="Ice cream" price="24" />
//   </div>;
// }
// const el =<App/>
