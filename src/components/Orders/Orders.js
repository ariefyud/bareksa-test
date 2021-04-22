import React, { useState, useEffect } from 'react';
import './Orders.css';

const Orders = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://ecdba7fe-ec10-4d90-8d0e-80f8364c7624.mock.pstmn.io/takehometest/frontend/web/dashboard')
      .then(resp => resp.json())
      .then(resp => {
        setUsers(resp.data.orders);
        console.log(resp.data.orders);
      });
  }, []);

  return (
    <div className='orders'>
      <h1 className='table-title'>Orders</h1>
      <table id='table-data'>
        <thead>
          <tr>
            {/* {renderHeader()} */}
            <th>
              Order <br /> Number
            </th>
            <th>Status</th>
            <th>Operator</th>
            <th>Location</th>
            <th>Start Date</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {users.slice(0, 5 ? 5 : users.length).map((user, id) => {
            const { status, full_name, location, start_date, due_date } = user;
            return (
              <tr>
                <td>{`#000${id + 1}`}</td>
                <td>
                  <div id={status}>{status}</div>
                </td>
                <td>{full_name}</td>
                <td>{location}</td>
                <td>{start_date}</td>
                <td>{due_date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
