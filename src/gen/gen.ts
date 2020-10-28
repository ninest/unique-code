import { plainAll } from '../constants';

export interface params {
  aValue: number; // unicode value of uppercase A
  onlyUppercase?: boolean; // does the font have only uppercase chars?
  allowNumbers?: boolean; // does the font support numbers
  zeroValue?: number; // unicode of zero (0) (only if allowNumbers)
  oneValue?: number; // unicode of one (1) may not be right after that of zero
  inputText: string;
  strike?: boolean; // strikethrough only involves adding another unicode after each caracter
}

// set defaults
export const gen = ({
  aValue,
  onlyUppercase = false,
  allowNumbers = true,
  zeroValue,
  oneValue,
  inputText
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
      pos = plainAll.indexOf(char);
      unicode = aValue + pos;
    } else if (allowNumbers && char.match(/[0-9]/)) {
      // negative index of "0" to get the offset correctly
      pos = plainAll.indexOf(char) - plainAll.indexOf('0');

      // if there's a one value, it means there's a gap between the unicode for 0 and 1
      if (oneValue && Number(char) >= 1) unicode = oneValue + (pos - 1);
      else unicode = zeroValue + pos;
    }

    if (unicode !== undefined) {
      const hex = unicode.toString(16);

      // generate HTML code/entity
      converted.push(`&#x${hex};`);
    } else {
      // insert same character if not a number of letter
      converted.push(char);
    }
  });

  return converted.join('');
};
