import * as React from 'react';

import lightBlue from '@material-ui/core/colors/lightBlue';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

import { Shimmer } from '../Loading/Shimmer/Shimmer';
import { WidgetBody, WidgetBodyProps } from './WidgetBody';

interface Props extends WidgetBodyProps {
  loading?: boolean;
  data: Array<{ name: string; value: string | number }>;
}

const COLORS = [
  lightBlue[200],
  lightBlue[300],
  lightBlue[400],
  lightBlue[500],
  lightBlue[600],
  lightBlue[700],
  lightBlue[800]
];

// https://github.com/recharts/recharts/issues/531
export const WidgetDonutChart: React.FC<Props> = props => {
  const { data, loading, ...gridSize } = props;

  return (
    <WidgetBody {...gridSize}>
      {loading ? (
        <div style={{ padding: 10 }}>
          <Shimmer width={174} height={174} round />
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="100%" minWidth={200} minHeight={200}>
          <PieChart margin={{ bottom: 10 }}>
            <Pie data={data} innerRadius={40} outerRadius={90} paddingAngle={1} dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      )}
    </WidgetBody>
  );
};
