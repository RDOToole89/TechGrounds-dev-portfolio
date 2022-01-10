import React from 'react';

function InputText({ callback }) {
  return (
    <div>
      <input onChange={(e) => callback(e.target.value)} />
    </div>
  );
}

export default InputText;
