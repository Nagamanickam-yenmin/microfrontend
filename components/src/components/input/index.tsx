import React from 'react';
import Field from '../../type/inputType';
 

interface InputProps {
  field: Field;
}

const Input: React.FC<InputProps> = ({ field }) => {
  return (
    <div>
      <label>{field.fieldName}</label>
      <input type={field.type || "text"} name={field.fieldName} placeholder={field.fieldName} />
    </div>
  );
};

export default Input;
