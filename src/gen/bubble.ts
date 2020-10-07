import { plainAll } from '../constants';

export const bubbleAll: string[] = 'ᗩᗷᑕᗪEᖴGᕼIᒍKᒪᗰᑎOᑭᑫᖇᔕTᑌᐯᗯ᙭Yᘔ'.split(
  ''
);

export const genBubble = (text: string) => {
  // only uppercase characters can be removed, so map accordingly
  const converted: string[] = [];
  const textArray = text.toUpperCase().split('');

  textArray.forEach((char) => {
    const pos = plainAll.indexOf(char);

    const unicode = bubbleAll[pos];

    if (unicode !== undefined) converted.push(unicode);
    else converted.push(char);
  });
  console.log();
  return converted.join('');
};
