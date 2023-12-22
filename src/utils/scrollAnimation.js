const scrollAnimation = function (resultElement, errorElement) {
  if (resultElement) {
    window.requestAnimationFrame(() => {
      resultElement.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
  if (errorElement) {
    window.requestAnimationFrame(() => {
      errorElement.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
};

export { scrollAnimation };
