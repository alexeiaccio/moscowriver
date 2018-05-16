export const getSectorColor = key => {
  const colors = {
    10: 'green',
    20: 'violet',
    30: 'purple',
    40: 'pink',
    50: 'green',
    61: 'yellow',
    62: 'purple',
    70: 'violet',
    80: 'pink',
    90: 'purple',
    100: 'violet',
    110: 'yellow',
    120: 'green',
    130: 'yellow',
    140: 'violet',
    150: 'purple',
    161: 'yellow',
    162: 'pink',
    170: 'pink',
    181: 'green',
    182: 'purple',
    190: 'violet',
    200: 'yellow',
    220: 'purple',
    230: 'pink',
    240: 'yellow'
  }
  return colors[key]
}