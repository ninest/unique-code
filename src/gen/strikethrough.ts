export const genStrikethrough = (text: string) => {
  const converted: string[] = [];
  const textArray: string[] = text.split('');

  textArray.forEach((char) => {
    converted.push(char);
    converted.push('&#x336;')
  });

  return converted.join('');
};


export const genRedacted = (text: string) => {
  // replace everything except for spaces with redact character
  return text.replace(/[^ ]/g, "&#x2588;")
}