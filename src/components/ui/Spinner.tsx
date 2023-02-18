import { Spin } from 'antd';
import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Spin />
    </div>
  );
};

export default Spinner;
