const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

const validateEmail = (target: string) => {
  return target === "" || regExp.test(target);
};

export default validateEmail;
