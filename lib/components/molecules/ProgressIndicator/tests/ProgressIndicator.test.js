import React from 'react';
import { shallow, render } from 'enzyme';

import { ProgressIndicatorVanilla } from '../index';

describe('<ProgressIndicator />', () => {
  let ProgressIndicatorComponent = '';
  beforeEach(() => {
    ProgressIndicatorComponent = shallow(<ProgressIndicatorVanilla>Test</ProgressIndicatorVanilla>);
  });

  test('should render correctly', () => {
    expect(ProgressIndicatorComponent).toMatchSnapshot();
  });
});
