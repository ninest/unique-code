
// sans serif
  'bold sans serif': (text: string) => generateUniqueCode(120276, 120812, text),
  'italic sans serif': (text: string) => generateUniqueCode(120328, null, text),
  'italic-bold sans serif': (text: string) =>
    generateUniqueCode(119912, null, text),

  // serif
  'bold serif': (text: string) => generateUniqueCode(119808, 120782, text),
  'italic-bold serif': (text: string) => generateUniqueCode(119912, null, text),
  medieval: (text: string) => generateUniqueCode(120172, null, text),

  // monospace
  typewriter: (text: string) => generateUniqueCode(120432, 120822, text),

  // fun
  circles: (text: string) => generateUniqueCode(9398, 9450, text),
  'dark circles': (text: string) =>
    generateUniqueCode(127312, null, text, true),
  squares: (text: string) => generateUniqueCode(127280, null, text, true),
  'dark squares': (text: string) => generateUniqueCode(127344, null, text, true)