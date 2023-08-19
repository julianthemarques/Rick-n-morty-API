import React, { createContext, useMemo, useState } from 'react';
import { iFiltersContext } from './iFiltersContext';

export const FiltersContext = createContext<iFiltersContext>(
  {} as iFiltersContext,
);

interface FiltersProviderProps {
  children: React.ReactNode;
}

export const FiltersProvider = ({ children }: FiltersProviderProps) => {
  const [filters, setFilters] = useState([]);
  const contextValue = useMemo(() => ({ filters, setFilters }), [filters]);
  return (
    <FiltersContext.Provider value={contextValue}>
      {children}
    </FiltersContext.Provider>
  );
};
