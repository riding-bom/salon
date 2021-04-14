const regExp = /^.*(?=^.{8,}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

const validatePassword = (target: string) => {
  return target === "" || regExp.test(target);
};

export default validatePassword;
