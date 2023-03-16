import React, { Component } from 'react';

class Task6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texts: [], // початковий порожній масив
      currentText: '', // поточний текст у текстареа
    };
  }

  handleInputChange = (event) => {
    this.setState({ currentText: event.target.value });
  };

  handleSubmit = () => {
    // додаємо поточний текст до масиву
    this.setState((prevState) => ({
      texts: [...prevState.texts, prevState.currentText],
      currentText: '', // очистимо текстареа після додавання
    }));
  };

  render() {
    const { texts, currentText } = this.state;
    return (
      <div>
        <textarea value={currentText} onChange={this.handleInputChange} />
        <button onClick={this.handleSubmit}>Додати</button>
        {texts.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    );
  }
}

export default Task6;
