import { BoxFilter } from '@components/BoxFilter';
import { Option } from '@components/option';
import { useFiltersContext } from '@contexts/filters/useFiltersContext';
import SelectDropDown from '../SelectDropdown';
import { FiltersContainerStyle } from './style';

export const FiltersContainer = () => {
  const { filters } = useFiltersContext();
  return (
    <FiltersContainerStyle>
      <h1>Filters</h1>
      <div className="filters">
        <SelectDropDown name="Status">
          <Option label="Alive" value="alive" />
          <Option label="Dead" value="dead" />
          <Option label="Unknown" value="unknown" />
        </SelectDropDown>
        <SelectDropDown name="Teste1">
          <Option label="teste" value="teste" />
          <Option label="biscoito" value="biscoito" />
          <Option label="pao" value="pao" />
        </SelectDropDown>
        <SelectDropDown name="Teste2">
          <Option label="tv" value="tv" />
          <Option label="calcas" value="calcas" />
          <Option label="feels" value="feels" />
        </SelectDropDown>
      </div>
      <div className="filteredValues">
        <div className="content">
          {filters.map((item, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <BoxFilter key={i}>{item}</BoxFilter>
          ))}
        </div>
      </div>
    </FiltersContainerStyle>
  );
};
