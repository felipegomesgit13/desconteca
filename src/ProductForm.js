import React, { Component } from 'react';

import Field from './Field';

export default class extends Component {
  constructor() {
    super();

    this.state = {
      category: '',
      code: '',
      description: '',
      name: '',
      price: 0,
      productList: [],
    };
  };

  handleChange = (prop, value) => {
    this.setState({
      [ prop ]: value,
    });
  };

  list = [
    { key: '1', value: 'Item A' },
    { key: '2', value: 'Item B' },
    { key: '3', value: 'Item C' },
  ]; 

  render() {
    return (
      <fieldset>
        <legend>Produto</legend>
        
        <Field field='select' handler={ this.handleChange } id='productCategory' label='Categoria: ' list={ this.list } prop='category' required='true'/>
        <Field field='input' handler={ this.handleChange } id='productCode' label='Código: ' prop='code' type='text'/>
        <Field field='text' handler={ this.handleChange } id='productDescription' label='Descrição: ' prop='description' required='true'/>
        <Field field='input' handler={ this.handleChange } id='productName' label='Nome: ' prop='name' required='true' type='text'/>
        <Field field='input' handler={ this.handleChange } id='productPrice' label='Preço: ' prop='price' required='true' type='number'/>

        <p>
          <button type='button'>Criar Produto</button>
        </p>
      </fieldset>
    );
  };
}