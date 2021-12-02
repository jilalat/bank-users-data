let formParams = (data, index) => {
  formUrlParams.search = new URLSearchParams({
    fullName: `${data[index].fullName}`,
    idNumber: `${data[index].idNumber}`,
    description: `${data[index].description}`,
    currency: `${data[index].currency}`,
    deposit: `${data[index].deposit}`,
    rate: `${data[index].rate}`,
    balance: `${data[index].balance}`,
    status: `${data[index].status}`,
    lockStatus: `${data[index].lockStatus}`,
    checkStatus: `${data[index].checkStatus}`,
  });
  return formUrlParams;
};

let addNewUser = userData => {
  let {
    fullName,
    idNumber,
    description,
    currency,
    deposit,
    rate,
    balance,
    status,
    lockStatus,
    checkStatus,
  } = userData;
  let UserRow = document.createElement('tr');
  UserRow.setAttribute('class', `table-row ${checkRowStyle(checkStatus)}`);
  UserRow.setAttribute('id', `${idNumber}`);
  UserRow.appendChild(appendCheckUserTD(userData, UserRow));
  UserRow.appendChild(appendFullNameIdNumberTD(fullName, idNumber));
  UserRow.appendChild(appendDescriptionTD(description));
  UserRow.appendChild(appendRateCurrencyTD(rate, currency));
  UserRow.appendChild(appendBalanceCurrencyTD(balance, currency));
  UserRow.appendChild(appendDepositCurrencyTD(deposit, currency));
  UserRow.appendChild(appendStatusTD(userData, status));
  UserRow.appendChild(appendMoreTD(userData));
  return UserRow;
};

let checkRowStyle = checkSt => (checkSt === 'checked' ? `check-row-style` : ``);







// appendCheckUserTD
let appendCheckUserTD = (ud, row) => {
  let checkUserTD = document.createElement('td');
  checkUserTD.setAttribute('class', 'check-user-td');
  checkUserTD.appendChild(appendCheckedUserIcon(ud));
  checkUserTD.appendChild(appendUncheckedUserIcon(ud));
  checkUserTD.appendChild(appendAddDuplicateDelete(row, ud));
  return checkUserTD;
};

let appendCheckedUserIcon = ud => {
  let checkedUserIcon = document.createElement('img');
  checkedUserIcon.setAttribute('src', './images/checked-user.svg');
  checkedUserIcon.setAttribute(
    'class',
    `medium-icons flex checked-user-icon ${checkIconStyle(ud, 'checked')}`
  );
  checkedUserIcon.addEventListener('click', e => {
    let rowId = e.target.closest('tr').id;
    getUsersData[
      getUsersData.findIndex(el => el.idNumber === rowId)
    ].checkStatus = 'unchecked';
    showRoundIcons(getUsersData);
    setAndRefresh(getUsersData);
  });
  return checkedUserIcon;
};

let checkIconStyle = (ud, checkSt) =>
  ud.checkStatus === checkSt ? `` : `hidden`;
let appendUncheckedUserIcon = ud => {
  let uncheckedUserIcon = document.createElement('img');
  uncheckedUserIcon.setAttribute('src', './images/unchecked-user.png');
  uncheckedUserIcon.setAttribute(
    'class',
    `medium-icons flex unchecked-user-icon ${checkIconStyle(ud, 'unchecked')}`
  );
  uncheckedUserIcon.addEventListener('click', e => {
    let rowId = e.target.closest('tr').id;
    getUsersData[
      getUsersData.findIndex(el => el.idNumber === rowId)
    ].checkStatus = 'checked';
    showRoundIcons(getUsersData);
    setAndRefresh(getUsersData);
  });
  return uncheckedUserIcon;
};

let appendAddDuplicateDelete = (row, ud) => {
  let addDuplicateDeleteDiv = document.createElement('div');
  addDuplicateDeleteDiv.setAttribute('class', 'add-duplicate-delete hidden');
  row.onmouseenter = () => addDuplicateDeleteDiv.classList.remove('hidden');
  row.onmouseleave = () => addDuplicateDeleteDiv.classList.add('hidden');
  addDuplicateDeleteDiv.appendChild(appendDeleteThisRow(ud));
  addDuplicateDeleteDiv.appendChild(appendDuplicateThisRow());
  addDuplicateDeleteDiv.appendChild(appendAddNewUserHere());
  return addDuplicateDeleteDiv;
};

