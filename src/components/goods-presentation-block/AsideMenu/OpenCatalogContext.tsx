import React from 'react';
import { useContext } from 'react';

//  const [detailedInformation, setDetailedInformation] = useState<string>(''); // Show 2nd part of modal window
//   const [displayWidth, setDisplayWidth] = useState<boolean>(false); // Watch of display-width to control modal window shape
//   const [lastTargetName, setLastTargetName] = useState<string>(''); // Read last target name for come-back BTN
//   const [hideCategoryList, setHideCategoryList] = useState<boolean>(false); // Property for hidden category list im mobile version work

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
