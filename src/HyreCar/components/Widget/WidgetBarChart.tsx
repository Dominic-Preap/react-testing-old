import * as React from 'react';

import grey from '@material-ui/core/colors/grey';
import lightBlue from '@material-ui/core/colors/lightBlue';
import { Bar, BarChart, CartesianGrid, Label, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { WidgetBody, WidgetBodyProps } from './WidgetBody';

interface Props extends WidgetBodyProps {
  data: Array<{ name: string; pv: number; uv: number }>;
  loading?: boolean;
  pvName: string;
  uvName: string;
  xAxisLabel?: string;
  yAxisLabel?: string;
}

// https://github.com/recharts/recharts/issues/90
// https://github.com/recharts/recharts/issues/184
// https://stackoverflow.com/questions/54330155/recharts-turn-off-background-hover-for-bar-charts

export const WidgetBarChart: React.FC<Props> = props => {
  const { data, loading, xAxisLabel, yAxisLabel, pvName, uvName, ...gridSize } = props;

  return (
    <WidgetBody {...gridSize}>
      <ResponsiveContainer width="100%" height="100%" minWidth={200} minHeight={200}>
        <BarChart
          barCategoryGap={8}
          barGap={0}
          data={data}
          layout="vertical"
          margin={{ left: 20, right: 30, bottom: 10, top: 5 }}
        >
          <XAxis type="number">
            <Label
              offset={-10}
              position="insideBottomLeft"
              style={{ textAnchor: 'right', fill: 'grey' }}
              value={xAxisLabel}
            />
          </XAxis>
          <YAxis type="category" dataKey="name">
            <Label
              angle={-90}
              position="insideLeft"
              style={{ textAnchor: 'middle', fill: 'grey' }}
              value={yAxisLabel}
            />
          </YAxis>

          <CartesianGrid strokeDasharray="2" horizontal={false} />
          <Tooltip itemStyle={{ color: 'grey' }} cursor={{ fill: grey[200] }} />
          <Legend align="right" />

          <Bar dataKey="pv" name={pvName} fill={lightBlue[200]} label={{ position: 'right' }} />
          <Bar dataKey="uv" name={uvName} fill={lightBlue[100]} label={{ position: 'right' }} />
        </BarChart>
      </ResponsiveContainer>
    </WidgetBody>
  );
};
