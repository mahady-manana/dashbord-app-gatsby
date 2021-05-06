import React, { FC } from 'react';

interface TopContainerProps {
  title?: string;
}
export const TopContainer: FC<TopContainerProps> = ({ children }) => {
  return (
    <div className="app">
      This is shared components v2
      <div>{children}</div>
    </div>
  );
};
