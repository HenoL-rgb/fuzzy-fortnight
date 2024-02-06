export const REELS = 5;
export const SYMBOLS = 3;
export const REELS_REPEAT = 10;
export const REELS_SYMBOLS = [
  'BCDGLMSXDCLLDDCLGLBL',
  'CCXBDLGLLDDMS7X7DBLC',
  'LDBCCLGLMSC77XDLLGLD',
  'MS77MXDBLGLDCLCMGLCL',
  'GLDMS77GXDBLCCXDLDLL',
];
export const LINES = [
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0], //top line
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
    [3, 1],
    [4, 1], //middle line
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
    [3, 2],
    [4, 2], //bottom line
  ],
  [
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 1],
    [4, 0], // V from top left
  ],
  [
    [0, 2],
    [1, 1],
    [2, 0],
    [3, 1],
    [4, 2], // V from bottom left
  ],
  [
    [0, 0],
    [1, 2],
    [2, 0],
    [3, 2],
    [4, 0], // W from top left
  ],
  [
    [0, 2],
    [1, 0],
    [2, 2],
    [3, 0],
    [4, 2], // M from bottom left
  ],
  [
    [0, 1],
    [1, 0],
    [2, 1],
    [3, 0],
    [4, 1], // M on top half
  ],
  [
    [0, 0],
    [1, 1],
    [2, 0],
    [3, 1],
    [4, 0], // W on top half
  ],
  [
    [0, 1],
    [1, 2],
    [2, 1],
    [3, 2],
    [4, 1], // W on bottom half
  ],
  [
    [0, 2],
    [1, 1],
    [2, 2],
    [3, 1],
    [4, 2], // M on bottom half
  ],
  [
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 1],
    [4, 0], // U on top half
  ],
  [
    [0, 1],
    [1, 2],
    [2, 2],
    [3, 2],
    [4, 1], // U on bottom half
  ],
  [
    [0, 2],
    [1, 1],
    [2, 1],
    [3, 1],
    [4, 2], // inverse U on bottom half
  ],
  [
    [0, 1],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 1], // inverse U on top half
  ],
  [
    [0, 0],
    [1, 0],
    [2, 1],
    [3, 2],
    [4, 2], // Z from top left
  ],
  [
    [0, 2],
    [1, 2],
    [2, 1],
    [3, 0],
    [4, 0], // Z from bottom left
  ],
];
