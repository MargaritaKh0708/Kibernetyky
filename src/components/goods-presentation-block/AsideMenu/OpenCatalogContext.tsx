import React from 'react';
import { useContext } from 'react';

export type OpenCatalogContent = {
  detailedInformation: string;
  setDetailedInformation: (value: string) => void;
  displayWidth: boolean;
  setDisplayWidth: (value: boolean) => void;
  lastTargetName: string;
  setLastTargetName: (value: string) => void;
  hideCategoryList: boolean;
  setHideCategoryList: (value: boolean) => void;
  setOpen: (c: boolean) => void;
  open: boolean;
};

export const OpenCatalogContext = React.createContext<OpenCatalogContent>({
  detailedInformation: '',
  setDetailedInformation: () => {},
  displayWidth: false,
  setDisplayWidth: () => {},
  lastTargetName: '',
  setLastTargetName: () => {},
  hideCategoryList: false,
  setHideCategoryList: () => {},
  open: false,
  setOpen: () => {},
});

export const useOpenCatalogContext = () => useContext(OpenCatalogContext);
