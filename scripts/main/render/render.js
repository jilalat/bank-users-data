let refresh = arrayToRender => {
  tableBody.innerHTML = null;
  let selectedRowsPerPage = rowsPerPageValueOnChange || rowsPerPage.value;
  let filteredUsers = filteredArr(arrayToRender) || arrayToRender;
  let sortFiltered = filteredUsers.slice() || filteredUsers;
  sortedArr(sortFiltered);
  totalRowsPerPage = sortFiltered.slice(
    currentPage * selectedRowsPerPage,
    (currentPage + 1) * selectedRowsPerPage
  );
  tableFooterColor(totalRowsPerPage);
  totalOfLockedUsers.textContent = showLockedUsers(sortFiltered);
  totalOfCheckedUsers.textContent = `(${showTotalOfCheckedUsers(
    arrayToRender
  )})`;
  activeUsers.textContent = showActiveUsers(sortFiltered);
  totalOfUsers.forEach(element => (element.textContent = sortFiltered.length));
  startingIndex.textContent =
    totalRowsPerPage.length != 0
      ? currentPage * selectedRowsPerPage + 1
      : totalRowsPerPage.length;
  endingIndex.textContent =
    totalRowsPerPage.length -
    selectedRowsPerPage +
    selectedRowsPerPage * (currentPage + 1);
  totalRowsPerPage.forEach(element =>
    tableBody.appendChild(addNewUser(element))
  );
  forcedCheck(totalRowsPerPage);
};


isLocalStorageEmpty();
showRoundIcons(getUsersData);
if (getIndex !== null) {
  successModalMessage(extractIndex());
  highlightUser(extractID(extractIndex()));
}
removeIndexAndOperation();