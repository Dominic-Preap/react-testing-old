import * as React from 'react';

import { createShallow } from '@material-ui/core/test-utils';
import { shallow as enzymeShallow } from 'enzyme';

import { FacebookButton, FlatButton, OutlinedButton, TextButton } from './Button';

describe('Button', () => {
  let props: { children: string };
  let shallow: typeof enzymeShallow;

  beforeEach(() => {
    props = { children: 'Hello' };
    shallow = createShallow();
  });

  // it('should render properly', () => {
  //   expect(create(<FlatButton {...props} />).toJSON()).toMatchSnapshot();
  // });

  it('TextButton should properly containing props', () => {
    const wrapper = shallow(<TextButton {...props} />);
    expect(wrapper.children().text()).toEqual(props.children);
  });

  it('OutlinedButton should properly containing props', () => {
    const wrapper = shallow(<OutlinedButton {...props} />);
    wrapper.setProps({ color: 'secondary' });
    wrapper.update();
    expect(wrapper.children().text()).toEqual(props.children);
  });

  it('FlatButton should properly containing props', () => {
    const wrapper = shallow(<FlatButton {...props} />);
    wrapper.setProps({ color: 'secondary' });
    wrapper.update();
    expect(wrapper.children().text()).toEqual(props.children);
  });

  it('FacebookButton should properly containing props', () => {
    const wrapper = shallow(<FacebookButton {...props} />);
    expect(
      wrapper
        .children()
        .last()
        .text()
    ).toEqual(props.children);
  });
});
