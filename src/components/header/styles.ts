import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Menu = styled.header`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1280px) {
    justify-content: space-around;
  }
`;

export const BackLink = styled(Link)`
  color: var(--title-color);
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;

  svg {
    margin-right: 16px;
    color: var(--primary-color);
  }
`;
