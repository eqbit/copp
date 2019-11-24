const trimText = (text, length, end = '') => {
  return text.length <= length
    ? text
    : `${text.substr(0, length)}${end}`;
};

const getSelectOption = item => ({
  value: item,
  label: item
});

export {trimText, getSelectOption};