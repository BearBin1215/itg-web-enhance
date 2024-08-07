import coding from './coding';
import fssc from './fssc';
import jenkins from './jenkins';
import lbp from './lbp';
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
  case 'lbp.itg.com.cn':
    lbp();
    break;
  case 'oa.itg.cn':
    oa();
    break;
  case 'docker.itg.com.cn':
    rancher();
    break;
  case 'fssc.itg.it.org':
  case 'fssc.itg.com.cn':
    fssc();
    break;
}
