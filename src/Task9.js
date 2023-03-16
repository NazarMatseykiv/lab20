import React, { Component } from 'react';

class Task9 extends Component {
  state = {
    selectedOption: 'option1'
  }

  handleSelectChange = (event) => {
    this.setState({ selectedOption: event.target.value });
  }

  render() {
    let displayParagraph = null;

    if (this.state.selectedOption === 'option1') {
      displayParagraph = <p>Перший абзац</p>;
    } else if (this.state.selectedOption === 'option2') {
      displayParagraph = <p>Другий абзац</p>;
    } else if (this.state.selectedOption === 'option3') {
      displayParagraph = <p>Третій абзац</p>;
    }

    return (
      <div>
        <select value={this.state.selectedOption} onChange={this.handleSelectChange}>
          <option value="option1">Варіант 1</option>
          <option value="option2">Варіант 2</option>
          <option value="option3">Варіант 3</option>
        </select>
        {displayParagraph}
      </div>
    );
  }
}

export default Task9;
