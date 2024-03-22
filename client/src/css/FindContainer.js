import styled from 'styled-components';

const Wrapper = styled.section`
  text-align: center;
  .container {
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    gap: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  @media (min-width: 768px) {
    .container {
      grid-template-columns: 1fr 1fr 1fr;
      justify-content: center;
    }
    .section {
      display: grid;
      justify-content: center;
      text-align: center;
      width: 100%;
    }
    img {
      height: 20rem;
      width: auto;
    }
  }
`;

export default Wrapper;
