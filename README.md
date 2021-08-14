# 🅄🄽🄸🅀🄴 🄲🄾🄳🄴

> **Fancy plain text**

## 🦋 Demo

[uniquecode.now.sh](https://uniquecode.now.sh/)

## Examples

- Bold sans-serif: 𝗧𝗵𝗶𝘀 𝘁𝗲𝘅𝘁 𝗶𝘀 𝗳𝗮𝗻𝗰𝘆
- Italics serif: 𝑻𝒉𝒊𝒔 𝒕𝒆𝒙𝒕 𝒊𝒔 𝒇𝒂𝒏𝒄𝒚
- Light cirlces: ⓉⒽⒾⓈ ⓉⒺⓍⓉ ⒾⓈ ⒻⒶⓃⒸⓎ
- Dark squares: 🆃🅷🅸🆂 🆃🅴🆇🆃 🅸🆂 🅵🅰🅽🅲🆈

All of these characters are plain text, so they can be pasted anywhere.

## ⚙Build setup

```
yarn
yarn dev
```

### Hosting

Vercel is used to host the site:

```bash
# host site for dev
vercel

# host site for production
vercel --prod
```

### Formatting
Prettier is used to format on save.

```json
// recommended VS code setting
{
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

### Icons

#### iOS splash screens

```bash
pwa-asset-generator ./assets/web-icon.svg ./assets/ios-splash --splash-only --background "#F3F4F6"
```

#### iOS icons, Android icons, favicons

```bash
pwa-asset-generator ./assets/web-icon.svg ./assets/icons --icon-only --maskable --opaque false --favicon --padding "25%"

pwa-asset-generator ./assets/web-icon.svg ./assets/icons --icon-only --maskable --opaque true --padding "25%"
```

## Accessibility 

The use of these "unicode fonts" may impede accessibility. Screen readers can read "𝗛" as "mathematical character bold H" rather than "H". Read [Can screen readers interpret Unicode styles fonts such as bold and italics?](https://ux.stackexchange.com/questions/118149/can-screen-readers-interpret-unicode-styles-fonts-such-as-bold-and-italics)

Please only use this on messages to friends! Do not put this text on your website!

## 📜 License

MIT

## 😊 Useful websites

Thank you to these sites for help making _Unique Code_:

- https://victoria.dev/blog/a-unicode-substitution-cipher-algorithm/
- https://mothereff.in/html-entities
- https://www.rapidtables.com/convert/number/hex-to-decimal.html
- https://boldtext.io/
