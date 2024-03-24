/**
 * For http://oa.itg.cn/
 */

import { pasteText } from '@/utils/clipboard';

const oa = () => {
  document.body.addEventListener('paste', async (event) => {
    const target = event.target as EventTarget & HTMLInputElement;
    if (!target) {
      return;
    }
    const el = target.closest('#oTable0 tbody input.wf-input');
    if (!el) {
      return;
    }
    const text = await pasteText();
    if (text.indexOf('\t') > -1 || text.indexOf('\n') > -1 && text.indexOf('\n') !== text.length - 1) {
      const data = text.split('\n').map((item) => item.split('\t'));
      const row = target.closest('tr')!;
      const col = target.closest('td')!;
      const rowIndex = [...row.parentNode!.children].indexOf(row);
      const colIndex = [...col.parentNode!.children].indexOf(col);
      data.forEach((rowValue, i) => {
        rowValue.forEach((colValue, j) => {
          (document.querySelector('#oTable0 tbody')!
            .children[i + rowIndex]
            .children[j + colIndex]
            .querySelector(`:scope input`)! as HTMLInputElement
          ).value = colValue;
        });
      });
    } else {
      target.value = text;
    }
  });
};

export default oa;
