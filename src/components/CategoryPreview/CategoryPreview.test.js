import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import CategoryPreview from './CategoryPreview';

configure({ adapter: new Adapter() });

const mockItems = [
  {
      id: 345,
  }
];

it("retains the same snapshot of the CategoryPreview component", () => {
  expect(shallow(<CategoryPreview title="Heh" items={mockItems} />).length).toBe(1);
  expect(shallow(<CategoryPreview title="Heh" items={mockItems} />)).toMatchSnapshot();
});