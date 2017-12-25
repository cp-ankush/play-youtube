import React from 'react';

export const InputForm = (field) => {
  return (
    <div className="search-input">
      <input {...field.input} type="text" className="form-control"
        placeholder="Search" />
    </div>
  );
}
