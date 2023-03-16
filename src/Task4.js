import React, { useState } from 'react';

function Task4() {
  const [selectedCity, setSelectedCity] = useState('');

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div>
      <select value={selectedCity} onChange={handleCityChange}>
        <option value="Київ">Київ</option>
        <option value="Львів">Львів</option>
        <option value="Одеса">Одеса</option>
        <option value="Харків">Харків</option>
        <option value="Дніпро">Дніпро</option>
      </select>
      <p>Обране місто: {selectedCity}</p>
    </div>
  );
}

export default Task4;
