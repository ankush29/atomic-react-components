// @flow
/**
 *
 * ProgressIndicator
 *
 */
import React from 'react';
import styled from 'styled-components';

import styles from './ProgressIndicator.style';
import type { ProgressBarProps, StepProps } from './types';
import './progressBar.css';

const getSafePercent = (percent) => {
  if (percent > 100 || percent < 0 || typeof percent !== 'number') {
    console.warn(
      `[react-step-progress-bar]: The value passed to percent or position needs to be a number between 0 and 100 (passed value: ${percent}).`,
    );
  }
  return Math.min(100, Math.max(percent, 0));
}

const Step = ({ ...props }: StepProps) => {
  const { accomplished, position, index, children, transitionDuration = 300 } = props;
  const safePosition = getSafePercent(position);
  let style = {
    left: `${safePosition}%`,
    transitionDuration: `${transitionDuration}ms`,
  };
  return (
    <li className="RSPBstep" style={style}>
      {children({
        accomplished,
        position: safePosition,
        index,
      })}
    </li>
  );
};

const ProgressIndicator = ({ children, ...props }: ProgressBarProps) => {
  const {
    percent,
    stepPositions = [],
    unfilledBackground = null,
    filledBackground = null,
    width = null,
    height = null,
    hasStepZero = true,
    transitions,
  } = props;

  const getStepPosition = (steps, stepIndex, hasStepZero) => {
    if (hasStepZero) {
      return (100 / (steps - 1)) * stepIndex;
    }
    return (100 / steps) * (stepIndex + 1);
  };
  const safePercent = getSafePercent(percent);
  return (
    <ul className="RSPBprogressBar" style={{ background: unfilledBackground, width, height }}>
      {/* Here we're looping over the children to clone them and add them custom props */}
      {React.Children.map(children, (step, index) => {
        const position = stepPositions.length > 0
          ? stepPositions[index]
          : getStepPosition(React.Children.count(children), index, hasStepZero);

        return React.cloneElement(step, {
          accomplished: position <= safePercent,
          position,
          index,
          transitions,
        });
      })}
      <div
        className="RSPBprogression"
        style={{
          background: filledBackground,
          width: `${safePercent}%`,
        }}
      />
    </ul>
  );
};

ProgressIndicator.Step = Step;

ProgressIndicator.defaultProps = {};

export default styled(ProgressIndicator)`
  ${styles};
`;

export { ProgressIndicator as ProgressIndicatorVanilla };
