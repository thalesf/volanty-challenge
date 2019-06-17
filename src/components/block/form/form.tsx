import React, { useState, useEffect } from 'react';
import Select from 'react-select';
// import { ValueType } from 'react-select/lib/types';

import { getCarBrands, getCarBrandId, getCarBrandIdCode, getCarBrandDetail } from '../../../models/client';
import { filterBrands } from '../../../lib/filter';

// type OptionType = {
//   id: number,
//   label: string;
//   value: number
// };

const Form: React.FC = () => {

  // const [brand, setBrand] = useState();  

  const [brands, setBrands] = useState();
  useEffect(() => {
    async function getCars() {
      const cars = await getCarBrands();
      const carBrands = filterBrands(cars);
      setBrands(carBrands);
    }
    getCars();
  }, []);


  const [id, setBrandId] = useState();
  const [carBrands, setCarBrands] = useState();

  const selectBrand = (event: any) => {
    async function getBrandById() {
      const carsId = await getCarBrandId(event.id);
      const carBrandId = filterBrands(carsId);
      setBrandId(event.id);
      setCarBrands(carBrandId);
    }

    getBrandById();
  }

  const [carCode, setCarCode] = useState();
  const [codeId, setCodeId] = useState();
  const selectBrandCode = (code: any) => {
    async function getBrandByCode() {
      const carsCode = await getCarBrandIdCode(id, code.id);
      const carsBrandCode = filterBrands(carsCode);
      setCodeId(code.id);
      setCarCode(carsBrandCode);
    }

    getBrandByCode();
  }

  const [carDetail, setcarDetail] = useState();
  const selectCarDetail = (detail: any) => {
    async function getBrandDetail() {
      const carsDetail = await getCarBrandDetail(id, codeId, detail.id);
      setcarDetail(carsDetail);
    }

    getBrandDetail();
  }

  return (
    <>
      <ul>
        <Select
          onChange={selectBrand}
          options={brands}
        />

        <Select
          onChange={selectBrandCode}
          options={carBrands}
        />

        <Select
          onChange={selectCarDetail}
          options={carCode}
        />

        {carDetail && (
          <div>
            <h1>{carDetail.marca}</h1> 
            <h2>{carDetail.name}</h2> 
            <h3>{carDetail.ano_modelo}</h3>
            <h3>{carDetail.combustivel}</h3> 
            <h3>{carDetail.preco}</h3> 
          </div>
        )}
      </ul>
    </>
  )
}

export default Form;