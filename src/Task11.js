import React, { useState } from 'react';

function Task11() {
  const [isInputDisabled, setIsInputDisabled] = useState(true);

  const handleCheckboxChange = (event) => {
    setIsInputDisabled(!event.target.checked);
  };

  return (
    <div>
      <label>
        <input type="checkbox" onChange={handleCheckboxChange} />
        Disable input
      </label>
      <br />
      <input type="text" disabled={isInputDisabled} />
    </div>
  );
}

export default Task11;
