import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import CategoryPreview from './CategoryPreview';

Enzyme.configure({ adapter: new Adapter() });

const mockItems = [
  {
      id: 345,
  }
];

describe("CategoryPreview", () => {
  it("Renders 1 component", () => {
    expect(Enzyme.shallow(<CategoryPreview title="Heh" items={mockItems} />).length).toEqual(1);
  });
  it("Matches previous snapshot", () => {
    expect(Enzyme.shallow(<CategoryPreview title="Heh" items={mockItems} />).debug()).toMatchSnapshot();
  });
});