import blueGrey from '@material-ui/core/colors/blueGrey';

import styled from 'styled-components';

export const DrawerBottomContainer: React.FC = styled.div`
  align-items: center;
  background: #fff;
  border-top: 1px solid ${blueGrey[200]};
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  left: 0;
  padding: 15px 40px;
  position: absolute;
  right: 0;
  z-index: 100;

  /* set margin top on not the first button if fullWidth is true  */
  .MuiButton-fullWidth:not(:first-child) {
    margin-top: 15px;
  }
`;
