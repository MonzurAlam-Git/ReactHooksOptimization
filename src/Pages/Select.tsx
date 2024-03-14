import { createContext, useContext, useState } from "react";

/* Select Context Create */
const selectContext = createContext(null);

const Select = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    /* Provider - Defining Data that need to share */
    <selectContext.Provider value={{ selectedOption, setSelectedOption }}>
      <select onChange={(e) => setSelectedOption(e.target.value)}>
        {children}
      </select>
    </selectContext.Provider>
  );
};

const SelectOption = ({ value, children }) => {
  // const { selectedOption } = useContext(selectContext);
  const { selectedOption } = useSelectContext();

  const isActive = selectedOption === value;

  return (
    <option className={`${isActive ? "bg-red-400" : "bg-white"}`} value={value}>
      {children}
      {console.log("value", value)}
      {console.log("selectedOption", selectedOption)}
    </option>
  );
};

Select.SelectOption = SelectOption;

export default Select;

// Context
const useSelectContext = () => {
  const context = useContext(selectContext);
  if (!context) {
    throw new Error("Context Out of Bound");
  } else {
    return context;
  }
};
