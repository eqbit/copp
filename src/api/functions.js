const trimText = (text, length, end = '') => {
  return text.length <= length
    ? text
    : `${text.substr(0, length)}${end}`;
};

export {trimText};