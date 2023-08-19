import { ArrowIosUpwardOutline } from '@styled-icons/evaicons-outline/ArrowIosUpwardOutline';
import { LightbulbCircle } from '@styled-icons/fluentui-system-filled/LightbulbCircle';
import styled, { css } from 'styled-components';

interface ArrowIconProps {
  open: boolean;
}

export const LightIcon = styled(LightbulbCircle)`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: linear-gradient(
    to right,
    #70d254,
    #90d745,
    #afdb36,
    #cede28,
    #eddf1c
  );
  fill: var(--background-w500);
`;

export const ArrowIcon = styled(ArrowIosUpwardOutline)<ArrowIconProps>`
  width: 1rem;
  height: 1rem;
  color: var(--font-w500);
  transform: rotateX(0deg);
  transition: all 0.5s;
  ${({ open }) =>
    open &&
    css`
      transform: rotateX(180deg);
    `}
`;
