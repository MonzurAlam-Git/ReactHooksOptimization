import { Dispatch, ReactNode, createContext, useState } from "react";
type TDarkContext = {
  dark: boolean;
  setDark: Dispatch<React.SetStateAction<boolean>>;
};

type TExProvider = {
  children: ReactNode;
};

/* Returns two things --> provider, consumer	*/
export const DarkContext = createContext<TDarkContext | undefined>(undefined);

const ExperimentProvider = ({ children }: TExProvider) => {
  const [dark, setDark] = useState(false);
  const values = { dark, setDark };
  return <DarkContext.Provider value={values}>{children}</DarkContext.Provider>;
};

export default ExperimentProvider;
