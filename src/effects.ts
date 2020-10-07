import { gen } from './gen/gen';
import { genUpsidedown } from './gen/upsidedown';

export interface Effect {
  name: string;
  fn: (text: string) => string;
}

export const effects: Effect[] = [
  // {
  //   name: 'upside down',
  //   fn: (text) => genUpsidedown(text)
  // },
  {
    name: 'upside down',
    fn: (text) => genUpsidedown(text, true)
  },

  // sans serif
  {
    name: 'bold sans serif',
    fn: (text) => gen({ aValue: 120276, zeroValue: 120812, inputText: text })
  },
  {
    name: 'italic sans serif',
    fn: (text) => gen({ aValue: 120328, allowNumbers: false, inputText: text })
  },
  {
    name: 'italic-bold sans serif',
    fn: (text: string) =>
      gen({ aValue: 119912, allowNumbers: false, inputText: text })
  },

  // serif
  {
    name: 'bold serif',
    fn: (text: string) =>
      gen({ aValue: 119808, zeroValue: 120782, inputText: text })
  },
  {
    name: 'italic-bold serif',
    fn: (text: string) =>
      gen({ aValue: 120172, allowNumbers: false, inputText: text })
  },

  // monospace
  {
    name: 'typewriter',
    fn: (text: string) =>
      gen({ aValue: 120432, zeroValue: 120822, inputText: text })
  },

  // fun
  {
    name: 'circles',
    fn: (text: string) =>
      gen({
        aValue: 9398,
        onlyUppercase: true, // lowercase circles are different sizes
        zeroValue: 9450,
        oneValue: 9312,
        inputText: text
      })
  },
  {
    name: 'dark circles',
    fn: (text: string) =>
      gen({
        aValue: 127312,
        zeroValue: 9471,
        oneValue: 10102,
        onlyUppercase: true,
        inputText: text
      })
  },
  {
    name: 'squares',
    fn: (text: string) =>
      gen({
        aValue: 127280,
        onlyUppercase: true,
        allowNumbers: false,
        inputText: text
      })
  },
  {
    name: 'dark squares',
    fn: (text: string) =>
      gen({
        aValue: 127344,
        onlyUppercase: true,
        allowNumbers: false,
        inputText: text
      })
  },

  // special
  {
    name: 'double',
    fn: (text: string) =>
      gen({
        aValue: 120120,
        zeroValue: 120792,
        inputText: text
      })
  },

  // cursive
  {
    name: 'cursive',
    fn: (text: string) =>
      gen({
        aValue: 119964,
        allowNumbers: false,
        inputText: text
      })
  },
  {
    name: 'bold cursive',
    fn: (text: string) =>
      gen({
        aValue: 120016,
        allowNumbers: false,
        inputText: text
      })
  }
];

/*
https://boldtext.io/
https://victoria.dev/blog/a-unicode-substitution-cipher-algorithm/
https://mothereff.in/html-entities
https://www.rapidtables.com/convert/number/hex-to-decimal.html
*/
