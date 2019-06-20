import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { IoIosCar, IoMdCalendar } from 'react-icons/io';
import { MdAttachMoney, MdLocalGasStation, MdDirectionsCar } from 'react-icons/md';

import { IconContext } from 'react-icons';
import { getCarBrands, getCarBrandId, getCarBrandIdCode, getCarBrandDetail } from '../../../models/client';
import { filterBrands } from '../../../lib/filter';
import FormWrapper from './style';

import { Heading } from '../../shared/text';

const Form: React.FC = () => {
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

  const handleBrand = (event: any) => {
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
  const handleBrandCode = (code: any) => {
    async function getBrandByCode() {
      const carsCode = await getCarBrandIdCode(id, code.id);
      const carsBrandCode = filterBrands(carsCode);
      setCodeId(code.id);
      setCarCode(carsBrandCode);
    }

    getBrandByCode();
  }

  const [carDetail, setcarDetail] = useState();
  const CarDetail = (detail: any) => {
    async function getBrandDetail() {
      const carsDetail = await getCarBrandDetail(id, codeId, detail.id);
      setcarDetail(carsDetail);
    }

    getBrandDetail();
  }

  useEffect(() => {
    setcarDetail(null)
  }, [id, codeId]);

  return (
    <FormWrapper>
      <Heading color="#2167b2">Quanto vale meu carro?</Heading>
      <Select
        className="selectField"
        onChange={handleBrand}
        options={brands}
        placeholder="Marca"
      />

      <Select
        className="selectField"
        onChange={handleBrandCode}
        options={carBrands}
        placeholder="Modelo"
        noOptionsMessage={() => 'Selecione a marca do carro'}
      />

      <Select
        className="selectField"
        onChange={CarDetail}
        options={carCode}
        placeholder="Ano"
        noOptionsMessage={() => 'Selecione o modelo do carro'}
      />

      {carDetail && (
        <div>
          <h1>
            <IconContext.Provider value={{ style: { verticalAlign: 'middle', paddingRight: 20 } }}>
              <IoIosCar size={32} /> {carDetail.marca}
            </IconContext.Provider>
          </h1>

          <h3>
            <IconContext.Provider value={{ style: { verticalAlign: 'middle', paddingRight: 20 } }}>
              <MdDirectionsCar size={26} /> {carDetail.name}
            </IconContext.Provider>
          </h3>

          <h3>
            <IconContext.Provider value={{ style: { verticalAlign: 'middle', paddingRight: 20 } }}>
              <IoMdCalendar size={26} /> {carDetail.ano_modelo}
            </IconContext.Provider>
          </h3>

          <h3>
            <IconContext.Provider value={{ style: { verticalAlign: 'middle', paddingRight: 20 } }}>
              <MdLocalGasStation size={29} /> {carDetail.combustivel}
            </IconContext.Provider>
          </h3>

          <Heading color="#2167b2" >
            <IconContext.Provider value={{ style: { verticalAlign: 'middle', paddingRight: 20 } }}>
              <MdAttachMoney size={32} /> {carDetail.preco}
            </IconContext.Provider>
          </Heading>
        </div>
      )}

    </FormWrapper>
  )
}

export default Form;