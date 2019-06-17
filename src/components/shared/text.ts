/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export interface HeadingProps {
  color?: string;
  size?: number;
}

const Heading = styled.h1<HeadingProps>`
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  color: ${(props: HeadingProps) => props.color || '#000'};
  font-size: 1.8rem;
`;

export { Heading };
