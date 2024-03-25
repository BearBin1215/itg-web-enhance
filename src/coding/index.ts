import { createElement } from '@/utils/dom';
import styles from './index.css';

const coding = () => {
  document.head.append(createElement(`<style>${styles}</style>`));
};

export default coding;
