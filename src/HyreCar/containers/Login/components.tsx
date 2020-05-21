import MuiTypography from '@material-ui/core/Typography';
import { styled as MuiStyled } from '@material-ui/styles';
import styled from 'styled-components';

export const LoginWrapper: React.FC = styled.div`
  display: flex;
  height: 90vh;
  align-items: center;
  justify-content: center;
`;

export const LoginContainer: React.FC = styled.div`
  width: 400px;
`;

export const Typography = MuiStyled(MuiTypography)({
  fontWeight: 'normal',
  marginBottom: '20px',
  textAlign: 'center'
});
