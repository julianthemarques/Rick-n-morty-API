import imageTitle from 'assets/img/serie-title.png';
import Image from 'next/image';
import { Input } from './Input/Input';

export const SearchContainer = () => {
  function HandleSearchButtonClick() {
    const searchContainer = document.querySelector('.search');
    searchContainer?.classList.toggle('open');
  }
  return (
    <section>
      <div className="title-container">
        <Image
          src={imageTitle}
          alt="Rick and Morty Title"
          width={600}
          height={200}
        />
      </div>
      <div className="input-container">
        <Input.Root className="search">
          <Input className="search-box" />
          <button
            type="button"
            className="search-button"
            onClick={HandleSearchButtonClick}
          >
            <span className="search-icon" />
          </button>
        </Input.Root>
      </div>
    </section>
  );
};
