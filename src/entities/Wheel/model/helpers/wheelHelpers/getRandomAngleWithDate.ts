export function getRandomAngleWithDate() {
  const currentDate = new Date();
  const timestamp = currentDate.getTime();

  // Use timestamp to influence randomness
  const seededRandom = (Math.sin(timestamp) + 1) / 2; // Adjust the function as needed

  const angle = seededRandom * 360;

  return angle;
}
