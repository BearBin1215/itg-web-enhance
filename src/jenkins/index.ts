/**
 * For http://jenkins.itg.it.org.test/
 */
import { createElement } from '@/utils/dom';
import { copyText } from '@/utils/clipboard';
import { throttle } from 'lodash-es';
import './index.scss';

const jenkins = () => {
  if (location.pathname.includes('/console')) {
    const interval = setInterval(() => {
      if (!document.getElementsByClassName('console-output')) {
        return;
      }
      const consoleOutput = document.getElementsByClassName('console-output')[0].textContent || '';
      const dockerLink = consoleOutput.match(/imageName *= *(itg-dtc-docker\.pkg\.coding\.net\/.*\d+)\n/)?.[1];
      if (dockerLink && document.getElementById('main-panel')) {
        clearInterval(interval);
        let buttonTimeout: NodeJS.Timeout;
        const copyButton = createElement('<button class="itg-web-enhancer-copy-docker">复制docker链接</button>') as HTMLButtonElement;
        document.getElementById('main-panel')!.prepend(copyButton);
        copyButton.addEventListener('click', (event) => {
          const target = event.target as HTMLButtonElement;
          const restoreText = () => {
            target.innerText = '复制docker链接';
          };
          copyText(dockerLink).then(() => {
            clearTimeout(buttonTimeout);
            target.innerText = '复制成功！';
            buttonTimeout = setTimeout(restoreText, 3000);
          }).catch((error) => {
            target.innerHTML = '复制失败';
            console.error(error);
            buttonTimeout = setTimeout(restoreText, 3000);
          });
        });
      }
    }, 500);
  } else if (location.pathname === '/' || location.pathname.includes('/view/')) {
    // 热搜索功能
    const interval = setInterval(() => {
      const searchBox = document.getElementById('search-box');
      if (searchBox) {
        clearInterval(interval);
        const projectStatus = document.getElementById('projectstatus') || document.getElementById('projectStatus');
        if (!projectStatus) {
          return;
        }
        (document.getElementById('search-box') as HTMLInputElement).addEventListener('input', throttle((event) => {
          const target = event.target as HTMLInputElement;
          const { value } = target;
          projectStatus.querySelectorAll('tbody>tr:has(.model-link)').forEach((jobItem) => {
            if (!jobItem.querySelector('a.model-link[href*="job/"]')?.textContent?.includes(value)) {
              (jobItem as HTMLTableRowElement).style.display = 'none';
            } else {
              (jobItem as HTMLTableRowElement).style.display = '';
            }
          });
        }, 250));
      }
    }, 500);
  }
};

export default jenkins;
