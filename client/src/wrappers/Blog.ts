import styled from 'styled-components';

export const BlogWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0px auto;
  gap: 1rem;
  transition: var(--transition-200);

  &:has(.show-search) {
    grid-template-rows: 3rem auto;
  }
`;
