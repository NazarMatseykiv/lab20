import React, { useState } from "react";

function Task7() {
  const [selectedColor, setSelectedColor] = useState("#000000");

  const handleChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div>
      <select value={selectedColor} onChange={handleChange}>
        <option value="#000000">Чорний</option>
        <option value="#ff0000">Червоний</option>
        <option value="#00ff00">Зелений</option>
        <option value="#0000ff">Синій</option>
      </select>
      <p style={{ color: selectedColor }}>Це текст абзацу</p>
    </div>
  );
}

export default Task7;
