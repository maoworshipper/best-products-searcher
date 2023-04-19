export const scrollToTop = () => {
  window &&
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
};
