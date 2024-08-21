export const scrollToSection = id => {
  const element = document.querySelector(id);

  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }

  console.log(element);
};
