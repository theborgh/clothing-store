import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import FormInput from './FormInput';

configure({ adapter: new Adapter() });

const createShallowFormInputWrapper = (props={}, state=null) => {
  const wrapper = shallow(<FormInput {...props} />);

  if (state) {
    wrapper.setState(state);
  }

return wrapper;
}
const findTagsWithTestAttribute = (wrapper, attributeValue) => wrapper.find(`[data-test='component-${attributeValue}']`);

it("renders without errors", () => {
  const wrapper = createShallowFormInputWrapper();
  expect(findTagsWithTestAttribute(wrapper, 'component-FormInput').length).toBe(1);
});

it("matches the snapshot", () => {
  expect(shallow(<FormInput />).debug()).toMatchSnapshot();
})