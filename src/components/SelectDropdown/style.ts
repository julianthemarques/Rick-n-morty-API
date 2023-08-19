import styled from 'styled-components';

export const SelectDropDownStyle = styled.button`
  padding: 0.75rem 2rem;
  background-color: var(--svg-input-background);
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;
  color: var(--fonts-w500);
  border: 1.75px solid var(--svg-input-color);
  border-right: none;
  border-top: none;

  border-radius: 2px;
  * {
    pointer-events: none;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  .option {
    display: flex;
    gap: 2rem;
    padding: 1rem 2rem;
    background-color: var(--svg-input-background);
    height: 100%;
    width: 100%;
    transition: all 0.5s;
    cursor: pointer;
    :hover {
      background-color: var(--svg-input-hover);
    }
  }
  .active {
    background-color: var(--svg-input-hover);
    color: var(--svg-input-color);
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 2px;
`;
