import { Typography } from '@material-ui/core';
import React, { FC } from 'react';

interface TopContainerProps {
  title?: string;
}
export const TopContainer: FC<TopContainerProps> = ({ children }) => {
  return (
    <div className="app">
      This is shared components v2
      <Typography color="primary">Test</Typography>
      <div>{children}</div>
    </div>
  );
};
