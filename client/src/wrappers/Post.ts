import styled from 'styled-components';

export const PostWrapper = styled.article`
  width: 80vw;
  margin-bottom: 1.5rem;
  transition: var(--transition-200);
  border-radius: var(--border-radius);

  &:hover {
    box-shadow: 1px 7px 10px -3px var(--box-shadow-hover);
  }

  #title {
    font-size: 1.25rem;
    font-weight: 900;
  }

  #title:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  img {
    border-radius: var(--border-radius);
    width: 65%;
  }

  .post-component {
    display: grid;
    grid-template-columns: 3fr 1fr;
  }

  .post-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    padding-left: 2rem;
  }

  .post-image {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-block: 1rem;
  }

  .info span {
    font-size: 0.75rem;
    color: var(--theme-clr-accent);
    font-weight: var(--fw-bold);
  }

  .info span:nth-child(2) {
    margin-inline: 1rem;
  }

  .categories {
    margin-bottom: 1rem;
  }

  .categories span {
    font-size: 0.75rem;
    font-weight: var(--fw-bold);
    margin-right: 1rem;
    padding: 0.2rem 0.5rem;
    border-radius: ${({ theme }) => (theme.roundUI ? '100vmax' : '2px')};
  }

  /* @media (width < 768px) {
    img {
      display: none;
    }
  } */
`;
