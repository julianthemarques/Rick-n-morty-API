import styled from 'styled-components';

export const InputRootStyle = styled.div`
  position: relative;
  input {
    width: 20rem;
    height: 2.7rem;
    padding: 1rem;
    background-color: var(--svg-input-background);
    color: var(--fonts-w500);
    border: var(--svg-input-color) solid 1.75px;
    border-top: none;
    border-left: none;
    border-radius: 2px;
    font-size: 1.2rem;
  }

  input::placeholder {
    color: var(--fonts-w400);
  }

  input:focus {
    outline: none;
    background-color: transparent;
    border: var(--svg-input-color) solid 2.5px;
    border-top: none;
    border-left: none;
    border-right: none;
  }
`;

export const InputIconStyle = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  position: absolute;
  right: 0.5rem;
  top: 0.3rem;
`;
