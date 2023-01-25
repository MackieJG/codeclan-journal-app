import { shallow } from 'enzyme';
import BarChart from './BarChart';

describe('BarChart', () => {
  it('should display the passed data', () => {
    const component = shallow(<BarChart entry.sleep="" />);
    expect(component.find('p').text()).toEqual('Hello, John');
  });
});