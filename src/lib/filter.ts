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
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  return brands.map((data: any) => ({
    id: data.id,
    label: data.name,
    value: data.name,
  }));
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const filterCarYear = (data: any) => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  return data.map((car: any) => ({
    id: car.id,
    value: car.name,
  }));
};

export { filterBrands, filterCarYear };
