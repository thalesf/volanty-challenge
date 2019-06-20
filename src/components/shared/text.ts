/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export interface HeadingProps {
  color?: string;
}

const Heading = styled.h1<HeadingProps>`
  color: ${props => props.color || '#000'};
  font-size: 1.8rem;
`;

const HeadingNormal = styled.h1<HeadingProps>`
  color: ${props => props.color || '#000'};
  font-size: 1.6rem;
`;

export { Heading, HeadingNormal };
