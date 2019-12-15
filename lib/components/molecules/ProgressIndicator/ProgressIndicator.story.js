import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

// Import Styled Component to showcase variations
import ProgressIndicator, { ProgressIndicatorVanilla } from '.';

storiesOf('Molecules/ProgressIndicator', module).addParameters({ jest: ['ProgressIndicator', 'ProgressIndicatorVanilla']
})
.add('Knobs', () => (
    <ProgressIndicatorVanilla
      percent={75}
      fillBackground="linear-gradient(to right, #fefb72, #f0bb31)"
    >
    <ProgressIndicatorVanilla.Step>
      {({ accomplished }) => (
        <img
          style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
          width="30"
          src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851"
        />
      )}
    </ProgressIndicatorVanilla.Step>
    <ProgressIndicatorVanilla.Step>
      {({ accomplished }) => (
        <img
          style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
          width="30"
          src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851"
        />
      )}
    </ProgressIndicatorVanilla.Step>
    <ProgressIndicatorVanilla.Step>
      {({ accomplished }) => (
        <img
          style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
          width="30"
          src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851"
        />
      )}
    </ProgressIndicatorVanilla.Step>
  </ProgressIndicatorVanilla>
))
.add('ProgressIndicator', () => (
  <ProgressIndicator percent={75} fillBackground="linear-gradient(to right, #fefb72, #f0bb31)">
    <ProgressIndicator.Step>
      {({ accomplished }) => (
        <img
          style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
          width="30"
          src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851"
        />
      )}
    </ProgressIndicator.Step>
    <ProgressIndicator.Step>
      {({ accomplished }) => (
        <img
          style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
          width="30"
          src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851"
        />
      )}
    </ProgressIndicator.Step>
    <ProgressIndicator.Step>
      {({ accomplished }) => (
        <img
          style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
          width="30"
          src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851"
        />
      )}
    </ProgressIndicator.Step>
  </ProgressIndicator>
));
