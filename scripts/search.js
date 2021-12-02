// Search Bar Style
blackSearchUserIcon.onmouseenter = () =>
  removeAndAddHiddenClassLists(colorSearchUserIcon, blackSearchUserIcon);

colorSearchUserIcon.onmouseleave = () =>
  removeAndAddHiddenClassLists(blackSearchUserIcon, colorSearchUserIcon);

colorSearchUserIcon.addEventListener('click', () => {
  removeAndAddHiddenClassLists(searchBar, searchIcon);
  searchInputField.focus();
  searchInputField.value.trim() !== ''
    ? blackDeleteSearch.classList.remove('hidden')
    : blackDeleteSearch.classList.add('hidden');
});

blackDeleteSearch.onmouseenter = () =>
  removeAndAddHiddenClassLists(colorDeleteSearch, blackDeleteSearch);

colorDeleteSearch.onmouseleave = () =>
  removeAndAddHiddenClassLists(blackDeleteSearch, colorDeleteSearch);

colorDeleteSearch.addEventListener('click', () => {
  searchInputField.focus();
  searchInputField.value = '';
  refresh(getUsersData);
  addTwoHiddenClassLists(colorDeleteSearch, blackDeleteSearch);
});

searchBar.addEventListener('mouseleave', () => {
  if (searchInputField.value.trim() === '')
    removeAndAddHiddenClassLists(searchIcon, searchBar);
});

let checkIfSearchExist = () => {
  if (getSearch == null) {
    searchIcon.classList.remove('hidden');
    searchBar.classList.add('hidden');
    blackDeleteSearch.classList.add('hidden');
  } else if (getSearch !== '') {
    searchInputField.value = getSearch;
    searchIcon.classList.add('hidden');
  searchBar.classList.remove('hidden');
  blackDeleteSearch.classList.remove('hidden');
  }
};

// search
let filteredArr = arr => {
  let searchInputValue = searchInputField.value.toLowerCase();
  let filtered = arr.filter(user => {
    return (
      user.fullName.toUpperCase().includes(searchInputValue) ||
      user.description.toUpperCase().includes(searchInputValue) ||
      user.fullName.toLowerCase().includes(searchInputValue) ||
      user.description.toLowerCase().includes(searchInputValue) ||
      user.idNumber.includes(searchInputValue)
    );
  });
  setLocalStorage('search', searchInputValue);
  return filtered;
};

searchInputField.oninput = () =>
  searchInputField.value.trim() !== ''
    ? blackDeleteSearch.classList.remove('hidden')
    : blackDeleteSearch.classList.add('hidden');

searchInputField.addEventListener('keyup', () => {
  tableBody.innerHTML = null;
  currentPage = 0;
  refresh(getUsersData);
  if (totalRowsPerPage.length === 0) checkAll.checked = false;
  console.log(getUsersData);
});

