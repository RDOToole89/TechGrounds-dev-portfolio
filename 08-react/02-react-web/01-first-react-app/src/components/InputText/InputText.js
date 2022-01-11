import React from 'react';

function InputText({ textDisplayCallback }) {
  return (
    <div>
      <input onChange={textDisplayCallback} />
    </div>
  );
}

export default InputText;
