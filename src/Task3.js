import React, { useState } from 'react';

function Task3() {
  const [isChecked, setIsChecked] = useState(false);

  const paragraphStyle = {
    display: isChecked ? 'block' : 'none',
  };

  function handleChange(event) {
    setIsChecked(event.target.checked);
  }

  return (
    <div>
      <input type="checkbox" onChange={handleChange} />
      <p style={paragraphStyle}>Текст абзацу</p>
    </div>
  );
}

export default Task3;
