import React from 'react';
import './Users.css';
import Tridot from '../../assets/tridot.svg';
import Indicator1 from '../../assets/indicator1.svg';
import Indicator2 from '../../assets/indicator2.svg';
import Indicator3 from '../../assets/indicator3.svg';
import PieChartUsers from './PieChartUsers';
// import PieRadius from './PieRadius';

const Users = () => {
  return (
    <div className='users'>
      <div className='title'>
        <h1>Users</h1>
        <div className='title-image'>
          <img src={Tridot} alt='tridot' />
        </div>
      </div>
      <div className='pie-chart'>
        <PieChartUsers />
        {/* <PieRadius /> */}
      </div>
      <div className='items'>
        <div className='item1'>
          <img src={Indicator1} alt='indicator1' />
          <p>cat#1</p>
        </div>
        <div className='item2'>
          <img src={Indicator2} alt='indicator2' />
          <p>cat#2</p>
        </div>
        <div className='item3'>
          <img src={Indicator3} alt='indicator3' />
          <p>cat#3</p>
        </div>
      </div>
    </div>
  );
};

export default Users;
