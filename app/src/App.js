import React, {useState} from 'react';

// class Item extends React.Component{
//   render() {
//     return (
//       <li>
//          {this.props.name}, ${this.props.price}
//       </li>
//     )
//   }
// }
const Item = ({id, name, price}) => (
  <li>
    {id}: {name}, ${price}
  </li>
)

const App = props => {

  // state = {
  //   items: [
  //       { id: 1, name: "Apple", price: 0.99 },
  //       { id: 2, name: "Orange", price: 0.99}
  //     ]
  //   }

  let[items, setItems] = useState([
    { id: 1, name: "Apple", price: 0.99},
    { id: 2, name: "Orange", price: 0.98}
  ]); 

  let nameRef = React.createRef();
  let priceRef = React.createRef();

  let add = () => {
     
      let name = nameRef.current.value;
      let price = priceRef.current.value;
    if (name !== "" && price !== "") {
    let id = items.length + 1;
      setItems([
        ...items,
        { id, name, price }
      ]);
  }
      nameRef.current.value = "";
      priceRef.current.value = "";
    }
  
  
    return (
      <div>
        <h1>Hello</h1>
        <ul>
          {this.state.items.map(i => {
            return <Item key= { i.id } id={i.id} name= { i.name } price= { i.price } />
          })}
        </ul>
        <input type='text' ref={nameRef} /><br />
        <input type='text' ref={priceRef} /><br />
        <button onClick={ add }>Add</button>
      </div>
    )
  }


export default App;