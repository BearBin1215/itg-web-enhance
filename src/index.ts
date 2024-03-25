import coding from './coding';
import jenkins from './jenkins';
import oa from './oa';
import rancher from './rancher';
import './styles/modal.scss';

switch (location.host) {
  case 'itg-dtc.coding.net':
    coding();
    break;
  case 'jenkins.itg.it.org.test':
    jenkins();
    break;
  case 'oa.itg.cn':
    oa();
    break;
  case 'docker.itg.com.cn':
    rancher();
    break;
}
