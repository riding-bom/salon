const regExp = /^.*(?=^.{8,}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

const validatePassword = (target: string) => {
  return regExp.test(target);
};

export default validatePassword;
