import React, { useState } from 'react';

function Task1() {
  const [text, setText] = useState('');

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <textarea onChange={handleChange} />
      <p>{text}</p>
    </div>
  );
}

export default Task1;
