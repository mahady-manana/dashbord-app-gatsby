import React from 'react';
import { TopContainer } from './src/components/main';

export const wrapPageElement = ({ element, props }) => (
  <TopContainer {...props}>{element}</TopContainer>
);
