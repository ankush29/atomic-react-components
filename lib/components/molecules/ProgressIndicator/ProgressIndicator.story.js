import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

// Import Styled Component to showcase variations
import ProgressIndicator, { ProgressIndicatorVanilla } from '.';
import defaultConfig from './ProgressIndicator.mock';

storiesOf('Molecules/ProgressIndicator', module).addParameters({ jest: ['ProgressIndicator', 'ProgressIndicatorVanilla']
})
.add('Knobs', () => (
  <ProgressIndicatorVanilla
    percent={50}
    fillBackground="linear-gradient(to right, #fefb72, #f0bb31)"
  >
    <ProgressIndicatorVanilla.Step>
      {({ accomplished }) => (
        <div style={{ backgroundColor: accomplished ? 'blue' : 'grey' }}></div>
      )}
    </ProgressIndicatorVanilla.Step>
    <ProgressIndicatorVanilla.Step>
      {({ accomplished }) => (
        <div style={{ backgroundColor: accomplished ? 'blue' : 'grey' }}></div>
      )}
    </ProgressIndicatorVanilla.Step>
    <ProgressIndicatorVanilla.Step>
      {({ accomplished }) => (
        <div style={{ backgroundColor: accomplished ? 'blue' : 'grey' }}></div>
      )}
    </ProgressIndicatorVanilla.Step>
  </ProgressIndicatorVanilla>
))
.add('ProgressIndicator', () => (
    <ProgressIndicator
      percent={50}
      fillBackground="linear-gradient(to right, #fefb72, #f0bb31)"
    >
    <ProgressIndicator.Step>
      {({ accomplished }) => (
        <>
        <div style={{ backgroundColor: accomplished ? 'blue' : 'gray' }} />
      </>
      )}
    </ProgressIndicator.Step>
    <ProgressIndicator.Step>
      {({ accomplished }) => (
        <div style={{ backgroundColor: accomplished ? 'blue' : 'gray' }}></div>
      )}
    </ProgressIndicator.Step>
    <ProgressIndicator.Step>
      {({ accomplished }) => (
        <>
          <div style={{ backgroundColor: accomplished ? 'blue' : 'gray' }} />
        </>
      )}
    </ProgressIndicator.Step>
  </ProgressIndicator>
));
