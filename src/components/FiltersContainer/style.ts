import styled from 'styled-components';

export const FiltersContainerStyle = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  .filters {
    display: flex;
    gap: 2rem;
  }
  .filteredValues {
    display: flex;
    width: 100%;
    justify-content: center;
    .content {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      width: 60%;
      gap: 1rem;
      margin-top: 2rem;
    }
  }
`;
