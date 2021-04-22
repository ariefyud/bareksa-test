import React from 'react';
import './Revenue.css';
import Calendar from '../../assets/calendar.svg';
import LineChart from './LineChart';

const Revenue = () => {
  return (
    <div className='revenue'>
      <div className='top-title'>
        <h1>Revenue</h1>
        <div className='date'>
          <div className='date-details'>
            <h3>Feb - Mar 2021</h3>
          </div>
          <img src={Calendar} alt='calendar' />
        </div>
      </div>
      <div className='chart'>
        <LineChart />
      </div>
      <div className='bottom-value'>
        <h6>Total Revenue</h6>
        <h1>$76654.95</h1>
        <p>↑ 7,00%</p>
      </div>
    </div>
  );
};

export default Revenue;
