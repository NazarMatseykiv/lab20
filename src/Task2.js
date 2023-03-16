import React, { useState } from 'react';

function Task2() {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange(event) {
    setIsChecked(event.target.checked);
  }

  return (
    <div>
      <input type="checkbox" onChange={handleChange} />
      <p>{isChecked ? 'Checked' : 'Unchecked'}</p>
    </div>
  );
}

export default Task2;
