import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { GET_CATEGORY_LIST } from 'HyreCar/queries';
import { ApolloStorybookMockedProvider } from 'tests/ApolloStorybookMockedProvider';

import { Autocomplete } from './Autocomplete';
import { QueryAutocomplete } from './QueryAutocomplete';
import { TextField } from './TextField';

const options = [
  { value: 1, label: '🍎 Apple' },
  { value: 2, label: '🍌 Banana' },
  { value: 3, label: '🍒 Cherries' },
  { value: 4, label: '🍇 Grapes' }
];

const result = {
  data: {
    viewer: {
      categoryList: [
        { categoryID: 1, name: 'Beverages' },
        { categoryID: 2, name: 'Condiments' },
        { categoryID: 3, name: 'Confections' }
      ]
    }
  }
};

storiesOf('HyreCar|Components/Inputs', module)
  .addDecorator(story => <div style={{ width: 350 }}>{story()}</div>)
  .add('Autocomplete', () => (
    <Autocomplete
      disabled={boolean('Disabled', false)}
      errorText={text('Error Text', 'Name is Required')}
      fullWidth={boolean('FullWidth', true)}
      label={text('Label', 'Name')}
      isClearable={boolean('Clearable', false)}
      isLoading={boolean('Loading', false)}
      isMulti={boolean('Multi', false)}
      name="name"
      onBlur={action('Blur')}
      onChange={action('Change')}
      options={options}
      placeholder={text('Placeholder', 'Enter your name')}
    />
  ))
  .add('TextField', () => (
    <TextField
      disabled={boolean('Disabled', false)}
      errorText={text('Error Text', 'Name is Required')}
      fullWidth={boolean('FullWidth', true)}
      label={text('Label', 'Name')}
      name="name"
      onBlur={action('Blur')}
      onChange={action('Change')}
      onFocus={action('Focus')}
      onKeyDown={action('KeyDown')}
      placeholder={text('Placeholder', 'Enter your name')}
      type={select('Type', { text: 'text', password: 'password' }, 'text')}
    />
  ))
  .add('TextArea', () => (
    <TextField
      disabled={boolean('Disabled', false)}
      errorText={text('Error Text', 'Name is Required')}
      fullWidth={boolean('FullWidth', true)}
      label={text('Label', 'Name')}
      name="name"
      multiline
      rows={number('Rows', 3)}
      onBlur={action('Blur')}
      onChange={action('Change')}
      onFocus={action('Focus')}
      onKeyDown={action('KeyDown')}
      placeholder={text('Placeholder', 'Enter your name')}
      type={select('Type', { text: 'text', password: 'password' }, 'text')}
    />
  ));

storiesOf('HyreCar|Components/Inputs', module)
  .addDecorator(story =>
    ApolloStorybookMockedProvider(story, [{ request: { query: GET_CATEGORY_LIST }, delay: 2000, result }])
  )
  .addDecorator(story => <div style={{ width: 350 }}>{story()}</div>)
  .add('QueryAutocomplete', () => (
    <QueryAutocomplete
      disabled={boolean('Disabled', false)}
      errorText={text('Error Text', 'Name is Required')}
      fullWidth={boolean('FullWidth', true)}
      label={text('Label', 'Name (graphql)')}
      isClearable={boolean('Clearable', false)}
      isLoading={boolean('Loading', false)}
      isMulti={boolean('Multi', false)}
      name="name"
      onBlur={action('Blur')}
      onChange={action('Change')}
      options={options}
      placeholder={text('Placeholder', 'Enter your name')}
      // -------------------------------------------------
      query={GET_CATEGORY_LIST}
      queryField="viewer.categoryList"
      queryOptionsMapping={{ label: 'name', value: 'categoryID' }}
      // queryOptionsMapping={(x: any) => ({ label: x.name, value: x.categoryID })}
    />
  ));
