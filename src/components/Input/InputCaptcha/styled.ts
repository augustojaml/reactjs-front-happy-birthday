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
    font-weight: bold;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .spinner {
      animation: spin 1s infinite ease-in-out;
      //  animation: dash 2s infinite ease-in-out;
      border-radius: 50%;
      border-top: 2px solid #fff;
      display: inline-block;
      height: 1em;
      width: 1em;
      margin-left: 1rem;
    }

    @keyframes spin {
      100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    @keyframes dash {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      50% {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }
`;
