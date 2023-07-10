/**
 * Determines if a given color is dark or light.
 *
 * @param {string} color - A string representation of a hex color.
 * @return {boolean} - True if the color is dark, false otherwise.
 */
export function isColorDark(color) {
  // Convert hex color string to RGB values
  const r = parseInt(color.substring(1, 3), 16);
  const g = parseInt(color.substring(3, 5), 16);
  const b = parseInt(color.substring(5, 7), 16);

  // Calculate the perceived brightness using the luminance formula
  const perceivedBrightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return perceivedBrightness < 0.5;
}
