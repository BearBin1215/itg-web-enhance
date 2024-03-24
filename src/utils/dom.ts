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
 * 创建一个SVG元素
 * @param attrs 元素属性
 * @param children 子元素
  */
const createSVG = (
  /** 元素属性 */
  attrs?: Record<string, string>,
  /** 子元素 */
  children?: string | Node | (string | Node)[],
) => {
  const element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
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

export { createElement, createNode, createSVG };
