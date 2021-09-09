import styled from 'styled-components';

export const Section = styled.section`
  height: 100%;
  padding-top: 8rem;
  @media (max-width: 900px) {
    padding-top: 2rem;
  }
`;

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const ContentInfo = styled.div`
  padding: 1rem;
  a.header {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
    @media (max-width: 900px) {
      justify-content: center;
    }
    img {
      width: 100px;
      display: block;
      margin-right: 1rem;
    }
    button {
      height: fit-content;
      border-radius: 8px;
      border: none;
      padding: 0.5rem 1rem;
      background: var(--tertiary);
      color: var(--white);
      display: flex;
      align-items: center;
      svg {
        font-size: 1.3rem;
        margin-right: 0.5rem;
      }
    }
  }
  div.body {
    @media (max-width: 900px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    a.button {
      text-decoration: none;
      color: var(--white);
      background: var(--secondary);
      padding: 0.5rem 2rem;
      font-weight: bold;
      font-size: 1.3rem;
      border-radius: 20px;
      transition: filter 0.3s;
      display: flex;
      align-items: center;
      width: fit-content;
      svg {
        margin-right: 0.5rem;
      }
      &:hover {
        filter: brightness(0.9);
      }
    }
    p {
      font-size: 1rem;
    }
  }
`;

export const ContentForm = styled.div`
  padding: 1rem;
  form {
    background: var(--form-color);
    padding: 1rem;
    border-radius: 8px;
    header {
      text-align: center;
      h3 {
        font-size: 1.8rem;
        line-height: 1.8rem;
        margin: 2rem 0;
      }
      p {
        font-size: 1.3rem;
        margin-bottom: 3rem;
      }
    }
    main {
      .input-group {
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
      }

      .grid-group {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }

      .input-captcha {
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
      }
    }
  }
`;
