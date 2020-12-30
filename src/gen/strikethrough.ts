export const genStrikethrough = (text: string) => {
  const converted: string[] = [];
  const textArray: string[] = text.split('');

  textArray.forEach((char) => {
    converted.push(char);
    converted.push('&#x336;');
  });

  return converted.join('');
};

export const genRedacted = (text: string) => {
  const redactChar = '&#x2588;';
  // replace all letter and numbers
  // TODO: also replace special characters
  // const charactersRE = new Ref
  return text.replace(/[(a-zA-Z0-9)|($&+,:;=?@#|'<>.^*()/-{}%!-)]/g, '&#x2588;');
};
