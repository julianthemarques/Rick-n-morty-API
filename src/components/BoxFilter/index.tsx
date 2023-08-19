import React from 'react';
import { BoxFilterContainer } from './style';

export const BoxFilter = ({ ...props }: { children: React.ReactNode }) => {
  return <BoxFilterContainer {...props} />;
};
