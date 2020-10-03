import 'alpinejs';

window.state = function () {
  return {
    // --- data ---
    textInput: 'test',
    results: [],

    // --- methods ---
    setPlaceholder: function (elem) {
      console.log(elem)
    },

    generateFancyText: function () {}
  };
};
