export default {
  name: 'intersection',
  mounted(el: HTMLElement, binding: any) {
    const options = {
      rootMargin: '0px',
      threshold: 1.0,
    };

    const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      if (entries[0].isIntersecting) {
        console.log(entries);
        binding.value();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(el as HTMLElement);
  },
};
