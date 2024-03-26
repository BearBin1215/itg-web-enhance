/**
 * For https://docker.itg.com.cn/
 */
import { createElement } from '@/utils/dom';
import createModal from '@/utils/modal';
import './index.scss';

const rancher = () => {
  document.body.classList.add('iew-rancher');
  /** 快速搜索面板 */
  const quickSearchPanel = createElement('<div id="iew-rancher-search-panel"></div>');
  /** 快速搜索按钮区 */
  const quickSearchButtonZone = createElement('<div id="iew-rancher-search-buttons"></div>');

  /** 将表格数据去除全空元素后存储到本地 */
  const saveLocalSetting = (inputData: string[][]) => {
    localStorage.setItem(
      'iew-rancher-buttons-setting',
      JSON.stringify(inputData.filter(([buttonText, searchText]) => {
        return buttonText.trim() || searchText.trim();
      })),
    );
  };

  /** 读取本地存储配置并校验有效性 */
  const readLocalSetting = (): string[][] | null => {
    const storagedSetting = localStorage.getItem('iew-rancher-buttons-setting');
    if (storagedSetting) {
      try {
        const storagedSettingData = JSON.parse(storagedSetting);
        if (
          Array.isArray(storagedSettingData)
          && storagedSettingData.every((item) =>
            Array.isArray(item)
            && item.every((elem) => typeof elem === 'string'),
          )
        ) {
          return storagedSettingData;
        }
      } catch { }
    }
    return null;
  };

  /** 根据配置创建按钮 */
  const createSearchButtons = (data: string[][]) => {
    return data
      .filter(([buttonText, searchText]) => buttonText.trim() && searchText.trim())
      .map(([buttonText, searchText]) => {
        const searchInput = document.querySelector('.search-group>input[type="search"]') as HTMLInputElement;
        const searchButton = createElement(`<a class="btn btn-sm bg-primary">${buttonText}</a>`) as HTMLAnchorElement;
        searchButton.addEventListener('click', () => {
          searchInput.value = searchText;
          searchInput.focus();
          searchInput.blur();
        });
        return searchButton;
      });
  };

  /** 更新按钮区内容 */
  const updateButtons = (settingData: string[][]) => {
    quickSearchButtonZone.innerHTML = '';
    if (settingData) {
      quickSearchButtonZone.append(...createSearchButtons(settingData));
    }
  };

  /** 添加“速搜设置”按钮 */
  const createSettingButton = () => {
    const settingTable = createElement(`<table id="iwe-rancher-settingtable">
      <thead>
      <tr>
      <th>按钮文本</th>
      <th>搜索文字</th>
      <th class="add-row"><div class="add-row-button" title="新增一行"></div></th>
      </tr>
      </thead>
      </table>`) as HTMLTableElement;
    const settingTbody = document.createElement('tbody');

    /** 表格添加一行 */
    const addRow = () => {
      const newRow = createElement(`<tr>
        <td class="iew-rancher-buttontext"><input name="buttonText" /></td>
        <td class="iew-rancher-searchtext"><input name="searchText" /></td>
        <td class="remove-row"><div class="remove-row-button" title="删除本行"></div></td>
        </tr>`);
      // 点击删除按钮去掉本行
      newRow.querySelector('.remove-row-button')!.addEventListener('click', () => newRow.remove());
      settingTbody.appendChild(newRow);
      return newRow;
    };

    settingTable.querySelector('.add-row-button')!.addEventListener('click', addRow);
    settingTable.appendChild(settingTbody);

    /** 读取表格数据 */
    const getInputData = () => {
      return [...settingTbody.children].map((row) => {
        return [...row.querySelectorAll('input')].map((input) => input.value);
      });
    };

    /** 将数据载入表格 */
    const setInputData = (data: string[][]) => {
      settingTbody.innerHTML = '';
      for (const rowData of data) {
        const newRow = addRow();
        newRow.querySelectorAll('input').forEach((input, index) => {
          input.value = rowData[index];
        });
      }
    };

    const settingButton = createElement('<button id="iew-rancher-search-setting" class="btn btn-sm bg-default" type="button">速搜设置</button>') as HTMLButtonElement;
    const settingModal = createModal({
      title: '快速搜索设置',
      content: settingTable,
      footer: ['confirm', 'cancel'],
      size: 'medium',
      onConfirm: () => {
        // 点击确定按钮，读取表格内容，存储到localStorage，更新按钮
        const inputData = getInputData();
        saveLocalSetting(inputData);
        updateButtons(inputData);
        settingModal.close();
      },
    });
    settingButton.addEventListener('click', () => {
      // 清空表格内容
      settingTbody.innerHTML = '';
      // 读取存储数据，如果没读取到或内容为空则初始化设为一行，不为空则载入表格
      const storagedSetting = readLocalSetting();
      if (storagedSetting?.length) {
        setInputData(storagedSetting);
      } else {
        addRow();
      }
      settingModal.open();
    });
    return settingButton;
  };

  /** 搜索设置按钮 */
  const settingButton = createSettingButton();

  /** 初始化快速搜索面板 */
  const initialPanel = () => {
    const actionsHeader = document.querySelector('.fixed-header-actions.row.clearfix');
    if (actionsHeader && !document.getElementById('iew-rancher-search-panel') && !document.getElementById('iew-rancher-search-setting')) {
      updateButtons(readLocalSetting() || []);
      quickSearchPanel.append(quickSearchButtonZone, settingButton);
      actionsHeader.append(quickSearchPanel);
    }
  };

  const interval = setInterval(() => {
    // 持续检测页面直到负载列表加载出来
    if (document.querySelector('section.instances')) {
      initialPanel();
      clearInterval(interval);
    }
  }, 500);

  document.body.addEventListener('click', initialPanel);
};

export default rancher;
