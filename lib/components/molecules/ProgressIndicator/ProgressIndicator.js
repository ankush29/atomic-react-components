// @flow
/**
 *
 * ProgressIndicator
 *
 */
import React from 'react';
import styled from 'styled-components';

import { Transition } from 'react-transition-group';
import styles from './ProgressIndicator.style';
import type { ProgressBarProps, StepProps } from './types';
import transitions from './ProgressIndicator.mock';

const getSafePercent = (percent) => {
  if (percent > 100 || percent < 0 || typeof percent !== 'number') {
    console.warn(
      `[react-step-progress-bar]: The value passed to percent or position needs to be a number between 0 and 100 (passed value: ${percent}).`,
    );
  }
  return Math.min(100, Math.max(percent, 0));
}

const Step = ({ ...props }: StepProps) => {
  const {
    accomplished,
    position,
    index,
    children,
    transition = null,
    transitionDuration = 300,
  } = props;
  debugger
  const safePosition = getSafePercent(position);
  let style = {
    left: `${safePosition}%`,
    transitionDuration: `${transitionDuration}ms`,
  };
  return (
    <Transition in={accomplished} timeout={transitionDuration}>
      {(state) => {
        if (transition) {
          style = {
            ...style,
            ...transitions[transition][state],
          };
        }

        return (
          <div className="RSPBstep" style={style}>
            {children({
              accomplished,
              position: safePosition,
              transitionState: state,
              index,
            })}
          </div>
        );
      }}
    </Transition>
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
    text = null,
  } = props;

  try {
    if (!(stepPositions.length > 0 && stepPositions.length !== React.Children.count(children))) {
      throw 'When specifying a stepPositions props, the number of children must match the length of the positions array.';
    }
  } catch (err) {
    console.log('err', err);
  }

  const getStepPosition = (steps, stepIndex, hasStepZero) => {
    if (hasStepZero) {
      return (100 / (steps - 1)) * stepIndex;
    }
    return (100 / steps) * (stepIndex + 1);
  };
  const safePercent = getSafePercent(percent);
  return (
    <div className="RSPBprogressBar" style={{ background: unfilledBackground, width, height }}>
      {/* Here we're looping over the children to clone them and add them custom props */}
      {React.Children.map(children, (step, index) => {
        const position = stepPositions.length > 0
          ? stepPositions[index]
          : getStepPosition(React.Children.count(children), index, hasStepZero);

        return React.cloneElement(step, {
          accomplished: position <= safePercent,
          position,
          index,
        });
      })}

      {text ? <div className="RSPBprogressBarText">{text}</div> : null}

      <div
        className="RSPBprogression"
        style={{
          background: filledBackground,
          width: `${safePercent}%`,
        }}
      />
    </div>
  );
};

ProgressIndicator.Step = Step;

ProgressIndicator.defaultProps = {};

export default styled(ProgressIndicator)`
  ${styles};
`;

export { ProgressIndicator as ProgressIndicatorVanilla };
