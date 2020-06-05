import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Backgorund from '../../assets/home-background.svg';

export const Page = styled.section`
  background: url(${Backgorund}) no-repeat 42em bottom;
  height: 100vh;

  .content {
    width: 100vw;
    height: 75vh;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 30px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 900px) {
    .content {
      align-items: center;
      text-align: center;
    }
  }
`;

export const Main = styled.main`
  flex: 1;
  max-height: 400px;
  max-width: 600px;
  margin-top: 10em;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 54px;
    color: var(--title-color);
  }

  p {
    font-size: 24px;
    margin-top: 24px;
    line-height: 38px;
  }

  @media (max-width: 900px) {
    margin-top: 0;
    max-height: none;
    align-items: center;

    h1 {
      font-size: 42px;
    }

    p {
      font-size: 24px;
    }
  }
`;

export const Anchor = styled(Link)`
  width: 100%;
  max-width: 360px;
  height: 72px;
  background: var(--primary-color);
  border-radius: 8px;
  text-decoration: none;
  display: flex;
  align-items: center;
  overflow: hidden;
  /* margin-top: 40px; */

  &:hover {
    background: #2fb86e;
  }

  span {
    display: block;
    background: rgba(0, 0, 0, 0.08);
    width: 72px;
    height: 72px;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;

    svg {
      color: #fff;
      width: 20px;
      height: 20px;
    }
  }

  strong {
    flex: 1;
    text-align: center;
    color: #fff;
  }
`;
