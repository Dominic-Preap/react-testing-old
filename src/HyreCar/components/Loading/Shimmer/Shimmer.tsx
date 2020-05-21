import styled, { keyframes } from 'styled-components';

const placeholder = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

interface Props {
  /**
   * Shimmer height
   *
   * @default 50
   */
  height?: string | number;
  /**
   * Shimmer width
   *
   * @default 50
   */
  width?: string | number;
  /**
   * if `true`, set border-radius to 100%
   *
   * @default false
   */
  round?: boolean;
  /**
   * Overrides the existing style
   */
  style?: React.CSSProperties;

  /**
   * Overrides the existing style with className
   */
  className?: string;
}

export const Shimmer: React.FC<Props> = styled.div<Props>`
  /* ! WARNING: Do not re-arrange the css or the animation won't work */
  background: #f6f7f8;
  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
  background-repeat: no-repeat;
  background-size: 800px 300px;
  display: inline-block;
  position: relative;
  animation: ${placeholder} 1s linear infinite forwards;

  /* Props define here */
  border-radius: ${props => (props.round ? '100%' : '0')};
  width: ${props => (typeof props.width === 'number' ? (props.width || 50) + 'px' : props.width)};
  height: ${props => (typeof props.height === 'number' ? (props.height || 50) + 'px' : props.height)};
`;
