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
  }
`;

export const ContentImage = styled.div`
  padding: 1rem;
  img {
    width: 120%;
  }
  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    img {
      width: 50%;
    }
  }
`;
