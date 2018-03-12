import React, { Component } from 'react';

import Field from './Field';

export default class extends Component {
  constructor() {
    super();

    this.state = {
      code: '',
      name: '',
    };
  };

  handleChange = (prop, value) => {
    this.setState({
      [ prop ]: value,
    });
  };

  render() {
    return (
      <fieldset>
        <legend>Categoria</legend>

        <Field field='input' handler={ this.handleChange } id='categoryCode' label='Código: ' prop='code' type='text'/>
        <Field field='input' handler={ this.handleChange } id='categoryName' label='Nome: ' prop='name' required='true' type='text'/>

        <p>
          <button type='button'>Criar Categoria</button>
        </p>
      </fieldset>
    );
  }
}