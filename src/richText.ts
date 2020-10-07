import { unchangedTextChangeRange } from 'typescript';
import { plain, num } from './constants';

export interface Effect {
  name: string;
  fn: (text: string) => string;
}

export const effects: Effect[] = [
  {
    name: 'bold sans serif',
    fn: (text) => gen({ aValue: 120276, zeroValue: 120812, inputText: text })
  },
  {
    name: 'italic sans serif',
    fn: (text) => gen({ aValue: 120328, allowNumbers: false, inputText: text })
  }
];

const richTextEffects = {
  // sans serif
  'bold sans serif': (text: string) =>
    gen({ aValue: 120276, zeroValue: 120812, inputText: text }),

  'italic sans serif': (text: string) =>
    gen({ aValue: 120328, allowNumbers: false, inputText: text }),

  'italic-bold sans serif': (text: string) =>
    gen({ aValue: 119912, allowNumbers: false, inputText: text }),

  // serif
  'bold serif': (text: string) =>
    gen({ aValue: 119808, zeroValue: 120782, inputText: text }),
  'italic-bold serif': (text: string) =>
    gen({ aValue: 120172, allowNumbers: false, inputText: text }),

  // monospace
  typewriter: (text: string) =>
    gen({ aValue: 120432, zeroValue: 120822, inputText: text }),

  // fun
  circles: (text: string) =>
    gen({
      aValue: 9398,
      onlyUppercase: true, // lowercase circles are different sizes
      zeroValue: 9450,
      oneValue: 9312,
      inputText: text
    }),

  'dark circles': (text: string) =>
    gen({
      aValue: 127312,
      zeroValue: 9471,
      oneValue: 10102,
      onlyUppercase: true,
      inputText: text
    }),

  squares: (text: string) =>
    gen({
      aValue: 127280,
      onlyUppercase: true,
      allowNumbers: false,
      inputText: text
    }),

  'dark squares': (text: string) =>
    gen({
      aValue: 127344,
      onlyUppercase: true,
      allowNumbers: false,
      inputText: text
    }),

  // special
  double: (text: string) =>
    gen({
      aValue: 120120,
      zeroValue: 120792,
      inputText: text
    }),

  // cursive
  cursive: (text: string) =>
    gen({
      aValue: 119964,
      allowNumbers: false,
      inputText: text
    }),

  'bold cursive': (text: string) =>
    gen({
      aValue: 120016,
      allowNumbers: false,
      inputText: text
    })
};

/*
https://boldtext.io/
https://victoria.dev/blog/a-unicode-substitution-cipher-algorithm/
https://mothereff.in/html-entities
https://www.rapidtables.com/convert/number/hex-to-decimal.html
*/

interface params {
  aValue: number;
  onlyUppercase?: boolean;
  allowNumbers?: boolean;
  zeroValue?: number;
  oneValue?: number;
  inputText: string;
  strike?: boolean;
}

// set defaults
const gen = ({
  aValue,
  onlyUppercase = false,
  allowNumbers = true,
  zeroValue,
  oneValue,
  inputText,
  strike = false
}: params) => {
  // array will be converted to list then returned
  const converted: string[] = [];

  let text: string;

  if (onlyUppercase) text = inputText.toUpperCase();
  else text = inputText;

  const textArray: string[] = text.split('');
  textArray.forEach((char: string) => {
    let pos: number;
    let unicode: number;

    if (char.match(/[a-zA-Z]/)) {
      pos = plain.indexOf(char);
      unicode = aValue + pos;
    } else if (allowNumbers && char.match(/[0-9]/)) {
      pos = num.indexOf(char);

      // if there's a one value, it means there's a gap between the unicode for 0 and 1
      if (oneValue && Number(char) >= 1) unicode = oneValue + (pos - 1);
      else unicode = zeroValue + pos;
    }

    if (unicode !== undefined) {
      converted.push(`&#${unicode};`);
    } else {
      // insert same character if not a number of letter
      converted.push(char);
    }
    if (strike) converted.push('&#x336;');
  });

  return converted.join('');
};

const generateUniqueCode = (
  aValue: number,
  zeroValue: number,
  text: string,
  requiresUppercase: boolean = false
) => {
  const converted: string[] = [];
  if (requiresUppercase) text = text.toUpperCase();
  const textArray: string[] = text.split('');

  textArray.forEach((char: string) => {
    let pos: number;
    let unicode: number;

    // find if it's a letter or number
    if (char.match(/[a-zA-Z]/)) {
      pos = plain.indexOf(char);
      unicode = aValue + pos;
    } else if (zeroValue && char.match(/[0-9]/)) {
      // Not all fonts have characters for numbers
      pos = num.indexOf(char);
      unicode = zeroValue + pos;
    }

    if (unicode !== undefined) {
      converted.push(`&#${unicode};`);
    } else converted.push(char);
  });

  return converted.join('');
};
