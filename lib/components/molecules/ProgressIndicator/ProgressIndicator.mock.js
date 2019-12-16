
const defaultConfig = {
  transitions: {
    scale: {
      entering: { transform: 'translateX(-50%) scale(1.5)' },
      entered: { transform: 'translateX(-50%) scale(1)' },
      exiting: { transform: 'translateX(-50%) scale(1.5)' },
      exited: { transform: 'translateX(-50%) scale(1)' },
    },
  }
};

export default defaultConfig;
