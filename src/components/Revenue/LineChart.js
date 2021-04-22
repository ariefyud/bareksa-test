import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    uv: 20000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Tue',
    uv: 23000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Wed',
    uv: 15000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Thu',
    uv: 17800,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Fri',
    uv: 18900,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Sat',
    uv: 23900,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Sun',
    uv: 26900,
    pv: 4300,
    amt: 2100,
  },
];

export default class LineChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';

  render() {
    return (
      <ResponsiveContainer width='100%' height='100%'>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#789764' stopOpacity={0.9} />
              <stop offset='95%' stopColor='#FFFFFF' stopOpacity={0.7} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis
            dataKey='name'
            style={{
              fontSize: '12px',
              fontFamily: 'Montserrat',
              fontWeight: 600,
              letterSpacing: '0.4px',
              opacity: 0.6,
              color: '#9C9C9C',
            }}
          />
          <YAxis
            type='number'
            domain={[0, 40000]}
            style={{
              fontSize: '12px',
              fontFamily: 'Montserrat',
              fontWeight: 600,
              letterSpacing: '0.4px',
              opacity: 0.6,
              color: '#9C9C9C',
            }}
          />
          <Tooltip />
          {/* <Line
            type='monotone'
            unit='M'
            strokeLinecap='round'
            strokeWidth={2}
            style={{ strokeDasharray: `40% 60%` }}
            dataKey='close'
            stroke='#006991'
            dot={false}
            legendType='none'
          /> */}
          <Area type='monotone' dataKey='uv' stroke='#789764' strokeWidth={2} fillOpacity={1} fill='url(#colorUv)' />
          {/* <Area type='monotone' dataKey='uv' stroke='#789764' fill='#789764' /> */}
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
