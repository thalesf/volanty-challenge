/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export interface Car {
  id: number;
  label: string;
  value: string;
}

export interface BrandCar {
  name: string;
  fipe_name: string;
  order: number;
  key: string;
  id: number;
}
const filterBrands = (brands: any): Car[] => {
  return brands.map((data: BrandCar) => ({
    id: data.id,
    label: data.name,
    value: data.name,
  }));
};

const filterCarYear = (data: any) => {
  return data.map((car: BrandCar) => ({
    id: car.id,
    value: car.name,
  }));
};

export { filterBrands, filterCarYear };
