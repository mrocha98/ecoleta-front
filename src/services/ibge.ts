import axios from 'axios';
import { IBGEUFResponse, IBGECityResponse } from '../types';

export async function getUfsList() {
  return axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
}

export async function getCitiesList(uf: string) {
  return axios.get<IBGECityResponse[]>(
    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios?orderBy=nome`,
  );
}
