import styled from 'styled-components';

export const Background: React.FC = styled.div`
  background: linear-gradient(90deg, ${props => props.theme.white} 20px, transparent 1%) center,
    linear-gradient(${props => props.theme.white} 20px, transparent 1%) center, #cccccc;
  background-size: 22px 22px;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: -1;
`;

Background.defaultProps = {
  /** Ignore this props */
  theme: {
    white: '#fff'
  }
};
