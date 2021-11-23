
// Total Of Checked Users :
let showTotalOfCheckedUsers = arr => {
  let numberOfCheckedUsers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].checkStatus === 'checked')
      numberOfCheckedUsers.push(arr[i].checkStatus);
  }
  return numberOfCheckedUsers.length;
};

// Uncheck All Users Icon Style
uncheckAllUsersRound.onmouseenter = () =>
  removeAndAddHiddenClassLists(uncheckAllUsersColoredIcon, totalOfCheckedUsers);

uncheckAllUsersRound.onmouseleave = () =>
  removeAndAddHiddenClassLists(totalOfCheckedUsers, uncheckAllUsersColoredIcon);

uncheckAllUsersRound.addEventListener('click', () => {
  // checkedArr = [];
  refresh(getUsersData);
  addTwoHiddenClassLists(printUserRound, deleteUserRound);
  addTwoHiddenClassLists(lockUserRound, uncheckAllUsersRound);
  unlockUserRound.classList.add('hidden');
  checkAll.checked = false;
  uncheckedAll(getUsersData);
});