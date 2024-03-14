import React from "react";
import Select from "./Pages/Select";

const SelectWork = () => {
  return (
    <Select>
      <Select.SelectOption value="value_1">Option--1</Select.SelectOption>
      <Select.SelectOption value="value_2">Option--2</Select.SelectOption>
      <Select.SelectOption value="value_3">Option--3</Select.SelectOption>
      <Select.SelectOption value="value_4">Option--4</Select.SelectOption>
    </Select>
  );
};

export default SelectWork;
