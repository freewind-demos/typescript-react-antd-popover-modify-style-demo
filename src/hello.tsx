import React from 'react';
import { Button, Popover } from 'antd'
import { css } from '@emotion/css';

const popoverStyle = css`
 background-color: red;
`;

export default function Hello() {
  return <Popover open overlayInnerStyle={{ backgroundColor: 'red' }} trigger={'click'} title={'Hello'}>
    <Button>Click</Button>
  </Popover>
};
