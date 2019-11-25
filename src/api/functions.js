const trimText = (text, length, end = '') => {
  return text.length <= length
    ? text
    : `${text.substr(0, length)}${end}`;
};

const getSelectOption = item => ({
  value: item,
  label: item
});

const scrollToElement = ref => window.scrollTo(0, ref.current.offsetTop - 100);

export {trimText, getSelectOption, scrollToElement};