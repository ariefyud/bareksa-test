import React from 'react';
import './DatePicker.css';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

const DatePicker = () => {
  const dateValue = new Date(new Date().getFullYear(), new Date().getMonth(), 14);
  const startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 10);
  const enddate = new Date(new Date().getFullYear(), new Date().getMonth(), 20);

  return (
    <div className='date-picker'>
      <DatePickerComponent
        placeholder='Enter Date'
        value={dateValue}
        min={startDate}
        max={enddate}
        format='dd-MM-yy'
      ></DatePickerComponent>
      <button id='cancel'>Cancel</button>
      <button id='filter'>Filter</button>
    </div>
  );
};

export default DatePicker;
