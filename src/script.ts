import 'alpinejs';

import { placeholders } from './constants';
import { richTextEffects } from './richText';
import { copyToClipboard } from './clipboard';

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
    results: [],

    // --- methods ---
    setPlaceholder: function (elem: HTMLElement) {
      const randomPlaceholder: string =
        placeholders[Math.floor(Math.random() * placeholders.length)];
      elem.setAttribute('placeholder', randomPlaceholder);

      this.textInput = randomPlaceholder;
      this.generateFancyText();
    },

    generateFancyText: function () {
      // remove HTML tags
      const text: string = this.textInput.replace(/<[^>]*>/g, ' ');

      const results: Result[] = [];
      for (const fnName of Object.keys(richTextEffects)) {
        const result: Result = {
          effectName: fnName,
          richText: richTextEffects[fnName](text)
        };
        results.push(result);
      }

      this.results = results;
    },

    copy: function (elem: HTMLElement) {
      const text: string = elem.innerText;
      copyToClipboard(text);
    }
  };
};
