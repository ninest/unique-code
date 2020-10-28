declare global {
  interface Window {
    clipboardData: any;
  }
}

export const copyToClipboard = (text: string) => {
  /* 
  Use native clipboard, then textarea copy.
  
  Fallback to showing text in prompt
  */

  if (window.clipboardData && window.clipboardData.SetData)
    return window.clipboardData.setData('Text', text);
  else if (
    document.queryCommandSupported &&
    document.queryCommandSupported('copy')
  ) {
    const textarea = document.createElement('textarea');
    textarea.textContent = text;
    textarea.style.position = 'fixed';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      return document.execCommand('copy');
    } catch (ex) {
      console.warn('Copy to clipboard failed.', ex);
      fallbackCopyToClipboard(text);
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  } else {
    fallbackCopyToClipboard(text);
  }
};

const fallbackCopyToClipboard = (text: string) => {
  window.prompt('Copy the text below:', text);
};
