/**
 * For http://oa.itg.cn/
 */

import { pasteText } from '@/utils/clipboard';

const oa = () => {
  if (!location.pathname.includes('/workflow/')) {
    return;
  }
  const interval = setInterval(() => {
    if (!$) {
      return;
    }
    clearInterval(interval);
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
      if (text.indexOf("\t") > -1 || text.indexOf("\n") > -1 && text.indexOf("\n") !== text.length - 1) {
        const data = text.split("\n").map((item) => item.split("\t"));
        const rowIndex = $(target).closest("tr").index();
        const colIndex = $(target).closest("td").index();
        data.forEach((rowValue, i) => {
          rowValue.forEach((colValue, j) => {
            $("#oTable0 tbody").children().eq(i + rowIndex).children().eq(j + colIndex).find("input").val(colValue);
          });
        });
      } else {
        $(target).val(text);
      }
    });
  }, 500);
};

export default oa;
