import React from 'react';
import { Table } from './table/table';
import './app.scss';
import Provider from './provider';
import Coupon from './coupon/coupon';

const App = () => (
  <Provider>
    <div className="app">
      <Table />
      <Coupon />
    </div>
  </Provider>
);

export default App;
