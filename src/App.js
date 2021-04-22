import React from 'react';
import { Navbar, Conversion, Users, Revenue, DatePicker, Orders } from './components';

const App = () => {
  return (
    <>
      <Navbar />
      <Conversion />
      <Users />
      <Revenue />
      <DatePicker />
      <Orders />
    </>
  );
};

export default App;