let appendDeleteThisRow = ud => {
  let DeleteThisRow = document.createElement('img');
  DeleteThisRow.setAttribute('class', 'delete-this medium-icons');
  DeleteThisRow.setAttribute('src', './images/error.svg');
  DeleteThisRow.addEventListener('click', () => {
    if (ud.lockStatus === 'locked') {
      errorModalMessage(lockModal);
    } else {
      if (confirm('Are you sure you wont to delete this user ?'))
        getUsersData.splice(getUsersData.indexOf(ud), 1);
    }
    if (startingIndex.textContent > getUsersData.length) currentPage -= 1;
    setAndRefresh(getUsersData);
    if (getUsersData.length === 0) emptyingTable();
  });
  return DeleteThisRow;
};

// let updatedUser = index => {
//   let user = {
//     fullName: getUsersData[index].fullName,
//     idNumber: getUsersData[index].idNumber,
//     description: getUsersData[index].description,
//     currency: getUsersData[index].currency,
//     deposit: getUsersData[index].deposit,
//     rate: getUsersData[index].rate,
//     balance: getUsersData[index].balance,
//     status: getUsersData[index].status,
//     lockStatus: getUsersData[index].lockStatus,
//     checkStatus: getUsersData[index].checkStatus,
//   };
//   return user;
// };

let rowIdIndex = id =>
  getUsersData.findIndex(element => element.idNumber === id);

let appendDuplicateThisRow = () => {
  let DuplicateThisRow = document.createElement('img');
  DuplicateThisRow.setAttribute('class', 'duplicate-this medium-icons');
  DuplicateThisRow.setAttribute('src', './images/duplicate-user.png');
  DuplicateThisRow.addEventListener('click', e => {
    let rowId = e.target.closest('tr').id;
    rowIdIndex(rowId);
    setItems(rowIdIndex(rowId), 'duplicate');
    // updatedUser(userIndex());
    // setLocalStorage('userToUpdate', JSON.stringify(updatedUser(userIndex())));
    redirectWebpage(formParams(getUsersData, userIndex()));
  });
  return DuplicateThisRow;
};

let appendAddNewUserHere = () => {
  let AddNewUserHere = document.createElement('img');
  AddNewUserHere.setAttribute('class', 'add-new-user-here medium-icons');
  AddNewUserHere.setAttribute('src', './images/add.png');
  AddNewUserHere.addEventListener('click', e => {
    let rowId = e.target.closest('tr').id;
    rowIdIndex(rowId);
    setItems(rowIdIndex(rowId), 'Add Here');
    // localStorage.removeItem('userToUpdate');
    redirectWebpage('../form.html');
  });
  return AddNewUserHere;
};

let forcedCheck = ud => {
  checkAll.checked = ud.every(element => element.checkStatus === 'checked')
    ? true
    : false;
};

checkAll.addEventListener('click', () => {
  checkAllUsers(totalRowsPerPage);
  setAndRefresh(getUsersData);
  showRoundIcons(getUsersData);
});

let checkAllUsers = arr => {
  arr.forEach(
    element =>
      (element.checkStatus = checkAll.checked ? 'checked' : 'unchecked')
  );
};

let uncheckedAll = ud => {
  ud.forEach(element => (element.checkStatus = 'unchecked'));
  setAndRefresh(ud);
};









// appendFullNameIdNumberTD
let appendFullNameIdNumberTD = (fNm, idNb) => {
  let FullNameIdNumberTD = document.createElement('td');
  FullNameIdNumberTD.setAttribute('class', 'full-name-id-number-td');
  FullNameIdNumberTD.innerHTML = `
<td class="full-name-id-number-td">
<p class="full-name">${fNm.toLowerCase()}</p>
<p class="id-number">${idNb}</p>
</td>`;
  return FullNameIdNumberTD;
};

let appendDescriptionTD = des => {
  let DescriptionTD = document.createElement('td');
  DescriptionTD.setAttribute('class', 'description-td');
  DescriptionTD.innerHTML = `<p class="description">${des}</p>`;
  return DescriptionTD;
};

let appendRateCurrencyTD = (rt, crr) => {
  let RateCurrencyTD = document.createElement('td');
  RateCurrencyTD.setAttribute('class', 'rate-currency-td');
  RateCurrencyTD.innerHTML = `
<p class="rate right-text-align">${Number(rt).toFixed(2)}</p>
<p class="currency right-text-align">${crr}</p>`;
  return RateCurrencyTD;
};

