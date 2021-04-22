import React from 'react';
import { Pie } from 'react-chartjs-2';
import { defaults } from 'chart.js';

defaults.plugins.legend.position = 'bottom';
defaults.elements.bar.borderWidth = 0;

const PieChartUsers = () => {
  return (
    <>
      <Pie
        data={{
          datasets: [
            {
              data: [36, 6, 29, 27],
              backgroundColor: ['#EBA45E', '#E4EAEB', '#725E9C', '#5C8F94'],
            },
          ],
        }}
        options={{
          responsive: true,
        }}
      />
    </>
  );
};

export default PieChartUsers;
