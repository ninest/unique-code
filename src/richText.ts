import { plain, num } from './constants';

export const richTextEffects = {
  // sans serif
  'bold sans serif': (text: string) => generateUniqueCode(120276, 120812, text),
  'italic sans serif': (text: string) => generateUniqueCode(120328, null, text),
  'italic-bold sans serif': (text: string) =>
    generateUniqueCode(119912, null, text),

  // serif
  'bold serif': (text: string) => generateUniqueCode(119808, 120782, text),
  'italic-bold serif': (text: string) => generateUniqueCode(119912, null, text),
  medieval: (text: string) => generateUniqueCode(120172, null, text),

  // monospace
  'typewriter':(text: string) => generateUniqueCode(120432, 120822, text),

  // fun
  circles: (text: string) => generateUniqueCode(9398, 9450, text),
  'dark circles': (text: string) => generateUniqueCode(127312, null, text, true),
  squares: (text: string) => generateUniqueCode(127280, null, text, true),
  'dark squares': (text: string) => generateUniqueCode(127344, null, text, true)
};

/*
https://boldtext.io/
https://victoria.dev/blog/a-unicode-substitution-cipher-algorithm/
https://mothereff.in/html-entities
https://www.rapidtables.com/convert/number/hex-to-decimal.html
*/

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

const hGenerateFancyFont = (aValue: number, text: string) => {
  // Create a variable to store our converted letters
  let converted = [];
  // Break string into substrings (letters)
  let arr = text.split('');
  // Search plain array for indexes of letters
  arr.forEach((element) => {
    let i = plain.indexOf(element);
    // If the letter isn't a letter (not found in the plain array)
    if (i == -1) {
      // Return as a whitespace
      converted.push(element);
    } else {
      // Get relevant character from fancy number + index
      let unicode = aValue + i;
      // Return as HTML code
      converted.push('&#' + unicode + ';');
    }
  });
  // Print the converted letters as a string
  return converted.join('');
};
