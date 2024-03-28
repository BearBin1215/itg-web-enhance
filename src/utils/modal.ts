import { createElement } from '@/utils/dom';

interface ModalProps {
  /** 弹窗标题 */
  title: string | Element;

  /** 弹窗内容 */
  content: string | Node | (string | Node)[];

  /**
   * 弹窗底部内容
   *
   * 可直接设置confirm和cancel快速配置按钮
   */
  footer?: string | Node | ('confirm' | 'cancel')[];

  /** 弹窗大小 */
  size?: 'small' | 'medium' | 'large' | 'larger';

  /** 点击确定回调，默认为关闭弹窗 */
  onConfirm?: (() => Promise<void>) | (() => void);

  /** 点击取消回调，默认为关闭弹窗 */
  onCancel?: (() => Promise<void>) | (() => void);
}

/** 创建弹窗对象 */
const createModal = ({ title, content, footer, size = 'medium', onConfirm, onCancel }: ModalProps) => {
  /** 弹窗元素 */
  const modal = createElement(`<div class="iwe-modal iwe-modal-${size}"></div>`) as HTMLDivElement;

  /** 关闭按钮 */
  const closeButton = createElement(`<div class="iwe-modal-close">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <line x1="18" y1="6" x2="6" y2="18"></line>
  <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg></div>`) as HTMLDivElement;

  /** 弹窗标题部分 */
  const modalHeader = createElement('<header class="iwe-modal-header"></header>');

  /** 弹窗内容部分 */
  const modalContent = createElement('<div class="iwe-modal-content"></div>') as HTMLDivElement;

  /** 弹窗底部部分 */
  const modalFooter = createElement('<div class="iwe-modal-footer"></div>') as HTMLDivElement;

  /** 确定按钮 */
  const confirmButton = createElement('<button class="iwe-modal-button iwe-modal-button-confirm">确定</button>') as HTMLButtonElement;

  /** 取消按钮 */
  const cancelButton = createElement('<button class="iwe-modal-button iwe-modal-button-cancel">取消</button>') as HTMLButtonElement;

  // 检测是否已存在页面弹窗容器，已存在则放入，不存在则创建后放入
  let modalWrapper = document.getElementById('iwe-modal-wrapper') as HTMLDivElement | null;

  modalHeader.append(title);
  if (Array.isArray(content)) {
    modalContent.append(...content);
  } else {
    modalContent.append(content);
  }
  modal.append(closeButton, modalHeader, modalContent);

  // 根据是否传入footer决定是否加入对应元素
  if (footer) {
    if (!Array.isArray(footer)) {
      modalFooter.append(footer);
    } else {
      if (footer.includes('cancel')) {
        modalFooter.appendChild(cancelButton);
      }
      if (footer.includes('confirm')) {
        modalFooter.appendChild(confirmButton);
      }
    }
    modal.appendChild(modalFooter);
  }

  /** 关闭弹窗 */
  function closeModal() {
    modal.remove();
    if (modalWrapper) {
      modalWrapper.style.display = 'none';
    }
  }

  /** 打开弹窗 */
  function openModal() {
    if (modalWrapper) {
      modalWrapper.style.display = '';
    } else {
      modalWrapper = createElement('<div id="iwe-modal-wrapper"></div>') as HTMLDivElement;
      document.body.appendChild(modalWrapper);
    }
    modalWrapper.appendChild(modal);
  }

  confirmButton.addEventListener('click', typeof onConfirm === 'function' ? onConfirm : closeModal);
  cancelButton.addEventListener('click', typeof onCancel === 'function' ? onCancel : closeModal);
  closeButton.addEventListener('click', closeModal);

  return {
    element: modal,

    header: modalHeader,
    content: modalContent,
    footer: modalFooter,

    confirmButton,
    cancelButton,

    /** 弹窗容器元素，只有打开过弹窗才有值 */
    get wrapper() {
      return modalWrapper;
    },

    close: closeModal,
    open: openModal,
  };
};

export default createModal;
