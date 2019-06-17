import React, { useState, useEffect, lazy, Suspense } from 'react';
import Select from 'react-select';
import { ValueType } from 'react-select/lib/types';

import { getCarBrands, getCarBrandId } from '../../../models/client';
import filterBrands from '../../../lib/filter';

// type OptionType = {
//   id: number,
//   label: string;
//   value: number
// };

const Form: React.FC = () => {

  const [brands, setBrands] = useState();
  const [id, setBrandId] = useState(1);
  const [brand, setBrand] = useState();
  const [brandsId, setBrandsId] = useState();

  useEffect(() => {
    async function getCars() {
      const cars = await getCarBrands();
      const carBrands = filterBrands(cars);
      setBrands(carBrands);
    }
    getCars();
  }, []);

  useEffect(() => {
    async function getBrandById() {
      const carsId = await getCarBrandId(id);
      const carBrandId = filterBrands(carsId);
      setBrandsId(carBrandId);
    }
    getBrandById();

  }, [id])

  return (
    <>
      <ul>
        <Select
          // value={}
          onChange={(e: any) => {
            setBrandId(e.id)
          }}
          options={brands}
        />
        
        <Select
          // value={}
          onChange={(e: any) => {
            setBrand(e.id)
          }}
          options={brandsId}
        />

      </ul>
    </>
  )
}

export default Form;