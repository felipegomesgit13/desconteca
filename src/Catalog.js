import React from 'react';

import CategoryForm from './CategoryForm';
import ProductForm from './ProductForm';

export default () => {
  return (
    <form method='post'>
      <h1>Catálogo</h1>

      <CategoryForm/>
      <ProductForm/>

      <p>
        <button type='submit'>Criar Catálogo</button>
      </p>
    </form>
  );
}