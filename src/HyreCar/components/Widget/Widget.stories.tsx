import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { boolean, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { WidgetList, WidgetListItem } from '.';
import { CarInsurance } from '../Icon/CarInsurance';
import { Widget } from './Widget';
import { WidgetBarChart } from './WidgetBarChart';
import { WidgetDonutChart } from './WidgetDonutChart';
import { WidgetElement } from './WidgetElement';
import { WidgetHeader } from './WidgetHeader';
import { WidgetIcon } from './WidgetIcon';

export const Div: React.FC = styled.div`
  width: 600px;
`;

const RenderWidget = () => (
  <Widget>
    <WidgetHeader title={text('Title', 'Widget Title')} onClick={action('Widget Click')} />
  </Widget>
);

const WidgetWithWidgetElement = () => (
  <Widget>
    <WidgetHeader title={text('Title', 'Rental Status')} onClick={action('Widget Click')} />
    <WidgetElement
      loading={boolean('Loading', false)}
      value="60"
      caption="total supply"
      md={number('Widget1', 6) as any}
    />
    <WidgetElement
      loading={boolean('Loading', false)}
      value="30 days"
      caption="duration"
      md={number('Widget2', 6) as any}
    />
  </Widget>
);

const WidgetWithWidgetIcon = () => (
  <Widget>
    <WidgetHeader title={text('Title', 'Widget Icon')} onClick={action('Widget Click')} />
    <WidgetIcon icon={CarInsurance} size={number('Size', 60)} md={number('Widget', 12) as 12} />
  </Widget>
);

const WidgetWithWidgetList = () => (
  <Widget>
    <WidgetHeader title={text('Title', 'Rental Status')} onClick={action('Widget Click')} />
    <WidgetList md={12}>
      <WidgetListItem loading={boolean('Loading', false)} caption="vehicles to rent" value="6" />
      <WidgetListItem loading={boolean('Loading', false)} caption="rental duration" value="36 DAYS" />
      <WidgetListItem loading={boolean('Loading', false)} caption="projected income" value="$5,400" />
    </WidgetList>
  </Widget>
);

const doughnutChartData = [
  // -----
  { name: 'New Rental', value: 39 },
  { name: 'Pre Owned', value: 13 },
  { name: 'Wholesale', value: 21 }
];

const WidgetWithWidgetDonutChart = () => (
  <Widget>
    <WidgetHeader title={text('Title', 'Rental Status')} onClick={action('Widget Click')} />
    <WidgetDonutChart md={6} loading={boolean('Loading', false)} data={doughnutChartData} />
    <WidgetList md={6}>
      <WidgetListItem loading={boolean('Loading', false)} caption="New Rental" value="39" />
      <WidgetListItem loading={boolean('Loading', false)} caption="Pre Owned" value="13" />
      <WidgetListItem loading={boolean('Loading', false)} caption="Wholesale" value="21" />
      <WidgetListItem loading={boolean('Loading', false)} caption="Total" value="73" />
    </WidgetList>
  </Widget>
);

const barChartData = [
  { name: '30 +', uv: 10, pv: 12 },
  { name: '60 +', uv: 18, pv: 20 },
  { name: '90 +', uv: 30, pv: 27 }
];

const WidgetWithWidgetBarChart = () => (
  <Widget>
    <WidgetHeader title={text('Title', 'Inventory on Lot')} onClick={action('Widget Click')} />
    <WidgetBarChart
      md={12}
      data={barChartData}
      xAxisLabel={text('xAxisLabel', 'Number of Cars')}
      yAxisLabel={text('yAxisLabel', 'Days on Lot')}
      pvName={text('pvName', 'Retail')}
      uvName={text('uvName', 'Wholesale')}
    />
  </Widget>
);

storiesOf('HyreCar|Components/Widget', module)
  .addDecorator(story => <Div>{story()}</Div>)
  .add('WidgetHeader', RenderWidget)
  .add('WidgetBarChart', WidgetWithWidgetBarChart)
  .add('WidgetDonutChart', WidgetWithWidgetDonutChart)
  .add('WidgetElement', WidgetWithWidgetElement)
  .add('WidgetIcon', WidgetWithWidgetIcon)
  .add('WidgetList', WidgetWithWidgetList);
