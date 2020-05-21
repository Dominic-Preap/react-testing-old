import * as React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

import { WidgetBody, WidgetBodyProps } from './WidgetBody';

export const WidgetList: React.FC<WidgetBodyProps> = props => {
  const { children, ...gridSize } = props;
  return (
    <WidgetBody {...gridSize}>
      <Table>
        <TableBody>{props.children}</TableBody>
      </Table>
    </WidgetBody>
  );
};
