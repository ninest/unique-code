import { plainAll } from '../constants';

export const upsidedownAll: string[] = "ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z0ƖᄅƐㄣϛ9ㄥ86¡,#$%⅋,)(*+'-˙/:;>=<¿@][^‾,}|{~".split(
  ''
);

export const genUpsidedown = (text: string, reverse: boolean = false) => {
  const converted: string[] = [];
  const textArray = text.split('');

  textArray.forEach((char) => {
    const pos = plainAll.indexOf(char);

    const unicode = upsidedownAll[pos];

    if (unicode !== undefined) converted.push(unicode);
    else converted.push(char);
  });
  console.log();
  return reverse ? converted.reverse().join('') : converted.join('');
};
