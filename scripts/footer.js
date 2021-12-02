let tableFooterColor = arr =>
  (tableFooter.style.backgroundColor = arr.length % 2 != 0 ? '#f4f7fc' : '');

// active Users :
let showActiveUsers = arr => {
  let numberOfActiveUsers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].status === 'ACTIVE') numberOfActiveUsers.push(arr[i].status);
  }
  return numberOfActiveUsers.length;
};

// Locked Users :
let showLockedUsers = arr => {
  let numberOfLockedUsers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].lockStatus === 'locked')
      numberOfLockedUsers.push(arr[i].lockStatus);
  }
  return numberOfLockedUsers.length;
};

// rows per page
let rowsPerPageValueOnChange = rowsPerPage.addEventListener('change', e => {
  e = rowsPerPage.value;
  currentPage = 0;
  refresh(getUsersData);
});

// next / previous page :
blackLeftArrow.onmouseenter = () =>
  removeAndAddHiddenClassLists(colorLeftArrow, blackLeftArrow);

colorLeftArrow.onmouseleave = () =>
  removeAndAddHiddenClassLists(blackLeftArrow, colorLeftArrow);

blackRightArrow.onmouseenter = () =>
  removeAndAddHiddenClassLists(colorRightArrow, blackRightArrow);

colorRightArrow.onmouseleave = () =>
  removeAndAddHiddenClassLists(blackRightArrow, colorRightArrow);

colorRightArrow.addEventListener('click', () => {
  if ((currentPage + 1) * rowsPerPage.value < getUsersData.length)
    currentPage++;
  refresh(getUsersData);
  if (startingIndex.textContent == 0) currentPage--;
  refresh(getUsersData);
});

colorLeftArrow.addEventListener('click', () => {
  if (currentPage != 0) currentPage--;
  refresh(getUsersData);
});