import React from 'react';
import moment from 'moment';

class Task12 extends React.Component {
  state = {
    day: moment().format('DD'),
    month: moment().format('MM'),
    year: moment().format('YYYY'),
  };

  handleDayChange = (e) => {
    this.setState({ day: e.target.value });
  };

  handleMonthChange = (e) => {
    this.setState({ month: e.target.value });
  };

  handleYearChange = (e) => {
    this.setState({ year: e.target.value });
  };

  render() {
    const { day, month, year } = this.state;

    const date = moment(`${year}-${month}-${day}`, 'YYYY-MM-DD');
    const weekday = date.format('dddd');

    return (
      <div>
        <select value={day} onChange={this.handleDayChange}>
          {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
        <select value={month} onChange={this.handleMonthChange}>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
        <select value={year} onChange={this.handleYearChange}>
          {Array.from({ length: 20 }, (_, i) => i + 2010).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <p>{weekday}</p>
      </div>
    );
  }
}

export default Task12;
