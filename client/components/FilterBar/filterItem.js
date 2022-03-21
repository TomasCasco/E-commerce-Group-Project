import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Select } from "@chakra-ui/react";
import { FaFilter } from "react-icons/fa";

const FilterItem = forwardRef(({ title, values, setUrl }, ref) => {
  const selectRef = useRef();

  useImperativeHandle(ref, () => ({
    setDefaultValue() {
      selectRef.current.value = "default";
    },
  }));

  return (
    <Select
      maxW="150px"
      icon={<FaFilter fill="#44b8fc" />}
      defaultValue="default"
      onChange={(e) => setUrl(e.target.value, title)}
      ref={selectRef}
    >
      <option disabled value={"default"}>
        {title}
      </option>
      {values.map((value,index) => {
        return <option value={value} key={value+index}>{value}</option>;
      })}
    </Select>
  );
});

export default FilterItem;
