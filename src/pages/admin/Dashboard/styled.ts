import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Dash = styled.div`
  height: 100%;
  padding: 5rem;
  header {
    border-bottom: 1px solid var(--form-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      margin-bottom: 1rem;
    }
    div {
      display: flex;
      align-items: center;
      cursor: pointer;
      strong {
        margin-right: 0.5rem;
        transition: color 0.5s;
      }
      svg {
        transition: color 0.3s;
      }
      &:hover {
        color: var(--form-color);
      }
    }
  }
  main {
    .grid {
      display: grid;
      gap: 1rem;
      grid-template-columns: 1fr 1fr 1fr;
      margin-top: 1rem;
      .item {
        background: var(--white);
        color: var(--form-color);
        padding: 0.5rem;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
          svg {
            font-size: 1.5rem;
          }
        }
        h2 {
          font-size: 1.8rem;
          margin-top: 1rem;
        }
      }
    }
    .table {
      margin-top: 2rem;
      h1 {
        border-bottom: 1px solid var(--form-color);
        padding-bottom: 0.5rem;
      }
      table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0 0.4em;
        margin-top: 1rem;
        tbody {
          tr {
            background: RED;
            td {
              background: var(--white);
              color: var(--form-color);
              padding: 0.5rem;
              &:first-child {
                border-radius: 0.25rem 0 0 0.25rem;
              }
              &:last-child {
                border-radius: 0 0.25rem 0.25rem 0;
              }
            }
          }
        }
      }
    }
  }
`;

export const Hero = styled.div`
  height: 100%;
  background: var(--form-color);
  img {
    width: 100%;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;
