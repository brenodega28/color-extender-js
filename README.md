# Color Extender JS

Color Extender is a lib for generating a gradient of lighter colors based on one hex. I noticed i needed it a lot of times and couldn't find any lib that did this simple task :0.

OBS: I do not have knowledge of colors and their theory, i only needed this simple example.

## How to use

```js
import {
  generateFixedColorGradient,
  generateRandomColorGradient,
} from "color-extender-js";

const crimson = "#dc143c";

const fixedGradient = generateFixedColorGradient(crimson); // Always yields the same results

const randomGradient = generateRandomColorGradient(crimson); // Yields different values based on Math.Random(). The greater the index, lighter the color, but always in different steps
```