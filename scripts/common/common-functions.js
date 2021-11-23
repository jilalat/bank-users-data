let setLocalStorage = (keyName, keyValue) => {
  localStorage.setItem(keyName, keyValue);
};

let removeTwoHiddenClassLists = (ele1, ele2) => {
  ele1.classList.remove('hidden');
  ele2.classList.remove('hidden');
};

let addTwoHiddenClassLists = (ele1, ele2) => {
  ele1.classList.add('hidden');
  ele2.classList.add('hidden');
};

let removeAndAddHiddenClassLists = (ele1, ele2) => {
  ele1.classList.remove('hidden');
  ele2.classList.add('hidden');
};

let redirectWebpage = path => {
  document.location.replace(`${path}`);
};

let userIndex = () => parseInt(localStorage.getItem('index'));

let extractIndex = () =>
  localStorage.getItem('operation') === 'Add Here' ||
  localStorage.getItem('operation') === 'duplicate'
    ? userIndex() + 1
    : userIndex();

