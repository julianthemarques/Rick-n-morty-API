import { useLayoutContext } from '@contexts/layout/useLayoutContext';
import { LightIcon } from '@stylesComponents/icons';
import logo from 'assets/img/logo-rick.png';
import Image from 'next/image';
import Link from 'next/link';
import { HeaderStyled } from './style';

export const Header = () => {
  const { setTheme } = useLayoutContext();

  return (
    <HeaderStyled>
      <section className="left-container">
        <div className="logo-container">
          <Image src={logo} alt="Logo Rick and Morty" />
        </div>
      </section>
      <section className="right-container">
        <nav>
          <ul>
            <li>
              <Link href="/characters">Characters</Link>
            </li>
            <li>
              <Link href="/location">Locations</Link>
            </li>
            <li>
              <Link href="/episodes">Episodes</Link>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => setTheme((prev: boolean) => !prev)}
          type="button"
        >
          <LightIcon />
        </button>
      </section>
    </HeaderStyled>
  );
};
