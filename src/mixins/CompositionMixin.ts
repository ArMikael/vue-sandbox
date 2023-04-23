import { onMounted } from 'vue';

export default () => {
  onMounted(() => {
    console.log('Composition Mixin mounted');
  });

  const handleButtonClick = (event: Event) => {
    console.log('Click Event: ', event);
  };

  return {
    handleButtonClick,
  };
};
