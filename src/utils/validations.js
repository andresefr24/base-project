export const validateEmail = (email) => {
  return email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) !== null;
};

export const validatePassword = (password) => {
  return (
    password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/) !== null
  );
};
