export function increment(personality, points) {
  return {
    type: 'INCREMENT_SCORE',
    personality,
    points
  };
}

export function decrement(personality, points) {
  return {
    type: 'DECREMENT_SCORE',
    points
  };
}
