/**
 * For http://jenkins.itg.it.org.test/
 */
import { createElement } from '@/utils/dom';
import { copyText } from '@/utils/clipboard';
import { throttle } from 'lodash-es';
import './index.scss';

/** 从jenkins构建日志中解析镜像链接 */
const parseDockerLink = (logText: string) => {
  return logText.match(/(?:imageName|image_name_date) *= *(itg-dtc-docker\.pkg\.coding\.net\/.*\d+|docker-registry\.itg\.com\.cn\/.*\d+)\n?/)?.[1];
};

/** 控制台页面添加复制链接按钮 */
const addCopyLink = () => {
  const interval = setInterval(() => {
    if (!document.getElementsByClassName('console-output')) {
      return;
    }
    const consoleOutput = document.getElementsByClassName('console-output')[0].textContent || '';
    const dockerLink = parseDockerLink(consoleOutput);
    if (dockerLink && document.getElementById('main-panel')) {
      clearInterval(interval);
      let buttonTimeout: NodeJS.Timeout;
      const copyButton = createElement('<button class="iew-jenkins-copy-docker">复制docker链接</button>') as HTMLButtonElement;
      document.getElementById('main-panel')!.prepend(copyButton);
      copyButton.addEventListener('click', (event) => {
        const target = event.target as HTMLButtonElement;
        copyText(dockerLink).then(() => {
          clearTimeout(buttonTimeout);
          target.innerText = '复制成功！';
        }).catch((error) => {
          target.innerHTML = '复制失败';
          console.error(error);
        }).finally(() => {
          buttonTimeout = setTimeout(() => {
            target.innerText = '复制docker链接';
          }, 3000);
        });
      });
    }
  }, 500);
};

/** 搜索框热搜索功能 */
const hotSearch = () => {
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
  }, 300);
};

const addAccessKey = () => {
  window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'g') {
      e.preventDefault();
      (document.getElementById('search-box') as HTMLInputElement).focus();
    }
  });
};

/** 读取构建的镜像链接 */
const latestImageLink = () => {
  const interval = setInterval(() => {
    const mainPanel = document.getElementById('main-panel');
    if (mainPanel) {
      clearInterval(interval);
      let fetchUrl: string;
      let headText: string;
      if (document.querySelector('table.pane.jenkins-pane.stripped')) {
        // item详情页
        fetchUrl = `${location.pathname}lastBuild/logText/progressiveHtml`;
        headText = '最近一次构建的镜像链接';
      } else {
        // 构建信息页
        fetchUrl = `${location.pathname}logText/progressiveHtml`;
        headText = '镜像链接';
      }
      fetch(fetchUrl)
        .then((response) => response.text())
        .then((logText) => {
          const dockerLink = parseDockerLink(logText);
          if (dockerLink) {
            let buttonTimeout: NodeJS.Timeout;
            const anchorText = `${dockerLink}（点击复制）`;
            const dockerLinkAnchor = createElement(`<a class="iew-jenkins-copylink">${anchorText}</a>`);
            dockerLinkAnchor.addEventListener('click', () => {
              copyText(dockerLink).then(() => {
                clearTimeout(buttonTimeout);
                dockerLinkAnchor.innerText = `${dockerLink}（复制成功）`;
              }).catch((error) => {
                clearTimeout(buttonTimeout);
                dockerLinkAnchor.innerText = `${dockerLink}（复制失败：${error}）`;
              }).finally(() => {
                buttonTimeout = setTimeout(() => {
                  dockerLinkAnchor.innerText = anchorText;
                }, 3000);
              });
            });
            mainPanel.append(createElement(`<h2>${headText}</h2>`), dockerLinkAnchor);
          }
        });
    }
  }, 300);
};

const jenkins = () => {
  if (location.pathname.includes('/console')) {
    // 控制台
    addCopyLink();
  } else if (location.pathname.includes('/job/')) {
    // item页
    latestImageLink();
  } else if (location.pathname === '/' || location.pathname.includes('/view/')) {
    // 列表页
    hotSearch();
    addAccessKey();
  }
};

export default jenkins;
