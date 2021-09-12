import styled from 'styled-components';

export const Container = styled.div`
  div {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    input {
      width: 100px;
      height: 40px;
      border: 0;
      outline: 0;
      padding: 0 0.5rem;
      border-radius: 4px;
    }
  }

  button {
    width: 100%;
    background: var(--primary);
    color: var(--white);
    padding: 0.8rem;
    border-radius: 4px;
  }
`;
