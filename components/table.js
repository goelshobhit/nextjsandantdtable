import { Table } from 'antd';
import React from 'react';

const App = ({ columnsData, dataSource}) => {
  return (
      <Table
        columns={columnsData}
        dataSource={dataSource}
      />
  );
};

export default App; 