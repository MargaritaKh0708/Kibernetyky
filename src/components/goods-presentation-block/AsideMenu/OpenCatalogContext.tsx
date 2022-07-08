import React from 'react';
import { useContext } from 'react';

export type OpenCatalogContent = {
  setOpen: (c: boolean) => void;
  open: boolean;
};

export const OpenCatalogContext = React.createContext<OpenCatalogContent>({
  open: false,
  setOpen: () => {},
});

export const useOpenCatalogContext = () => useContext(OpenCatalogContext);
