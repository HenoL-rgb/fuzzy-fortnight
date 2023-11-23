export function calculateReturnValue(value: number) {
  'worklet';
  const remainder = value % 360;

  // Calculate the amount to add or subtract to make it divisible by 360
  const amount = (360 - remainder) % 360;

  // If inputNumber is already divisible by 360, return 0
  // Otherwise, return the amount to add or subtract
  return value + (remainder === 0 ? 0 : amount);
}
