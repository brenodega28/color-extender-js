const { hexToRgb, rgbToHex, getRandomInt } = require("./utils");

function generateDifferentColor(rgb, step) {
  return {
    r: Math.min(Math.max(rgb.r - step, 0), 255),
    g: Math.min(Math.max(rgb.g - step, 0), 255),
    b: Math.min(Math.max(rgb.b - step, 0), 255),
  };
}

function generateFixedColorGradient(hex, step = 10) {
  const rgb = hexToRgb(hex);

  return (values = new Array(5)
    .fill(0)
    .map((_, index) => generateDifferentColor(rgb, index * -1 * step))
    .map((c) => rgbToHex(c.r, c.g, c.b)));
}

function generateRandomColorGradient(hex) {
  const rgb = hexToRgb(hex);
  let step = 0;

  return (values = new Array(5)
    .fill(0)
    .map((_, index) => {
      step += getRandomInt(0, 10);
      return generateDifferentColor(rgb, index * -1 * step);
    })
    .map((c) => rgbToHex(c.r, c.g, c.b)));
}

module.exports = { generateRandomColorGradient, generateFixedColorGradient };
