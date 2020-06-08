# Ecoleta ♻️🚀 (Front-End)

![Logo](.github/nlw.svg)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![GitHub](https://img.shields.io/github/license/mrocha98/ecoleta-front?color=%23)
![GitHub repo size](https://img.shields.io/github/repo-size/mrocha98/ecoleta-front?color=%23)
![GitHub language count](https://img.shields.io/github/languages/count/mrocha98/ecoleta-front?color=%23)
![GitHub top language](https://img.shields.io/github/languages/top/mrocha98/ecoleta-front?color=%23)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=25BB15&colorA=)](https://github.com/styled-components/styled-components)

Um marketplace de coleta de resíduos. Desenvolvido na primeira edição da Next Level Week da Rocketseat.

## 💼 Projeto

O Ecoleta foi criado durante a [Semana Mundial do Meio Ambiente (IBEW)](https://www.ibew.sg/), e tem como finalidade divulgar pontos de coleta de resíduos, como por exemplo, óleo de cozinha, pilhas, lâmpadas, e etc.

Confira uma prévia:

🌐 Web:

![cadastro](.github/web-and-back.gif)

📱Mobile:

![mapa](.github/mobile1.jpg)
![local](.github/mobile2.jpg)

Para o front-end, foi utilizado:

- Typescript
- React
- React Dropzone
- React Leaflet
- Styled Components
- SweetAlert2
- Yup
- Vercel para deploy

## ⚙ Como rodar o front-end

Antes de tudo, instale configure o [back-end](https://github.com/mrocha98/ecoleta-back/blob/master/README.md#-como-rodar-o-back-end).

Em seguida, execute os comandos:

```bash
git clone https://github.com/mrocha98/ecoleta-front #clona o repositório para sua máquina
cd ecoleta-front #entra no diretório do repositório
yarn install #instala as dependências
```

Agora é necessário que você crie um arquivo .env na raiz do projeto, e preencha com as informações do seu ambiente de desenvolvimento. Confira o arquivo [.env.example](https://github.com/mrocha98/ecoleta-front/blob/master/.env.example).

Após preencher, execute:

```bash
yarn start #executa a aplicação em modo de desenvolvimento
```

Se tudo ocorreu bem, seu navegador padrão abrirá uma nova guia no endereço `localhost:3000`.

## 🚀 Deploy

Para o deploy do front-end foi utilizada a plataforma Vercel. Confira em:
`https://ecoleta-lime.now.sh/`

## 📜 Licença

Este projeto foi construído sob a licença BSD 2-Clause.
Clique [aqui](https://github.com/mrocha98/ecoleta-front/blob/master/LICENSE) para conferir mais detalhes.
