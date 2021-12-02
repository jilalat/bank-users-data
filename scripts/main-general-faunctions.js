let setAndRefresh = arr => {
  setLocalStorage('usersData', JSON.stringify(arr));
  refresh(arr);
};

let setItems = (index, operation) => {
  setLocalStorage('index', `${index}`);
  setLocalStorage('operation', `${operation}`);
  setLocalStorage('page', `${currentPage}`);
  setLocalStorage('rows', `${rowsPerPage.value}`);
};

let showRoundIcons = ud => {
  if (ud.some(element => element.checkStatus === 'checked')) {
    removeTwoHiddenClassLists(printUserRound, deleteUserRound);
    removeTwoHiddenClassLists(lockUserRound, uncheckAllUsersRound);
    unlockUserRound.classList.remove('hidden');
  } else {
    addTwoHiddenClassLists(printUserRound, deleteUserRound);
    addTwoHiddenClassLists(lockUserRound, uncheckAllUsersRound);
    unlockUserRound.classList.add('hidden');
  }
};

// Modal Messages
let errorModalMessage = modal => {
  modal.classList.remove('hidden');
  setTimeout(removeModalMessage, 2000, modal);
};

let removeModalMessage = modal => {
  modal.classList.add('hidden');
};

let hideSuccessBorder = index => {
  index.classList.remove('green-border');
};

let extractID = i => getUsersData[i].idNumber;

let highlightUser = id => {
  totalRowsPerPage.forEach(element => {
    if (element.idNumber.includes(id)) {
      let goTo = document.getElementById(id);
      goTo.classList.add('green-border');
      goTo.scrollIntoView({ block: 'center' });
      setTimeout(hideSuccessBorder, 4000, goTo);
    }
  });
};

let successModalMessage = index => {
  if (localStorage.getItem('operation') === 'Update') {
    removeTwoHiddenClassLists(successfullyAddUserModal, successfullyUpdated);
    successfullyAdded.classList.add('hidden');
  } else if (
    localStorage.getItem('operation') !== 'Cancel Update' &&
    localStorage.getItem('operation') !== 'Cancel Submit'
  ) {
    removeTwoHiddenClassLists(successfullyAddUserModal, successfullyAdded);
    successfullyUpdated.classList.add('hidden');
  }
  successfullyAddUserModalValue.innerHTML = getUsersData[index].fullName;
  setTimeout(removeModalMessage, 4000, successfullyAddUserModal);
};

let removeIndexAndOperation = () => {
  localStorage.removeItem('index');
  localStorage.removeItem('operation');
};

let isLocalStorageEmpty = () => {
  if (getLocalStorageUsersData == null) {
    setLocalStorage('usersData', JSON.stringify(users));
    refresh(getUsersData);
  } else if (getLocalStorageUsersData == '[]') {
    emptyingTable();
  } else {
    checkIfSearchExist();
    sortedArrByLocalFilter();
    refresh(getUsersData);
  }
};
