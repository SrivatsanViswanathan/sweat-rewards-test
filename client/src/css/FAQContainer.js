import styled from 'styled-components';

const Wrapper = styled.section`
  padding-bottom: 3rem;
  .container {
    width: 90vw;
    border-radius: var(--radius);
    padding: 0rem 2rem;
    max-width: var(--fixed-width);
    display: grid;
    gap: 1rem 2rem;
  }
  .container h3 {
    line-height: 1.2;
    font-weight: 500;
  }
  .extra {
    display: flex;
    width: 100%;
    height: auto;
  }
  .video {
    display: none;
    h4 {
      padding-bottom: 1rem;
      line-height: 1.35;
      text-align: center;
    }
  }
  .img {
    height: auto;
    object-fit: cover;
    max-width: var(--fixed-width);
    width: 75vw;
  }

  @media (min-width: 1025px) {
    .container {
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      max-width: 100%;
    }
    .extra {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
    .img {
      height: 100%;
    }
    .extra {
      max-width: 40.2rem;
    }
    a {
      height: 5.1rem;
      width: auto;
    }
    .video {
      display: block;
      width: 100%;
      height: auto;
    }
  }
`;

export default Wrapper;
