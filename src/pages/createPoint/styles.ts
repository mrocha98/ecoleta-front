import styled from 'styled-components';

export const Page = styled.section`
  width: 100%;
  max-width: 1100px;

  margin: 0 auto;
`;

export const Form = styled.form`
  margin: 80px auto;
  padding: 64px;
  max-width: 730px;
  background: #fff;
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 36px;
  }
  fieldset {
    margin-top: 64px;
    min-inline-size: auto;
    border: 0;
  }
  legend {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    span {
      font-size: 14px;
      font-weight: normal;
      color: var(--text-color);
    }
    h2 {
      font-size: 24px;
    }
  }
`;

export const FieldGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Field = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  input[type='number'],
  input[type='text'],
  input[type='email'],
  input[type='tel'] {
    flex: 1;
    background: #f0f0f5;
    border-radius: 8px;
    border: 0;
    padding: 1rem 1.5rem;
    margin-right: 0.55em;
    font-size: 16px;
    color: #6c6c80;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    flex: 1;
    background: #f0f0f5;
    border-radius: 8px;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;
    color: #6c6c80;
    margin-right: 0.55em;
  }
  label {
    font-size: 14px;
    margin-bottom: 8px;
  }
`;

export const FieldCheck = styled.div`
  flex-direction: row;
  align-items: center;
  input[type='checkbox'] {
    background: #f0f0f5;
  }

  label {
    margin: 0 0 0 8px;
  }
`;

export const LeafletContainer = styled.div`
  .leaflet-container {
    width: 100%;
    height: 350px;
    border-radius: 8px;
    margin-bottom: 24px;
  }
`;

export const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  list-style: none;

  li {
    background: #f5f5f5;
    border: 2px solid #f5f5f5;
    height: 180px;
    border-radius: 8px;
    padding: 32px 24px 16px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    text-align: center;

    cursor: pointer;

    span {
      flex: 1;
      margin-top: 12px;

      display: flex;
      align-items: center;
      color: var(--title-color);
    }
  }

  .selected {
    background: #e1faec;
    opacity: 0.9;
    border: 2px solid #34cb79;
  }
`;

export const Button = styled.button`
  width: 260px;
  height: 56px;
  background: var(--primary-color);
  border-radius: 8px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  border: 0 !important;
  align-self: flex-end;
  margin-top: 40px;
  transition: background-color 0.2s;
  cursor: pointer;

  :hover {
    background: #2fb86e;
  }
`;
