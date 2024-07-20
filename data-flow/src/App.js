import React from 'react';

class Item extends React.Component{
  render() {
    return (
      <li>
        { this.props.id }  : {this.props.name}, ${this.props.price}
      </li>
    )
  }
}

class AddForm extends React.Component{
  nameRef = React.createRef();
  priceRef = React.createRef();

  add = () => {
    let name = this.nameRef.current.value;
    let price = this.priceRef.current.value;

    if (name !== "" && !isNaN(price) && price >=0) {
    this.props.add(name, price);
    }

    this.nameRef.current.value = "";
    this.priceRef.current.value = "";
      
  }

  render() {
    return (
      <div>
        <input type='text' ref={this.nameRef} /><br />
        <input type='text' ref={this.priceRef} /><br />
        <button onClick={this.add}>Add</button>
      </div>
    )
  }
}

class App extends React.Component{

  state = {
    items: [
        { id: 1, name: "Apple", price: 0.99 },
        { id: 2, name: "Orange", price: 0.99}
      ]
    }

  add = (name, price) => {
       
    let id = this.state.items.length + 1;
    this.setState({
        items: [
          ...this.state.items,
          { id, name, price }
        ]
    })

  }
   
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <ul>
          {this.state.items.map(i => {
            return <Item key={i.id} id={ i.id } name= { i.name } price= { i.price } />
          })}
          
        </ul>
        <AddForm add={ this.add } />
      </div>
      
    )
  }
}

export default App;