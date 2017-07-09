import React, { Component } from 'react';

class DateFilter extends Component {
  render() {
    return (
      <div className="filter-item filter-date">
        <span>Фильтр по дате: от: </span>
        <input name="date-from" type="date" />
        <span>до:</span>
        <input name="date-to" type="date" />
      </div>
    );
  }
}

export default DateFilter;