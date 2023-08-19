import { FiltersContainer } from '@components/FiltersContainer';
import { Input } from '@components/input';
import { CharacterContainerStyle } from '@stylesPages/characters';
import { MagnifyingGlass } from 'styled-icons/entypo';

const Characters = () => {
  return (
    <CharacterContainerStyle>
      <Input.Root>
        <Input.Input placeholder="Search your character" />
        <Input.Icon>
          <MagnifyingGlass />
        </Input.Icon>
      </Input.Root>
      <FiltersContainer />
    </CharacterContainerStyle>
  );
};
export default Characters;
