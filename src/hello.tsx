import { Button, ConfigProvider, Popover } from 'antd';
import React from 'react';

export default function Hello() {
  return <ConfigProvider theme={{
    components: {
      Popover: {
        colorBgElevated: 'red'
      }
    }
  }}>
    <Popover trigger={'click'} title={'Hello'}>
      <Button>Click</Button>
    </Popover>
  </ConfigProvider>
};
