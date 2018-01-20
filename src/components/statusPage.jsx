import React from 'react';
import Radar from './radar';
import HealthTable from './healthTable';

const statusPage = () => {
  return(
    <div>
      <HealthTable />
      <Radar />
    </div>
  )
};

export default statusPage;
