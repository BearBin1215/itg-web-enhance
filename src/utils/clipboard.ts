/** 复制文本进入剪贴板 */
const copyText = async (text = ''): Promise<void> => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
  } else {
    const input = document.createElement('input');
    input.style.position = 'fixed';
    input.style.top = '-10000px';
    input.style.zIndex = '-999';
    input.style.opacity = '0';
    document.body.appendChild(input);
    input.value = text;
    input.focus();
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
  }
};

/** 从剪贴板读取文本 */
const pasteText = async (): Promise<string> => {
  if (navigator.clipboard?.readText) {
    return await navigator.clipboard.readText();
  }

  return new Promise((resolve) => {
    const pasteArea = document.createElement('textarea');
    document.body.appendChild(pasteArea);
    pasteArea.style.position = 'absolute';
    pasteArea.style.top = '0';
    pasteArea.style.zIndex = '-999';
    pasteArea.focus();
    setTimeout(() => {
      const text = pasteArea.value;
      resolve(text.trim());
      document.body.removeChild(pasteArea);
    }, 0);
  });
};

export { copyText, pasteText };
