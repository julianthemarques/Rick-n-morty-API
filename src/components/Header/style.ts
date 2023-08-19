import styled from 'styled-components';

export const HeaderStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  box-shadow: 2px 2px 10px var(--shadows-linear-header);
  background-color: var(--background-w500);
  align-items: center;
  padding: 0.5rem 0;
  min-height: 70px;
  margin-bottom: 2rem;

  .logo-container {
    height: 100%;
    width: 4.5rem;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .right-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    nav {
      ul {
        list-style: none;
        display: flex;
        gap: 1rem;
        align-items: center;
        a {
          text-decoration: none;
        }
      }
    }

    button {
      background-color: transparent;
      outline: none;
      border: none;
      cursor: pointer;
    }
  }
`;
