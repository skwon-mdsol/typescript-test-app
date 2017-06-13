export type INCREMENT_COUNTER = 'INCREMENT_COUNTER';

export const INCREMENT_COUNTER: INCREMENT_COUNTER = 'INCREMENT_COUNTER';

export type IncrementCounterAction = {
  type: INCREMENT_COUNTER,
  by: number
};

export type DefaultAction = {
  type: ''
};

