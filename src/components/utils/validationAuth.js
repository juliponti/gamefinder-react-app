export const isEmailValid = (string) => {
  return /\S+@\S+\.\S+/.test(string);
};

export const isPasswordValid = (string) => {
  return string.length >= 6 && string.length <= 14;
};

export const normalizeData = (email, password) => {
  const user = {
    email: email.toLowerCase().trim(),
    password: password.trim(),
  };

  return user;
};

export const debounce = (fn, wait) => {
  let timeout;

  return (...args) => {
    const later = () => {
      clearTimeout(timeout);
      fn(...args);
    };

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);
  };
};
