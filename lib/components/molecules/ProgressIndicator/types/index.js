// @flow
import type { Node } from 'react';

export type ProgressBarProps = {
  percent: number,
  children: Node,
  stepPositions?: Array<number>,
  unfilledBackground?: string,
  filledBackground?: string,
  width?: number,
  height?: number,
  hasStepZero?: boolean,
  text?: string,
};

export type StepProps = {
  accomplished: boolean,
  position: number,
  index: number,
  children: ({
    accomplished: boolean,
    transitionState: string,
    index: number,
    position: number,
  }) => React.Node,
  transition?: 'scale' | 'rotate' | 'skew',
  transitionDuration?: number,
};
