import React, { Component } from 'react';

class Task8 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxChecked: false
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(event) {
    const value = event.target.value;
    this.setState({
      checkboxChecked: value === 'не позначено'
    });
  }

  render() {
    return (
      <div>
        <select onChange={this.handleSelectChange}>
          <option>позначено</option>
          <option>не позначено</option>
        </select>
        <input type="checkbox" checked={this.state.checkboxChecked} />
      </div>
    );
  }
}

export default Task8;
