import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import getCarBrands from '../../../models/client';
import filterBrands from '../../../lib/filter';

const Form: React.FC = () => {

  const [brands, setBrands] = useState();

  const getCars = async () => {
    const cars = await getCarBrands();
    console.log("ALL",cars);
    const carBrands = filterBrands(cars);
    console.log(carBrands);
    setBrands(carBrands);
  }

  useEffect(() => {
    getCars();
  }, []);

  // function handleChange(selectedOption: string): void {
  //   console.log("SELECTED OPTION", selectedOption);
  //   setBrands(brands)
  // }

  return (
    <>
      <ul>
        <Select
          value={""}
          options={brands}
        />
      </ul>
    </>
  )
}

export default Form;