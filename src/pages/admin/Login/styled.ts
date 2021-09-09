import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    div.hero {
      display: none;
    }
  }
  div.hero {
    height: 100%;
    img {
      width: 100%;
    }
  }
  div.form {
    height: 100%;
    background: var(--form-color);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img {
      margin-bottom: 3rem;
    }
    form {
      width: 100%;
      max-width: 400px;
      .input-group {
        header {
          display: flex;
          align-items: center;
          font-size: 0.8rem;
          color: var(--primary);
          svg {
            margin-right: 0.5rem;
          }
        }
        input {
          height: 40px;
          width: 100%;
          background: transparent;
          outline: 0;
          border: 0;
          border-bottom: 1px solid var(--primary);
          padding: 0 0.5rem;
          color: var(--white);
        }
        .message {
          display: flex;
          align-items: center;
          font-size: 0.7rem;
          color: var(--error);
          margin-bottom: 2rem;
          height: 20px;
          span {
            display: block;
            margin-top: 0.1rem;
            margin-left: 0.4rem;
          }
        }
      }
      button {
        width: 100%;
        background: var(--primary);
        color: var(--white);
        padding: 0.8rem;
        border-radius: 4px;
      }
    }
  }
`;
