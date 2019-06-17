import axios from 'axios';

const api = axios.create({
  baseURL: 'http://fipeapi.appspot.com/api/1/carros/',
});

const getCarBrands = async (): Promise<string> => {
  try {
    const { data } = await api.get('/marcas.json');
    return data;
  } catch (error) {
    throw new Error('Não foi possivel carregar a lista de carros');
  }
};

const getCarBrandId = async (id: number): Promise<string> => {
  try {
    const { data } = await api.get(`/veiculos/${id}.json`);
    return data;
  } catch (error) {
    throw new Error('Não foi possivel carregar os modelos especificados');
  }
};

export { getCarBrands, getCarBrandId };
