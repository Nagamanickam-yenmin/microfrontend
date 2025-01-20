import React, { useState } from "react";
import Select, { SingleValue } from "react-select";
import { DropdownProps, SelectableOption } from "../../type/dropdownType";

const Dropdown: React.FC<DropdownProps> = ({ field }) => {
  // Convert selectableValues to options for the Select component
  const options: SelectableOption[] | undefined = field?.selectableValues?.map(
    (value) => ({
      value,
      label: value,
    })
  );

  const [selectedValue, setSelectedValue] =
    useState<SingleValue<SelectableOption>>(null);

  return (
    <div>
      <label>{field.fieldName}</label>
      <Select
        placeholder={field.fieldName}
        value={selectedValue}
        onChange={(newValue:any) => setSelectedValue(newValue)}
        options={options}
      />
    </div>
  );
};

export default Dropdown;
