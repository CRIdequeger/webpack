import HelloWorld from './HelloWorld';

const components = [
  HelloWorld
];

export const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.2.2',
  author: 'e-lead',
  install,
  HelloWorld
};
