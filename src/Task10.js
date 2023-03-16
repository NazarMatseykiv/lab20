import React, { useState } from 'react';

function Task10() {
  const [inputValue, setInputValue] = useState(''); // Стейт для зберігання введеного рядка в інпуті
  const [selectOptions, setSelectOptions] = useState([]); // Стейт для зберігання списку option у селекті

  const handleAddOption = () => {
    // Додати новий елемент до списку option у селекті
    setSelectOptions([...selectOptions, <option key={inputValue}>{inputValue}</option>]);
    setInputValue(''); // Очистити значення введеного рядка
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Зберегти введене значення в стейті
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddOption}>Додати option</button>
      <select>{selectOptions}</select>
    </div>
  );
}

export default Task10;
