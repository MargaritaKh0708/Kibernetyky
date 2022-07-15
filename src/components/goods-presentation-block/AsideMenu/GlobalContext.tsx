import React from 'react';
import { useContext } from 'react';

// const [likesModalActive, setLikesModalActive] = useState<boolean>(false); // open modal of favorite goods

export type GlobalContext = {
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
  setLikesModalActive: (value: boolean) => void;
  likesModalActive: boolean;
  setLoginModalActive: (value: boolean) => void;
  loginModalActive: boolean;
};

export const GlobalContext = React.createContext<GlobalContext>({
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
  setLikesModalActive: () => {},
  likesModalActive: false,
  setLoginModalActive: () => {},
  loginModalActive: false,
});

export const useGlobalContext = () => useContext(GlobalContext);
