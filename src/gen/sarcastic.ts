export const genSarcastic = (text: string) => {
  const converted: string[] = [];
  const textArray: string[] = text.split('');

  textArray.forEach((char) => {
    converted.push(
      Math.random() > 0.5 ? char.toLowerCase() : char.toUpperCase()
    );
  });

  return converted.join('');
};
