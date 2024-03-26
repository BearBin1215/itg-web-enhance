/** 通过HTML字符串创建一个HTML元素 */
const createElement = (html: string): HTMLElement => {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.children[0] as HTMLElement;
};

/**
 * 创建一个HTML元素
 * @param tagName 标签名
 * @param attrs 元素属性
 * @param children 子元素
 */
const createNode = <T extends keyof HTMLElementTagNameMap>(
  tagName: T,
  attrs?: Record<string, string>,
  children?: string | Node | (string | Node)[],
): HTMLElementTagNameMap[T] => {
  const element = document.createElement(tagName);
  for (const key in attrs) {
    if (Object.prototype.hasOwnProperty.call(attrs, key)) {
      element.setAttribute(key, attrs[key]);
    }
  }
  if (Array.isArray(children)) {
    element.append(...children);
  } else if (children) {
    element.append(children);
  }
  return element;
};

/**
 * 添加样式
 *
 * @param styles 样式表内容
 */
const addStyle = (styles: string) => {
  document.head.append(createElement(`<style>${styles}</style>`));
};

export { createElement, createNode, addStyle };
