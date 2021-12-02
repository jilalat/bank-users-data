// delete Users Icon Style
deleteUserRound.onmouseenter = () =>
  removeAndAddHiddenClassLists(deleteUserColoredIcon, deleteUserBlackIcon);

deleteUserRound.onmouseleave = () =>
  removeAndAddHiddenClassLists(deleteUserBlackIcon, deleteUserColoredIcon);

deleteUserRound.addEventListener('click', () => {
  let deleteCheckedElements = [];
  if (confirm('Are you sure you wont to delete all this users ?')) {
    getUsersData.forEach(element => {
      if (element.checkStatus === 'checked' && element.lockStatus !== 'locked')
        deleteCheckedElements.push(element.idNumber);
    });
    deleteCheckedElements.forEach(element => {
      let i = getUsersData.findIndex(el => el.idNumber === element);
      getUsersData.splice(i, 1);
    });
    setAndRefresh(getUsersData);
  }
  if (totalRowsPerPage.length == 0) {
    currentPage = thisPage - 1;
    refresh(getUsersData);
  }
  if (endingIndex.textContent >= getUsersData.length) {
    currentPage -= 1;
    refresh(getUsersData);
  }
  if (startingIndex.textContent == 0 && searchInputField.value.trim() !== '') {
    searchInputField.value = '';
    removeAndAddHiddenClassLists(searchIcon, searchBar);
    currentPage = 0;
    refresh(getUsersData);
  }
  if (getUsersData.length === 0) emptyingTable();
  showRoundIcons(getUsersData);
});

// Emptying The Table
let emptyingTable = () => {
  removeAndAddHiddenClassLists(emptyData, table);
  dashboard.classList.add('flex');
  dashboard.style.backgroundColor = '#1ae5be';
  dashboard.style.width = '100%';
  dashboard.style.height = '100%';
  addUserRound.style.boxShadow =
    '3px 3px 16px rgb(6, 53, 201), -3px -3px 36px rgb(6, 53, 201), -9px -9px 50px rgb(6, 53, 201), 9px 9px 50px rgb(6, 53, 201), -20px -20px 100px rgb(6, 53, 201), 20px 20px 100px rgb(6, 53, 201)';
  addTwoHiddenClassLists(blackFilterUserIcon, blackSearchUserIcon);
  // checkedArr = [];
};