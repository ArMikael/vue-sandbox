export default {
  name: 'focus',
  mounted(el: HTMLElement) {
    el.focus();
    console.log('ELEM ', el);
  },
};
