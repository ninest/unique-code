import 'alpinejs';

import { placeholders } from './constants';
import { effects, Effect } from './richText';
import { copyToClipboard } from './clipboard';
import { canShare, shareText } from './share';

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
    showToast: false,
    canShare: true,

    pins: [],

    // --- lifecycle hook ---
    created(refs: any) {
      this.setPlaceholder(refs.input);
      this.canShare = canShare();
    },

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
  
      for (const effect of effects) {
        const result: Result = {
          effectName: effect.name,
          richText: effect.fn(text)
        };
        results.push(result);
      }

      this.results = results;
    },

    copy: async function (elem: HTMLElement) {
      const text: string = elem.innerText;
      copyToClipboard(text);

      this.showToast = true;

      await new Promise((resolve) => setTimeout(resolve, 2500));

      this.showToast = false;
    },
    share: async function (elem: HTMLElement) {
      const text: string = elem.innerText;
      await shareText(text);
    },

    pin: function (elem: any) {
      // Add effect to favorites, saved by local storage
      console.log(elem)
    }
  };
};
