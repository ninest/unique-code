import 'alpinejs';

import { placeholders } from './constants';
import { richTextEffects } from './richText';

declare global {
  interface Window {
    state: any;
  }
}

interface Result {
  effectName: string;
  richText: string;
}

window.state = function () {
  return {
    // --- data ---
    textInput: '',
    results: [
      
    ],

    // --- methods ---
    setPlaceholder: function (elem: HTMLElement) {
      const randomPlaceholder: string =
        placeholders[Math.floor(Math.random() * placeholders.length)];
      elem.setAttribute('placeholder', randomPlaceholder);

      this.textInput = randomPlaceholder
      this.generateFancyText()
    },

    generateFancyText: function () {
      const results: Result[] = [];
      for (const fnName of Object.keys(richTextEffects)) {
        console.log(fnName);
        const result: Result = {
          effectName: fnName,
          richText: richTextEffects[fnName](this.textInput)
        };
        results.push(result);
      }

      console.log(results);
      this.results = JSON.parse(JSON.stringify(results)) ;
      console.log(this.results);
    },

    copy: function (text: string) {
      console.log(`Copying "${text}"`);
    }
  };
};
