import styled from 'styled-components';

export const Section = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 1.5rem;
  .jump {
    padding-bottom: 3rem;
    img {
      width: 100px;
      height: 100px;
    }
  }
`;
