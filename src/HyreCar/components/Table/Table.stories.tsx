import * as React from 'react';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';

import { Link } from '@material-ui/core';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { CarStatusIndicator } from './CarStatusIndicator';
import { Table } from './Table';

const headers = [
  { label: '#' },
  { key: 'status', label: 'Status' },
  { key: 'vin', label: 'Vin (Last 6)' },
  { key: 'model', label: 'Year, Make, Model' },
  { key: 'price', label: 'Price' },
  { key: 'protection', label: 'Protection' },
  { key: 'updatedDate', label: 'Last Updated' },
  { key: 'action', label: 'Action' }
];

const data = [
  {
    status: <CarStatusIndicator color="red" status="Rented" />,
    vin: '995199',
    model: '2008 Nissan Rogue',
    price: '$25.00',
    protection: 'Premium',
    updatedDate: '06/15/2019',
    action: <Link component={RouterLink} to="/" children="Edit" />
  },
  {
    status: <CarStatusIndicator color="grey" status="Live" />,
    vin: '034678',
    model: '2009 Audi S5',
    price: '$35.00',
    protection: 'Premium',
    updatedDate: '03/15/2019',
    action: <Link component={RouterLink} to="/" children="Edit" />
  },
  {
    status: <CarStatusIndicator color="orange" status="Snoozed" />,
    vin: '864257',
    model: '2008 Volkswagen Jetta',
    price: '$25.00',
    protection: 'Premium',
    updatedDate: '06/10/2019',
    action: <Link component={RouterLink} to="/" children="Edit" />
  }
];

// https://github.com/storybookjs/storybook/issues/769#issuecomment-294082103
storiesOf('HyreCar|Components/Table', module)
  .addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)
  .add('Default', () => (
    <Table
      data={data}
      fetching={boolean('Fetching', false)}
      hasNextPage={boolean('HasNextPage', true)}
      headers={headers}
      onFetchMore={action('onFetchMore')}
      onRowClick={action('onRowClick')}
    />
  ))
  .add('Empty Table', () => (
    <Table
      data={[]}
      headers={headers}
      noResultButtonPath={text('NoResultButtonPath', '/back')}
      noResultButtonText={text('NoResultButtonText', 'Go Back')}
      noResultMessage={text('NoResultMessage', 'You do not have any Rental Requests')}
    />
  ));
