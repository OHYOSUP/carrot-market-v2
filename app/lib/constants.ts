export const PASSWORD_MIN = 4;
export const PASSWORD_REGEX = new RegExp(
  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/
);
export const PASSWORD_REGEX_ERROR = '비밀번호는 8자리 이상 숫자, 특수문자를 포함해야 합니다'