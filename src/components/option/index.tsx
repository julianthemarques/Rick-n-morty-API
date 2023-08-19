import { useFiltersContext } from '@contexts/filters/useFiltersContext';
import { useEffect, useRef, useState } from 'react';
import { OptionStyle } from './style';

interface OptionsProps {
  label: string;
  value: string;
}

export const Option = ({ label, value }: OptionsProps) => {
  const [checked, setChecked] = useState(false);
  const { filters, setFilters } = useFiltersContext();
  const option = useRef<HTMLButtonElement | null>(null);
  const checkbox = useRef<HTMLInputElement | null>(null);

  function AddFilter(val: any) {
    setFilters((prev: any) => [val, ...prev]);
  }

  function RemoveFilter(val: any) {
    const valFiltered = filters.filter((item) => item !== val);
    setFilters(valFiltered);
    console.log(valFiltered);
  }

  useEffect(() => {
    if (!checkbox.current) return;
    if (checked) {
      checkbox.current.checked = checked;
      option?.current?.classList.add('active');
      AddFilter(value);
    } else {
      checkbox.current.checked = checked;
      option?.current?.classList.remove('active');
      RemoveFilter(value);
    }
  }, [checked]);

  return (
    <OptionStyle
      type="button"
      onClick={() => setChecked((prev: any) => !prev)}
      ref={option}
      id={value}
      className="option"
    >
      {label}
      <input ref={checkbox} type="checkbox" value={value} />
    </OptionStyle>
  );
};
