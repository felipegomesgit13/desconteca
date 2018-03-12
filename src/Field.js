import React from 'react';
import PropTypes from 'prop-types';

const Field = ({ cols, field, handler, id, label, list, prop, required, rows, type, value, }) => {
  const handleChange = () => {
    handler(prop, document.getElementById(id).value);
  };

  return (

      <p>
        <label>
          <span>{ label }</span>
            { field === 'input' && <input id={ id } name={ prop } onChange={ handleChange } required={ required } type={ type } value={ value }/> }
            { field === 'select' && <select id={ id } name={ prop } onChange={ handleChange } required={ required } value={ value }>
              { list.map((item) => <option key={ item.key } value={ item.value }>{ item.value }</option>) }
            </select> }
            { field === 'text' && <textarea cols={ cols } id={ id } name={ prop } onChange={ handleChange } required={ required } rows={ rows } value={ value }/> }
          { required && <strong><abbr title='Campo obrigatório.'>*</abbr></strong> }
        </label>
      </p>
  );
};

Field.defaultProps = {
  cols: 100,
  list: [],
  required: false,
  rows: 2,
};

Field.propTypes = {
  cols: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  field: PropTypes.oneOf([
    'input',
    'select',
    'text',
  ]),
  handler: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  list: PropTypes.array,
  prop: PropTypes.string.isRequired,
  required: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  rows: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  type: PropTypes.oneOf([
    'number',
    'text',
  ]),
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default Field;