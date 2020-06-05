import * as yup from 'yup';
import { regexWhatsappBrazil as regExpWhatsapp } from '../../utils/regex';

const schema = yup.object().shape({
  name: yup.string().trim().required('Nome é um campo obrigatório!'),
  email: yup.string().trim().email('Formato de e-mail inválido').required('E-mail é um campo obrigatório!'),
  whatsapp: yup
    .string()
    .matches(regExpWhatsapp, 'Formato de telefone inválido!')
    .required('Whatsapp é um campo obrigatório!'),
  uf: yup.string().trim().notOneOf(['0'], 'Escolha uma UF!').required(),
  city: yup.string().trim().notOneOf(['0'], 'Cidade é um campo obrigatório!').required(),
  latitude: yup.number().notOneOf([0], 'Selecione o endereço no mapa!').required(),
  longitude: yup.number().notOneOf([0], 'Selecione o endereço no mapa!').required(),
  items: yup.array().of(yup.number()).min(1, 'Selecione pelo menos 1 item!').required(),
});

export default schema;
