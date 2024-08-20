export const scrollToForm = () => {
  const partnershipForm = document.querySelector('#partnership-form');

  if (partnershipForm) {
    partnershipForm.scrollIntoView({ behavior: 'smooth' });
  }

  console.log(partnershipForm);
};
