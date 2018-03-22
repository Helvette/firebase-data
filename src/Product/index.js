import React, { Component } from 'react';
import './index.css';

class Product extends Component {
  constructor(props) {
    super(props)
    this.name = props.nombre;
    this.stock = props.stock;
    this.img = props.img;
    this.id = props.id;
    this.removeProduct = this.removeProduct.bind(this);
  }

  removeProduct() {
    alert('removing ' + this.id);
    this.props.removeProduct(this.id);
  }

  render() {
    return(
      <li>
        <span className='remove-btn' onClick={this.removeProduct}>eliminar</span>
        <p>{this.name}</p>
        <p>{this.stock}</p>
        <p>{this.img}</p>
      </li>
    )
  }
}

export default Product;