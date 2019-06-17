import React from 'react'
import Select from 'react-select';
import { ValueType } from 'react-select/lib/types';

type OptionType = {
  id: number,
  label: string;
  value: number
};

const SelectField: React.FC = (onChange: any, options: any) => {
  // console.log(onChange,options)

  const handleChangeBrand = (event: ValueType<OptionType>) => {
    console.log("SELECTED OPTION", event);
  }

  return (
    <Select
      // value={}
      onChange={onChange}
      options={options}
    />
  )
}

export default SelectField;