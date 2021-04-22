import React from 'react';
import './Conversion.css';
import Tridot from '../../assets/tridot.svg';
import Indicator1 from '../../assets/indicator1.svg';
import Indicator2 from '../../assets/indicator2.svg';
import Indicator3 from '../../assets/indicator3.svg';
import PieChart from './PieChart';

const Conversion = () => {
  return (
    <div className='conversion'>
      <div className='title'>
        <h1>Conversion</h1>
        <div className='title-image'>
          <img src={Tridot} alt='tridot' />
        </div>
      </div>
      <div className='pie-chart'>
        <PieChart />
      </div>
      <div className='items'>
        <div className='item1'>
          <img src={Indicator1} alt='indicator1' />
          <p>Item#1</p>
        </div>
        <div className='item2'>
          <img src={Indicator2} alt='indicator2' />
          <p>Item#2</p>
        </div>
        <div className='item3'>
          <img src={Indicator3} alt='indicator3' />
          <p>Item#3</p>
        </div>
      </div>
    </div>
  );
};

export default Conversion;
