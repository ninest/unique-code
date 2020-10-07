import { plain, num } from '../constants';

export interface params {
  aValue: number;
  onlyUppercase?: boolean;
  allowNumbers?: boolean;
  zeroValue?: number;
  oneValue?: number;
  inputText: string;
  strike?: boolean;
}

// set defaults
export const gen = ({
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