let appendBalanceCurrencyTD = (bal, crr) => {
  let BalanceCurrencyTD = document.createElement('td');
  BalanceCurrencyTD.setAttribute('class', 'balance-currency-td');
  BalanceCurrencyTD.innerHTML = `<p class="balance right-text-align ${checkBalance(
    bal
  )}">${Number(bal).toFixed(2)}</p>
<p class="currency right-text-align">${crr}</p>`;
  return BalanceCurrencyTD;
};

let checkBalance = b => (b > 0 ? 'positive' : b < 0 ? 'negative' : '');

let appendDepositCurrencyTD = (dp, crr) => {
  let DepositCurrencyTD = document.createElement('td');
  DepositCurrencyTD.setAttribute('class', 'deposit-currency-td');
  DepositCurrencyTD.innerHTML = `
<p class="deposit right-text-align">${Number(dp).toFixed(2)}</p>
<p class="currency right-text-align">${crr}</p>`;
  return DepositCurrencyTD;
};

let appendStatusTD = (ud, st) => {
  let StatusTD = document.createElement('td');
  StatusTD.setAttribute('class', 'status-td center-text-align');
  let activityBtn = document.createElement('button');
  activityBtn.setAttribute('class', `${showStatus(st)}`);
  activityBtn.innerHTML = `${st}`;
  activityBtn.addEventListener('click', () => {
    if (ud.lockStatus === 'locked') {
      errorModalMessage(lockModal);
    } else {
      ud.status = st === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
      setAndRefresh(getUsersData);
    }
  });
  StatusTD.appendChild(activityBtn);
  return StatusTD;
};

let showStatus = sts => `${sts.toLowerCase()}-btn`;











//appendMoreTD
let appendMoreTD = ud => {
  let moreTD = document.createElement('td');
  let moreDiv = document.createElement('div');
  moreTD.setAttribute('class', 'center-text-align');
  moreDiv.setAttribute('class', 'flex-btwn');
  moreTD.appendChild(moreDiv);
  moreDiv.appendChild(appendEditUserIcon(ud));
  moreDiv.appendChild(appendStrongLockUserIcon(ud));
  moreDiv.appendChild(appendWeakLockUserIcon(ud));
  return moreTD;
};

let appendEditUserIcon = ud => {
  let EditUserIcon = document.createElement('img');
  EditUserIcon.setAttribute('src', './images/b-edit-user.svg');
  EditUserIcon.setAttribute('class', 'medium-icons');

  EditUserIcon.addEventListener('click', e => {
    if (ud.lockStatus === 'locked') {
      errorModalMessage(lockModal);
    } else {
      let rowId = e.target.closest('tr').id;
      rowIdIndex(rowId);
      setItems(rowIdIndex(rowId), 'Update');
      // setLocalStorage('userToUpdate', JSON.stringify(updatedUser(userIndex())));
      redirectWebpage(formParams(getUsersData, userIndex()));
      getUsersData.splice(rowIdIndex(rowId), 1);
      setLocalStorage('usersData', JSON.stringify(getUsersData));
    }
  });
  return EditUserIcon;
};

let appendStrongLockUserIcon = ud => {
  let strongLockUserIcon = document.createElement('img');
  strongLockUserIcon.setAttribute('src', './images/strong-lock-user.png');
  strongLockUserIcon.setAttribute(
    'class',
    `${checkLockStatus(ud, 'locked')} medium-icons black-print-user-icon `
  );
  strongLockUserIcon.addEventListener('click', () => {
    ud.lockStatus = 'not locked';
    setAndRefresh(getUsersData);
  });
  return strongLockUserIcon;
};

let appendWeakLockUserIcon = ud => {
  let weakLockUserIcon = document.createElement('img');
  weakLockUserIcon.setAttribute('src', './images/weak-lock-user.png');
  weakLockUserIcon.setAttribute(
    'class',
    `${checkLockStatus(ud, 'not locked')} medium-icons black-print-user-icon `
  );
  weakLockUserIcon.addEventListener('click', () => {
    ud.lockStatus = 'locked';
    setAndRefresh(getUsersData);
  });
  return weakLockUserIcon;
};

let checkLockStatus = (ud, lockSt) =>
  ud.lockStatus === lockSt ? `` : `hidden`;