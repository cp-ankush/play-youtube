import React from 'react';

export const RadioButton = (field) => {
  const {labelValue} = field;
  return (
    <div className="radio-btn">
    <label className="form-check-label">
      <input {...field.input} type="radio" className="form-check-input" />
      {
        labelValue
      }
    </label>
    </div>
  );
}
