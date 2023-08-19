import { ArrowIcon } from '@stylesComponents/icons';
import React, { useState } from 'react';
import { Container, SelectContainer, SelectDropDownStyle } from './style';

interface SelectDropDownProps {
  name?: string;
  children: React.ReactNode;
}

const SelectDropDown = ({ name, children }: SelectDropDownProps) => {
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   document.addEventListener('click', (ev) => {
  //     console.log(open);
  //     const element = ev.currentTarget as HTMLElement;
  //     if (element.id === 'select' && !open) return;
  //     setOpen(false);
  //   });
  // }, []);

  return (
    <Container>
      <SelectDropDownStyle id="select" onClick={() => setOpen((prev) => !prev)}>
        {name}
        <ArrowIcon open={open} />
      </SelectDropDownStyle>
      {open && <SelectContainer>{children}</SelectContainer>}
    </Container>
  );
};

export default SelectDropDown;
