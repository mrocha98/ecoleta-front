import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { LeafletMouseEvent } from 'leaflet';
import { Map, TileLayer, Marker } from 'react-leaflet';
import MaskedInput from 'react-text-mask';
import { useHistory } from 'react-router-dom';
import { successAlert, errorAlert, warningAlert } from '../../utils/alerts';
import { Item } from '../../types';
import Header from '../../components/header';
import Dropzone from '../../components/dropzone';
import api from '../../services/api';
import { getUfsList, getCitiesList } from '../../services/ibge';
import schema from './schema';
import { Page, Field, FieldGroup, Form, ItemsGrid, Button, LeafletContainer } from './styles';

const CreatePoint: React.FC = () => {
  const history = useHistory();
  const [items, setItems] = useState<Item[]>([]);
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);
  const [inputData, setInputData] = useState({ name: '', email: '', whatsapp: '' });
  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0, 0]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [selectedFile, setSelectedFile] = useState<File>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setInitialPosition([latitude, longitude]);
    });
  }, []);

  useEffect(() => {
    async function loadData() {
      const req = await api.get('items');
      setItems(req.data);
    }
    loadData();
  }, []);

  useEffect(() => {
    async function loadData() {
      const req = await getUfsList();
      const ufInitials = req.data.map((uf) => uf.sigla);
      setUfs(ufInitials);
    }
    loadData();
  }, []);

  useEffect(() => {
    async function loadData() {
      const req = await getCitiesList(selectedUf);
      const cityNames = req.data.map((city) => city.nome);
      setCities(cityNames);
    }
    loadData();
  }, [selectedUf]);

  const handleSelectUf = (event: ChangeEvent<HTMLSelectElement>) => setSelectedUf(event.target.value);
  const handleSelectCity = (event: ChangeEvent<HTMLSelectElement>) => setSelectedCity(event.target.value);

  const handleMapClick = (event: LeafletMouseEvent) => {
    const { lat, lng } = event.latlng;
    setSelectedPosition([lat, lng]);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSelectItem = (id: number) => {
    const alreadySelected = selectedItems.findIndex((item) => item === id);

    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter((item) => item !== id);
      setSelectedItems(filteredItems);
    } else setSelectedItems([...selectedItems, id]);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const { email, name, whatsapp } = inputData;
    const uf = selectedUf;
    const city = selectedCity;
    const [latitude, longitude] = selectedPosition;
    const items = selectedItems;

    const userData = {
      name,
      email,
      whatsapp,
      uf,
      city,
      latitude,
      longitude,
      items,
    };

    try {
      await schema.validate(userData);

      const data = new FormData();
      data.append('name', name);
      data.append('email', email);
      data.append('whatsapp', whatsapp);
      data.append('uf', uf);
      data.append('city', city);
      data.append('latitude', String(latitude));
      data.append('longitude', String(longitude));
      data.append('items', items.join(','));
      if (selectedFile) data.append('image', selectedFile);
      try {
        await api.post('points', data);
        successAlert('Cadastro concluído.');
        history.push('/');
      } catch (err) {
        const { message } = err.response.data;
        errorAlert(message);
      }
    } catch (err) {
      warningAlert(err.message);
    }
  };

  return (
    <Page>
      <Header displayLink />
      <Form onSubmit={handleSubmit}>
        <h1>Cadastro do ponto de coleta</h1>

        <Dropzone onFileUploaded={setSelectedFile} />

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>
          <Field>
            <label htmlFor="name">Nome da entidade</label>
            <input type="text" name="name" onChange={handleInputChange} />
          </Field>

          <FieldGroup>
            <Field>
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" onChange={handleInputChange} />
            </Field>

            <Field>
              <label htmlFor="whatsapp">Whatsapp</label>
              <MaskedInput
                type="tel"
                name="whatsapp"
                mask={['+', '5', '5', /[1-9]/, /[1-9]/, '9', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
                showMask
                guide
                onChange={handleInputChange}
              />
            </Field>
          </FieldGroup>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>

          <LeafletContainer>
            <Map center={initialPosition} zoom={15} onClick={handleMapClick}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={selectedPosition} />
            </Map>
          </LeafletContainer>

          <FieldGroup>
            <Field>
              <label htmlFor="uf">Estado (UF)</label>
              <select name="uf" onChange={handleSelectUf}>
                <option value={'0'}>Selecione uma UF</option>
                {ufs.map((uf) => (
                  <option key={uf} value={uf}>
                    {uf}
                  </option>
                ))}
              </select>
            </Field>

            <Field>
              <label htmlFor="city">Cidade</label>
              <select name="city" onChange={handleSelectCity}>
                <option value={0}>Selecione uma cidade</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </Field>
          </FieldGroup>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Itens de Coleta</h2>
            <span>Selecione um ou mais items abaixo</span>
          </legend>

          <ItemsGrid>
            {items.map(({ id, title, image_url }) => (
              <li
                key={id}
                onClick={() => handleSelectItem(id)}
                className={selectedItems.includes(id) ? 'selected' : ''}
              >
                <img src={image_url} alt={title} />
                <span>{title}</span>
              </li>
            ))}
          </ItemsGrid>
        </fieldset>

        <Button type="submit">Cadastrar ponto de coleta</Button>
      </Form>
    </Page>
  );
};

export default CreatePoint;
