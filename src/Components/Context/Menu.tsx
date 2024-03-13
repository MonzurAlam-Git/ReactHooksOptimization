import { createContext, useContext } from "react";

/* Creating Context	*/
const MenuContext = createContext(null);

/* Providing Context 	*/
export const MenuList = ({ children }) => {
  return (
    //It provides a value { theme: "dark" } to any component that consumes MenuContext.
    <MenuContext.Provider value={{ theme: "dark" }}>
      {children}
      {/* <ul> {children}</ul> */}
    </MenuContext.Provider>
  );
};

/*  Consuming Context	*/
export const MenuItem = () => {
  const { theme } = useContext(MenuContext);
  console.log(theme);
  return <div>Menu Item</div>;
};
