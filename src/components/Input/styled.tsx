import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  div.content {
    display: flex;
    background: var(--white);
    height: 40px;
    background: var(--white);
    border-radius: 4px;
    overflow: hidden;
    .icon {
      width: 40px;
      height: 40px;
      background: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    input,
    select {
      width: 100%;
      border: 0;
      outline: 0;
      padding: 0 0.5rem;
    }
  }
  .message {
    display: flex;
    align-items: center;
    font-size: 0.7rem;
    color: var(--error);
    margin-bottom: 1rem;
    height: 20px;
    span {
      display: block;
      margin-top: 0.1rem;
      margin-left: 0.4rem;
    }
  }
`;
