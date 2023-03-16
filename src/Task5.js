import React, { useState } from 'react';

function Task5() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <input type="radio" name="radioButton" value="1" onChange={handleRadioChange} /> 1<br />
      <input type="radio" name="radioButton" value="2" onChange={handleRadioChange} /> 2<br />
      <input type="radio" name="radioButton" value="3" onChange={handleRadioChange} /> 3<br />
      <p>Обране значення: {selectedValue}</p>
    </div>
  );
}

export default Task5;
