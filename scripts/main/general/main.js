// 'use strict';

// let totalRowsPerPage;

// // Top Main
// // let main = document.getElementById('main');
// let searchBar = document.querySelector('.search-bar');
// let searchInputField = document.querySelector('.search-input-field');
// let searchIcon = document.querySelector('.search-icon');
// let blackSearchUserIcon = document.querySelector('.black-search-user-icon');
// let colorSearchUserIcon = document.querySelector('.color-search-user-icon');
// let blackDeleteSearch = document.querySelector('.black-delete-search');
// let colorDeleteSearch = document.querySelector('.color-delete-search');
// let filterBoard = document.querySelector('.filter-board');
// let filterIcon = document.querySelector('.filter-icon');
// let blackFilterUserIcon = document.querySelector('.black-filter-user-icon');
// let colorFilterUserIcon = document.querySelector('.color-filter-user-icon');

// let addUserRound = document.querySelector('.add-user-icons');
// let addUserBlackIcon = document.querySelector('.add-user-black-icon');
// let addUserColoredIcon = document.querySelector('.add-user-colored-icon');

// let printUserRound = document.querySelector('.print-user-icons');
// let printUserBlackIcon = document.querySelector('.print-user-black-icon');
// let printUserColoredIcon = document.querySelector('.print-user-colored-icon');

// let deleteUserRound = document.querySelector('.delete-user-icons');
// let deleteUserColoredIcon = document.querySelector('.delete-user-colored-icon');
// let deleteUserBlackIcon = document.querySelector('.delete-user-black-icon');

// let lockUserRound = document.querySelector('.lock-user-icons');
// let lockUserColoredIcon = document.querySelector('.lock-user-colored-icon');
// let lockUserBlackIcon = document.querySelector('.lock-user-black-icon');

// let unlockUserRound = document.querySelector('.unlock-user-icons');
// let unlockUserColoredIcon = document.querySelector('.unlock-user-colored-icon');
// let unlockUserBlackIcon = document.querySelector('.unlock-user-black-icon');

// let uncheckAllUsersRound = document.querySelector('.uncheck-all-users-icons');
// let uncheckAllUsersColoredIcon = document.querySelector(
//   '.uncheck-all-users-colored-icon'
// );
// let totalOfCheckedUsers = document.querySelector('.total-of-checked-users');
// // let uncheckAllUsersBlackIcon = document.querySelector(
// //   '.total-of-checked-users'
// // );

// //dashboard
// let dashboard = document.getElementById('dashboard');
// let emptyData = document.querySelector('.empty-row');
// let topIcons = document.querySelector('.top-icons');

// // print Section
// // let printCheckedElements = [];
// let tableNameAndIdNumber = document.querySelector('.table-name-and-id-number');
// let tableDescription = document.querySelector('.table-description');
// let tableRateAndCurrency = document.querySelector('.table-rate-and-currency');
// let tableBalanceAndCurrency = document.querySelector(
//   '.table-balance-and-currency'
// );
// let tableDepositAndCurrency = document.querySelector(
//   '.table-deposit-and-currency'
// );
// let tableStatus = document.querySelector('.table-status');

// let printTableStyle = [
//   dashboard,
//   tableNameAndIdNumber,
//   tableDescription,
//   tableRateAndCurrency,
//   tableBalanceAndCurrency,
//   tableDepositAndCurrency,
//   tableStatus,
// ];

// // Message Modal
// // let updateOrCancelModal = document.querySelector('.update-or-cancel-modal');
// let lockModal = document.querySelector('.lock-modal');
// let duplicateModal = document.querySelector('.duplicate-modal');
// let successfullyAddUserModal = document.querySelector('.add-user-modal');
// let successfullyAdded = document.querySelector('.added');
// let successfullyUpdated = document.querySelector('.updated');
// let successfullyAddUserModalValue = document.querySelector(
//   '.add-user-modal-value'
// );

// // table
// let table = document.querySelector('.table');

// // Table Head :
// let tableHead = document.querySelector('.t-head');
// let tableCheckUser = document.querySelector('.table-check-user');
// let tableMore = document.querySelector('.table-more');

// // checkbox
// let checkAll = document.getElementById('checkbox');

// // Sort-by
// let blueUpIcon = document.querySelectorAll('.blue-up');
// let blueDownIcon = document.querySelectorAll('.blue-down');
// let defaultNameRadio = document.getElementById('default-name-radio');
// let azNameRadio = document.getElementById('az-name-radio');
// let zaNameRadio = document.getElementById('za-name-radio');
// let defaultStatusRadio = document.getElementById('default-status-radio');
// let activeStatusRadio = document.getElementById('active-status-radio');
// let inactiveStatusRadio = document.getElementById('inactive-status-radio');
// let defaultName = document.querySelector('.default-name');
// let azName = document.querySelector('.az-name');
// let zaName = document.querySelector('.za-name');
// let defaultStatus = document.querySelector('.default-status');
// let activeStatus = document.querySelector('.active-status');
// let inactiveStatus = document.querySelector('.inactive-status');

// // table Body
// let tableBody = document.querySelector('.table-body');
// let rowIdIndexArr = [];

// // Table Footer
// let tableFooter = document.querySelector('.t-footer');
// let totalOfLockedUsers = document.querySelector('.total-of-locked-users');
// let activeUsers = document.querySelector('.active-users');
// let totalOfUsers = document.querySelectorAll('.total-of-users');
// let rowsPerPage = document.getElementById('rows-per-page');
// let startingIndex = document.querySelector('.starting-index');
// let endingIndex = document.querySelector('.ending-index');
// let currentPage = 0;
// let blackRightArrow = document.querySelector('.black-right-arrow');
// let colorRightArrow = document.querySelector('.color-right-arrow');
// let blackLeftArrow = document.querySelector('.black-left-arrow');
// let colorLeftArrow = document.querySelector('.color-left-arrow');


// // General Functions :
// let setAndRefresh = arr => {
//   setLocalStorage('usersData', JSON.stringify(arr));
//   refresh(arr);
// };

// let setItems = (index, operation) => {
//   setLocalStorage('index', `${index}`);
//   setLocalStorage('operation', `${operation}`);
//   setLocalStorage('page', `${currentPage}`);
//   setLocalStorage('rows', `${rowsPerPage.value}`);
// };


// // Search Bar Style
// blackSearchUserIcon.onmouseenter = () =>
//   removeAndAddHiddenClassLists(colorSearchUserIcon, blackSearchUserIcon);

// colorSearchUserIcon.onmouseleave = () =>
//   removeAndAddHiddenClassLists(blackSearchUserIcon, colorSearchUserIcon);

// colorSearchUserIcon.addEventListener('click', () => {
//   removeAndAddHiddenClassLists(searchBar, searchIcon);
//   searchInputField.focus();
//   searchInputField.value.trim() !== ''
//     ? blackDeleteSearch.classList.remove('hidden')
//     : blackDeleteSearch.classList.add('hidden');
// });

// blackDeleteSearch.onmouseenter = () =>
//   removeAndAddHiddenClassLists(colorDeleteSearch, blackDeleteSearch);

// colorDeleteSearch.onmouseleave = () =>
//   removeAndAddHiddenClassLists(blackDeleteSearch, colorDeleteSearch);

// colorDeleteSearch.addEventListener('click', () => {
//   searchInputField.focus();
//   searchInputField.value = '';
//   refresh(getUsersData);
//   addTwoHiddenClassLists(colorDeleteSearch, blackDeleteSearch);
// });

// searchBar.addEventListener('mouseleave', () => {
//   if (searchInputField.value.trim() === '')
//     removeAndAddHiddenClassLists(searchIcon, searchBar);
// });

// // search
// let filteredArr = arr => {
//   let searchInputValue = searchInputField.value.toLowerCase();
//   let filtered = arr.filter(user => {
//     return (
//       user.fullName.toUpperCase().includes(searchInputValue) ||
//       user.description.toUpperCase().includes(searchInputValue) ||
//       user.fullName.toLowerCase().includes(searchInputValue) ||
//       user.description.toLowerCase().includes(searchInputValue) ||
//       user.idNumber.includes(searchInputValue)
//     );
//   });
//   return filtered;
// };

// searchInputField.oninput = () =>
//   searchInputField.value.trim() !== ''
//     ? blackDeleteSearch.classList.remove('hidden')
//     : blackDeleteSearch.classList.add('hidden');

// searchInputField.addEventListener('keyup', () => {
//   tableBody.innerHTML = null;
//   currentPage = 0;
//   refresh(getUsersData);
//   if (totalRowsPerPage.length === 0) checkAll.checked = false;
// });

// // Print Users Icon Style
// let printUsers = userData => {
//   let {
//     fullName,
//     idNumber,
//     description,
//     currency,
//     deposit,
//     rate,
//     balance,
//     status,
//   } = userData;
//   let UserRow = document.createElement('tr');
//   UserRow.innerHTML = `<td class="r-border">
// <p class="full-name">${fullName.toLowerCase()}</p>
// <p class="id-number">${idNumber}</p></td>
// <td class="r-border"><p class="description">${description}</p></td>
// <td class="r-border">
// <p class="rate right-text-align">${Number(rate).toFixed(2)}</p>
// <p class="currency right-text-align">${currency}</p></td>
// <td class="r-border">
// <p class="balance right-text-align ${checkBalance(balance)}">${Number(
//     balance
//   ).toFixed(2)}</p>
// <p class="currency right-text-align">${currency}</p></td>
// <td class="r-border">
// <p class="deposit right-text-align">${Number(deposit).toFixed(2)}</p>
// <p class="currency right-text-align">${currency}</p></td>
// <td class="r-border print-status-td center-text-align">
// <button id="" class="print-status">${status}</button></td>`;
//   return UserRow;
// };

// let printPDF = () => {
//   addTwoHiddenClassLists(blueUpIcon[1], blueDownIcon[1]);
//   addTwoHiddenClassLists(blueUpIcon[0], blueDownIcon[0]);
//   addTwoHiddenClassLists(tableCheckUser, tableFooter);
//   addTwoHiddenClassLists(tableMore, topIcons);
//   dashboard.style.padding = '0px';
//   dashboard.style.border = 'none';
//   tableHead.style.position = 'static';
//   printTableStyle.slice(1).forEach(element => {
//     element.style.border = '1px solid #000000';
//   });
//   tableBody.innerHTML = null;
// };

// let resetDataAfterPrint = () => {
//   removeTwoHiddenClassLists(tableFooter, tableCheckUser);
//   removeTwoHiddenClassLists(tableMore, topIcons);
//   // main.scrollIntoView();
//   tableHead.style.position = '';
//   dashboard.style.padding = '40px';
//   printTableStyle.forEach(element => (element.style.border = ''));
// };

// printUserRound.onmouseenter = () =>
//   removeAndAddHiddenClassLists(printUserColoredIcon, printUserBlackIcon);

// printUserRound.onmouseleave = () =>
//   removeAndAddHiddenClassLists(printUserBlackIcon, printUserColoredIcon);

// printUserRound.addEventListener('click', () => {
//   let printCheckedElements = [];
//   getUsersData.forEach(element => {
//     if (element.checkStatus === 'checked') printCheckedElements.push(element);
//   });
//   printPDF();
//   printCheckedElements.forEach(el => tableBody.appendChild(printUsers(el)));
//   window.print();
//   resetDataAfterPrint();
//   refresh(getUsersData);
//   console.log(printCheckedElements);
// });

// // delete Users Icon Style
// deleteUserRound.onmouseenter = () =>
//   removeAndAddHiddenClassLists(deleteUserColoredIcon, deleteUserBlackIcon);

// deleteUserRound.onmouseleave = () =>
//   removeAndAddHiddenClassLists(deleteUserBlackIcon, deleteUserColoredIcon);

// deleteUserRound.addEventListener('click', () => {
//   let deleteCheckedElements = [];
//   if (confirm('Are you sure you wont to delete all this users ?')) {
//     getUsersData.forEach(element => {
//       if (element.checkStatus === 'checked' && element.lockStatus !== 'locked')
//         deleteCheckedElements.push(element.idNumber);
//     });
//     deleteCheckedElements.forEach(element => {
//       let i = getUsersData.findIndex(el => el.idNumber === element);
//       getUsersData.splice(i, 1);
//     });
//     setAndRefresh(getUsersData);
//   }
//   if (totalRowsPerPage.length == 0) {
//     currentPage = thisPage - 1;
//     refresh(getUsersData);
//   }
//   if (endingIndex.textContent >= getUsersData.length) {
//     currentPage -= 1;
//     refresh(getUsersData);
//   }
//   if (startingIndex.textContent == 0 && searchInputField.value.trim() !== '') {
//     searchInputField.value = '';
//     removeAndAddHiddenClassLists(searchIcon, searchBar);
//     currentPage = 0;
//     refresh(getUsersData);
//   }
//   if (getUsersData.length === 0) emptyingTable();
//   showRoundIcons(getUsersData);
// });

// // Lock Users Icon Style
// lockUserRound.onmouseenter = () =>
//   removeAndAddHiddenClassLists(lockUserColoredIcon, lockUserBlackIcon);

// lockUserRound.onmouseleave = () =>
//   removeAndAddHiddenClassLists(lockUserBlackIcon, lockUserColoredIcon);

// lockUserRound.addEventListener('click', () => {
//   getUsersData.forEach(element => {
//     if (element.checkStatus === 'checked') element.lockStatus = 'locked';
//   });
//   setAndRefresh(getUsersData);
// });

// // Unlock Users Icon Style
// unlockUserRound.onmouseenter = () =>
//   removeAndAddHiddenClassLists(unlockUserColoredIcon, unlockUserBlackIcon);

// unlockUserRound.onmouseleave = () =>
//   removeAndAddHiddenClassLists(unlockUserBlackIcon, unlockUserColoredIcon);

// unlockUserRound.addEventListener('click', () => {
//   getUsersData.forEach(element => {
//     if (element.checkStatus === 'checked') element.lockStatus = 'not locked';
//   });
//   setAndRefresh(getUsersData);
// });


// // Total Of Checked Users :
// let showTotalOfCheckedUsers = arr => {
//   let numberOfCheckedUsers = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].checkStatus === 'checked')
//       numberOfCheckedUsers.push(arr[i].checkStatus);
//   }
//   return numberOfCheckedUsers.length;
// };

// // Uncheck All Users Icon Style
// uncheckAllUsersRound.onmouseenter = () =>
//   removeAndAddHiddenClassLists(uncheckAllUsersColoredIcon, totalOfCheckedUsers);

// uncheckAllUsersRound.onmouseleave = () =>
//   removeAndAddHiddenClassLists(totalOfCheckedUsers, uncheckAllUsersColoredIcon);

// uncheckAllUsersRound.addEventListener('click', () => {
//   // checkedArr = [];
//   refresh(getUsersData);
//   addTwoHiddenClassLists(printUserRound, deleteUserRound);
//   addTwoHiddenClassLists(lockUserRound, uncheckAllUsersRound);
//   unlockUserRound.classList.add('hidden');
//   checkAll.checked = false;
//   uncheckedAll(getUsersData);
// });

// Add User Icon Style
// addUserRound.onmouseenter = () =>
//   removeAndAddHiddenClassLists(addUserColoredIcon, addUserBlackIcon);

// addUserRound.onmouseleave = () =>
//   removeAndAddHiddenClassLists(addUserBlackIcon, addUserColoredIcon);

// addUserRound.addEventListener('click', () => {
//   setItems('0', 'Add New');
//   localStorage.removeItem('userToUpdate');
//   redirectWebpage('../form.html');
// });

// // Message Modal general fcts
// let errorModalMessage = modal => {
//   modal.classList.remove('hidden');
//   setTimeout(removeModalMessage, 2000, modal);
// };

// let removeModalMessage = modal => {
//   modal.classList.add('hidden');
// };

// let hideSuccessBorder = index => {
//   index.classList.remove('green-border');
// };

// table
// let emptyingTable = () => {
//   removeAndAddHiddenClassLists(emptyData, table);
//   dashboard.classList.add('flex');
//   dashboard.style.backgroundColor = '#1ae5be';
//   dashboard.style.width = '100%';
//   dashboard.style.height = '100%';
//   addUserRound.style.boxShadow =
//     '3px 3px 16px rgb(6, 53, 201), -3px -3px 36px rgb(6, 53, 201), -9px -9px 50px rgb(6, 53, 201), 9px 9px 50px rgb(6, 53, 201), -20px -20px 100px rgb(6, 53, 201), 20px 20px 100px rgb(6, 53, 201)';
//   addTwoHiddenClassLists(blackFilterUserIcon, blackSearchUserIcon);
//   // checkedArr = [];
// };

//theade
// if (getFilter == null || getFilter == '[]') {
//   setLocalStorage('filter', JSON.stringify(filterArray));
// }
// // console.log(filterArray);
// let checkIfRadioIsChecked = (radio1, radio2) =>
//   JSON.parse(getFilter)[0] === radio1 && JSON.parse(getFilter)[1] === radio2;

// let forcedRadioCheck = (radio1, radio2) => {
//   radio1.checked = true;
//   radio2.checked = true;
// };
// let sortedArrByLocalFilter = () => {
//   if (checkIfRadioIsChecked('azName', 'defaultStatus')) {
//     forcedRadioCheck(azNameRadio, defaultStatusRadio);
//   } else if (checkIfRadioIsChecked('zaName', 'defaultStatus')) {
//     forcedRadioCheck(zaNameRadio, defaultStatusRadio);
//   } else if (checkIfRadioIsChecked('defaultName', 'activeStatus')) {
//     forcedRadioCheck(defaultNameRadio, activeStatusRadio);
//   } else if (checkIfRadioIsChecked('defaultName', 'inactiveStatus')) {
//     forcedRadioCheck(defaultNameRadio, inactiveStatusRadio);
//   } else if (checkIfRadioIsChecked('azName', 'activeStatus')) {
//     forcedRadioCheck(azNameRadio, activeStatusRadio);
//   } else if (checkIfRadioIsChecked('azName', 'inactiveStatus')) {
//     forcedRadioCheck(azNameRadio, inactiveStatusRadio);
//   } else if (checkIfRadioIsChecked('zaName', 'activeStatus')) {
//     forcedRadioCheck(zaNameRadio, activeStatusRadio);
//   } else if (checkIfRadioIsChecked('zaName', 'inactiveStatus')) {
//     forcedRadioCheck(zaNameRadio, inactiveStatusRadio);
//   } else {
//     forcedRadioCheck(defaultNameRadio, defaultStatusRadio);
//   }
// };

// sortedArrByLocalFilter();

// // Filter Style
// blackFilterUserIcon.onmouseenter = () =>
//   removeAndAddHiddenClassLists(colorFilterUserIcon, blackFilterUserIcon);

// colorFilterUserIcon.onmouseleave = () =>
//   removeAndAddHiddenClassLists(blackFilterUserIcon, colorFilterUserIcon);

// colorFilterUserIcon.onclick = () =>
//   removeAndAddHiddenClassLists(filterBoard, filterIcon);



// // Sort Functions
// let sortByFullName = (a, b) =>
//   a.fullName.toLowerCase() > b.fullName.toLowerCase()
//     ? 1
//     : b.fullName.toLowerCase() > a.fullName.toLowerCase()
//     ? -1
//     : 0;

// let sortByStatus = (a, b) =>
//   a.status.toLowerCase() > b.status.toLowerCase()
//     ? 1
//     : b.status.toLowerCase() > a.status.toLowerCase()
//     ? -1
//     : 0;

// let radioInputsClickEvent = (index, insertedItem, radioId, arr) => {
//   arr.splice(index, 1, insertedItem);
//   setLocalStorage('filter', JSON.stringify(arr));
//   radioId.checked = true;
//   refresh(getUsersData);
// };

// defaultName.onclick = () => {
//   radioInputsClickEvent(0, 'defaultName', defaultNameRadio, filterArray);
// };

// azName.addEventListener('click', () => {
//   radioInputsClickEvent(0, 'azName', azNameRadio, filterArray);
// });
// zaName.addEventListener('click', () => {
//   radioInputsClickEvent(0, 'zaName', zaNameRadio, filterArray);
// });

// defaultStatus.addEventListener('click', () => {
//   radioInputsClickEvent(1, 'defaultStatus', defaultStatusRadio, filterArray);
// });
// activeStatus.addEventListener('click', () => {
//   radioInputsClickEvent(1, 'activeStatus', activeStatusRadio, filterArray);
// });
// inactiveStatus.addEventListener('click', () => {
//   radioInputsClickEvent(1, 'inactiveStatus', inactiveStatusRadio, filterArray);
// });

// let sortedArr = arr => {
//   if (azNameRadio.checked && defaultStatusRadio.checked) {
//     removeAndAddHiddenClassLists(blueUpIcon[0], blueDownIcon[0]);
//     addTwoHiddenClassLists(blueUpIcon[1], blueDownIcon[1]);
//     return arr.sort(sortByFullName);
//   } else if (zaNameRadio.checked && defaultStatusRadio.checked) {
//     removeAndAddHiddenClassLists(blueDownIcon[0], blueUpIcon[0]);
//     addTwoHiddenClassLists(blueUpIcon[1], blueDownIcon[1]);
//     return arr.sort(sortByFullName).reverse();
//   } else if (activeStatusRadio.checked && defaultNameRadio.checked) {
//     removeAndAddHiddenClassLists(blueUpIcon[1], blueDownIcon[1]);
//     addTwoHiddenClassLists(blueUpIcon[0], blueDownIcon[0]);
//     return arr.sort(sortByStatus);
//   } else if (inactiveStatusRadio.checked && defaultNameRadio.checked) {
//     removeAndAddHiddenClassLists(blueDownIcon[1], blueUpIcon[1]);
//     addTwoHiddenClassLists(blueUpIcon[0], blueDownIcon[0]);
//     return arr.sort(sortByStatus).reverse();
//   } else if (activeStatusRadio.checked && azNameRadio.checked) {
//     removeTwoHiddenClassLists(blueUpIcon[0], blueUpIcon[1]);
//     addTwoHiddenClassLists(blueDownIcon[0], blueDownIcon[1]);
//     return arr.sort(sortByFullName).sort(sortByStatus);
//   } else if (inactiveStatusRadio.checked && azNameRadio.checked) {
//     removeTwoHiddenClassLists(blueUpIcon[0], blueDownIcon[1]);
//     addTwoHiddenClassLists(blueDownIcon[0], blueUpIcon[1]);
//     return arr.sort(sortByFullName).reverse().sort(sortByStatus).reverse();
//   } else if (activeStatusRadio.checked && zaNameRadio.checked) {
//     removeTwoHiddenClassLists(blueDownIcon[0], blueUpIcon[1]);
//     addTwoHiddenClassLists(blueUpIcon[0], blueDownIcon[1]);
//     return arr.sort(sortByFullName).reverse().sort(sortByStatus);
//   } else if (inactiveStatusRadio.checked && zaNameRadio.checked) {
//     removeTwoHiddenClassLists(blueDownIcon[0], blueDownIcon[1]);
//     addTwoHiddenClassLists(blueUpIcon[0], blueUpIcon[1]);
//     return arr.sort(sortByFullName).sort(sortByStatus).reverse();
//   } else {
//     addTwoHiddenClassLists(blueUpIcon[1], blueDownIcon[1]);
//     addTwoHiddenClassLists(blueUpIcon[0], blueDownIcon[0]);
//   }
// };

// filterBoard.onchange = () => refresh(getUsersData);
// filterBoard.onmouseleave = () =>
//   removeAndAddHiddenClassLists(filterIcon, filterBoard);

//tbody
//create Elements :
// let addNewUser = userData => {
//   let {
//     fullName,
//     idNumber,
//     description,
//     currency,
//     deposit,
//     rate,
//     balance,
//     status,
//     lockStatus,
//     checkStatus,
//   } = userData;
//   let UserRow = document.createElement('tr');
//   UserRow.setAttribute('class', `table-row ${checkRowStyle(checkStatus)}`);
//   UserRow.setAttribute('id', `${idNumber}`);
//   UserRow.appendChild(appendCheckUserTD(userData, UserRow));
//   UserRow.appendChild(appendFullNameIdNumberTD(fullName, idNumber));
//   UserRow.appendChild(appendDescriptionTD(description));
//   UserRow.appendChild(appendRateCurrencyTD(rate, currency));
//   UserRow.appendChild(appendBalanceCurrencyTD(balance, currency));
//   UserRow.appendChild(appendDepositCurrencyTD(deposit, currency));
//   UserRow.appendChild(appendStatusTD(userData, status));
//   UserRow.appendChild(appendMoreTD(userData));
//   return UserRow;
// };
// let checkRowStyle = checkSt => (checkSt === 'checked' ? `check-row-style` : ``);

// let appendCheckUserTD = (ud, row) => {
//   let checkUserTD = document.createElement('td');
//   checkUserTD.setAttribute('class', 'check-user-td');
//   checkUserTD.appendChild(appendCheckedUserIcon(ud));
//   checkUserTD.appendChild(appendUncheckedUserIcon(ud));
//   checkUserTD.appendChild(appendAddDuplicateDelete(row, ud));
//   return checkUserTD;
// };

// let appendCheckedUserIcon = ud => {
//   let checkedUserIcon = document.createElement('img');
//   checkedUserIcon.setAttribute('src', './images/checked-user.svg');
//   checkedUserIcon.setAttribute(
//     'class',
//     `medium-icons flex checked-user-icon ${checkIconStyle(ud, 'checked')}`
//   );
//   checkedUserIcon.addEventListener('click', e => {
//     let rowId = e.target.closest('tr').id;
//     getUsersData[
//       getUsersData.findIndex(el => el.idNumber === rowId)
//     ].checkStatus = 'unchecked';
//     showRoundIcons(getUsersData);
//     setAndRefresh(getUsersData);
//   });
//   return checkedUserIcon;
// };

// let checkIconStyle = (ud, checkSt) =>
//   ud.checkStatus === checkSt ? `` : `hidden`;
// let appendUncheckedUserIcon = ud => {
//   let uncheckedUserIcon = document.createElement('img');
//   uncheckedUserIcon.setAttribute('src', './images/unchecked-user.png');
//   uncheckedUserIcon.setAttribute(
//     'class',
//     `medium-icons flex unchecked-user-icon ${checkIconStyle(ud, 'unchecked')}`
//   );
//   uncheckedUserIcon.addEventListener('click', e => {
//     let rowId = e.target.closest('tr').id;
//     getUsersData[
//       getUsersData.findIndex(el => el.idNumber === rowId)
//     ].checkStatus = 'checked';
//     showRoundIcons(getUsersData);
//     setAndRefresh(getUsersData);
//   });
//   return uncheckedUserIcon;
// };

// let appendAddDuplicateDelete = (row, ud) => {
//   let addDuplicateDeleteDiv = document.createElement('div');
//   addDuplicateDeleteDiv.setAttribute('class', 'add-duplicate-delete hidden');
//   row.onmouseenter = () => addDuplicateDeleteDiv.classList.remove('hidden');
//   row.onmouseleave = () => addDuplicateDeleteDiv.classList.add('hidden');
//   addDuplicateDeleteDiv.appendChild(appendDeleteThisRow(ud));
//   addDuplicateDeleteDiv.appendChild(appendDuplicateThisRow());
//   addDuplicateDeleteDiv.appendChild(appendAddNewUserHere());
//   return addDuplicateDeleteDiv;
// };

// let appendDeleteThisRow = ud => {
//   let DeleteThisRow = document.createElement('img');
//   DeleteThisRow.setAttribute('class', 'delete-this medium-icons');
//   DeleteThisRow.setAttribute('src', './images/error.svg');
//   DeleteThisRow.addEventListener('click', () => {
//     if (ud.lockStatus === 'locked') {
//       errorModalMessage(lockModal);
//     } else {
//       if (confirm('Are you sure you wont to delete this user ?'))
//         getUsersData.splice(getUsersData.indexOf(ud), 1);
//     }

//     if (startingIndex.textContent > getUsersData.length) currentPage -= 1;
//     setAndRefresh(getUsersData);
//     if (getUsersData.length === 0) emptyingTable();
//   });
//   return DeleteThisRow;
// };

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

// let rowIdIndex = id =>
//   getUsersData.findIndex(element => element.idNumber === id);

// let appendDuplicateThisRow = () => {
//   let DuplicateThisRow = document.createElement('img');
//   DuplicateThisRow.setAttribute('class', 'duplicate-this medium-icons');
//   DuplicateThisRow.setAttribute('src', './images/duplicate-user.png');
//   DuplicateThisRow.addEventListener('click', e => {
//     let rowId = e.target.closest('tr').id;
//     rowIdIndex(rowId);
//     setItems(rowIdIndex(rowId), 'duplicate');
//     updatedUser(userIndex());
//     setLocalStorage('userToUpdate', JSON.stringify(updatedUser(userIndex())));
//     redirectWebpage('../form.html');
//   });
//   return DuplicateThisRow;
// };

// let appendAddNewUserHere = () => {
//   let AddNewUserHere = document.createElement('img');
//   AddNewUserHere.setAttribute('class', 'add-new-user-here medium-icons');
//   AddNewUserHere.setAttribute('src', './images/add.png');
//   AddNewUserHere.addEventListener('click', e => {
//     let rowId = e.target.closest('tr').id;
//     rowIdIndex(rowId);
//     setItems(rowIdIndex(rowId), 'Add Here');
//     localStorage.removeItem('userToUpdate');
//     redirectWebpage('../form.html');
//   });
//   return AddNewUserHere;
// };

// let forcedCheck = ud => {
//   checkAll.checked = ud.every(element => element.checkStatus === 'checked')
//     ? true
//     : false;
// };

// checkAll.addEventListener('click', () => {
//   checkAllUsers(totalRowsPerPage);
//   setAndRefresh(getUsersData);
//   showRoundIcons(getUsersData);
// });

// let checkAllUsers = arr => {
//   arr.forEach(
//     element =>
//       (element.checkStatus = checkAll.checked ? 'checked' : 'unchecked')
//   );
// };

// let showRoundIcons = ud => {
//   if (ud.some(element => element.checkStatus === 'checked')) {
//     removeTwoHiddenClassLists(printUserRound, deleteUserRound);
//     removeTwoHiddenClassLists(lockUserRound, uncheckAllUsersRound);
//     unlockUserRound.classList.remove('hidden');
//   } else {
//     addTwoHiddenClassLists(printUserRound, deleteUserRound);
//     addTwoHiddenClassLists(lockUserRound, uncheckAllUsersRound);
//     unlockUserRound.classList.add('hidden');
//   }
// };

// let uncheckedAll = ud => {
//   ud.forEach(element => (element.checkStatus = 'unchecked'));
//   setAndRefresh(ud);
// };

// let appendFullNameIdNumberTD = (fNm, idNb) => {
//   let FullNameIdNumberTD = document.createElement('td');
//   FullNameIdNumberTD.setAttribute('class', 'full-name-id-number-td');
//   FullNameIdNumberTD.innerHTML = `
// <td class="full-name-id-number-td">
// <p class="full-name">${fNm.toLowerCase()}</p>
// <p class="id-number">${idNb}</p>
// </td>`;
//   return FullNameIdNumberTD;
// };

// let appendDescriptionTD = des => {
//   let DescriptionTD = document.createElement('td');
//   DescriptionTD.setAttribute('class', 'description-td');
//   DescriptionTD.innerHTML = `<p class="description">${des}</p>`;
//   return DescriptionTD;
// };

// let appendRateCurrencyTD = (rt, crr) => {
//   let RateCurrencyTD = document.createElement('td');
//   RateCurrencyTD.setAttribute('class', 'rate-currency-td');
//   RateCurrencyTD.innerHTML = `
// <p class="rate right-text-align">${Number(rt).toFixed(2)}</p>
// <p class="currency right-text-align">${crr}</p>`;
//   return RateCurrencyTD;
// };

// let appendBalanceCurrencyTD = (bal, crr) => {
//   let BalanceCurrencyTD = document.createElement('td');
//   BalanceCurrencyTD.setAttribute('class', 'balance-currency-td');
//   BalanceCurrencyTD.innerHTML = `<p class="balance right-text-align ${checkBalance(
//     bal
//   )}">${Number(bal).toFixed(2)}</p>
// <p class="currency right-text-align">${crr}</p>`;
//   return BalanceCurrencyTD;
// };

// let checkBalance = b => (b > 0 ? 'positive' : b < 0 ? 'negative' : '');

// let appendDepositCurrencyTD = (dp, crr) => {
//   let DepositCurrencyTD = document.createElement('td');
//   DepositCurrencyTD.setAttribute('class', 'deposit-currency-td');
//   DepositCurrencyTD.innerHTML = `
// <p class="deposit right-text-align">${Number(dp).toFixed(2)}</p>
// <p class="currency right-text-align">${crr}</p>`;
//   return DepositCurrencyTD;
// };

// let appendStatusTD = (ud, st) => {
//   let StatusTD = document.createElement('td');
//   StatusTD.setAttribute('class', 'status-td center-text-align');
//   let activityBtn = document.createElement('button');
//   activityBtn.setAttribute('class', `${showStatus(st)}`);
//   activityBtn.innerHTML = `${st}`;
//   activityBtn.addEventListener('click', () => {
//     if (ud.lockStatus === 'locked') {
//       errorModalMessage(lockModal);
//     } else {
//       ud.status = st === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
//       setAndRefresh(getUsersData);
//     }
//   });
//   StatusTD.appendChild(activityBtn);
//   return StatusTD;
// };

// let showStatus = sts => `${sts.toLowerCase()}-btn`;

// let appendMoreTD = ud => {
//   let moreTD = document.createElement('td');
//   let moreDiv = document.createElement('div');
//   moreTD.setAttribute('class', 'center-text-align');
//   moreDiv.setAttribute('class', 'flex-btwn');
//   moreTD.appendChild(moreDiv);
//   moreDiv.appendChild(appendEditUserIcon(ud));
//   moreDiv.appendChild(appendStrongLockUserIcon(ud));
//   moreDiv.appendChild(appendWeakLockUserIcon(ud));
//   return moreTD;
// };

// let appendEditUserIcon = ud => {
//   let EditUserIcon = document.createElement('img');
//   EditUserIcon.setAttribute('src', './images/b-edit-user.svg');
//   EditUserIcon.setAttribute('class', 'medium-icons');

//   EditUserIcon.addEventListener('click', e => {
//     if (ud.lockStatus === 'locked') {
//       errorModalMessage(lockModal);
//     } else {
//       let rowId = e.target.closest('tr').id;
//       rowIdIndex(rowId);
//       setItems(rowIdIndex(rowId), 'Update');
//       setLocalStorage('userToUpdate', JSON.stringify(updatedUser(userIndex())));
//       getUsersData.splice(rowIdIndex(rowId), 1);
//       setLocalStorage('usersData', JSON.stringify(getUsersData));
//       redirectWebpage('../form.html');
//     }
//   });
//   return EditUserIcon;
// };

// let appendStrongLockUserIcon = ud => {
//   let strongLockUserIcon = document.createElement('img');
//   strongLockUserIcon.setAttribute('src', './images/strong-lock-user.png');
//   strongLockUserIcon.setAttribute(
//     'class',
//     `${checkLockStatus(ud, 'locked')} medium-icons black-print-user-icon `
//   );
//   strongLockUserIcon.addEventListener('click', () => {
//     ud.lockStatus = 'not locked';
//     setAndRefresh(getUsersData);
//   });
//   return strongLockUserIcon;
// };

// let appendWeakLockUserIcon = ud => {
//   let weakLockUserIcon = document.createElement('img');
//   weakLockUserIcon.setAttribute('src', './images/weak-lock-user.png');
//   weakLockUserIcon.setAttribute(
//     'class',
//     `${checkLockStatus(ud, 'not locked')} medium-icons black-print-user-icon `
//   );
//   weakLockUserIcon.addEventListener('click', () => {
//     ud.lockStatus = 'locked';
//     setAndRefresh(getUsersData);
//   });
//   return weakLockUserIcon;
// };

// let checkLockStatus = (ud, lockSt) =>
//   ud.lockStatus === lockSt ? `` : `hidden`;

// tfoot
// let tableFooterColor = arr =>
//   (tableFooter.style.backgroundColor = arr.length % 2 != 0 ? '#f4f7fc' : '');

// // active Users :
// let showActiveUsers = arr => {
//   let numberOfActiveUsers = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].status === 'ACTIVE') numberOfActiveUsers.push(arr[i].status);
//   }
//   return numberOfActiveUsers.length;
// };

// // Locked Users :
// let showLockedUsers = arr => {
//   let numberOfLockedUsers = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].lockStatus === 'locked')
//       numberOfLockedUsers.push(arr[i].lockStatus);
//   }
//   return numberOfLockedUsers.length;
// };

// // rows per page
// let rowsPerPageValueOnChange = rowsPerPage.addEventListener('change', e => {
//   e = rowsPerPage.value;
//   currentPage = 0;
//   refresh(getUsersData);
// });

// // next / previous page :
// blackLeftArrow.onmouseenter = () =>
//   removeAndAddHiddenClassLists(colorLeftArrow, blackLeftArrow);

// colorLeftArrow.onmouseleave = () =>
//   removeAndAddHiddenClassLists(blackLeftArrow, colorLeftArrow);

// blackRightArrow.onmouseenter = () =>
//   removeAndAddHiddenClassLists(colorRightArrow, blackRightArrow);

// colorRightArrow.onmouseleave = () =>
//   removeAndAddHiddenClassLists(blackRightArrow, colorRightArrow);

// colorRightArrow.addEventListener('click', () => {
//   if ((currentPage + 1) * rowsPerPage.value < getUsersData.length)
//     currentPage++;
//   refresh(getUsersData);
//   if (startingIndex.textContent == 0) currentPage--;
//   refresh(getUsersData);
// });

// colorLeftArrow.addEventListener('click', () => {
//   if (currentPage != 0) currentPage--;
//   refresh(getUsersData);
// });





////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// let extractID = () => {
//   if (
//     localStorage.getItem('operation') === 'Add Here' ||
//     localStorage.getItem('operation') === 'duplicate'
//   ) {
//     return getUsersData[userIndex() + 1].idNumber;
//   } else {
//     return getUsersData[userIndex()].idNumber;
//   }
// };
// let highlightUser = id => {
//   let goTo = document.getElementById(id);
//   goTo.classList.add('green-border');
//   goTo.scrollIntoView({ block: 'center' });
//   setTimeout(hideSuccessBorder, 4000, goTo);
// };

// // on Reload
// ///////////////////////////////////////////////////////////////////
// // Render
// let refresh = arrayToRender => {
//   tableBody.innerHTML = null;
//   let selectedRowsPerPage = rowsPerPageValueOnChange || rowsPerPage.value;
//   let filteredUsers = filteredArr(arrayToRender) || arrayToRender;
//   let sortFiltered = filteredUsers.slice() || filteredUsers;
//   sortedArr(sortFiltered);
//   totalRowsPerPage = sortFiltered.slice(
//     currentPage * selectedRowsPerPage,
//     (currentPage + 1) * selectedRowsPerPage
//   );
//   tableFooterColor(totalRowsPerPage);
//   totalOfLockedUsers.textContent = showLockedUsers(sortFiltered);
//   totalOfCheckedUsers.textContent = `(${showTotalOfCheckedUsers(
//     arrayToRender
//   )})`;
//   activeUsers.textContent = showActiveUsers(sortFiltered);
//   totalOfUsers.forEach(element => (element.textContent = sortFiltered.length));
//   startingIndex.textContent =
//     totalRowsPerPage.length != 0
//       ? currentPage * selectedRowsPerPage + 1
//       : totalRowsPerPage.length;
//   endingIndex.textContent =
//     totalRowsPerPage.length -
//     selectedRowsPerPage +
//     selectedRowsPerPage * (currentPage + 1);
//   totalRowsPerPage.forEach(element =>
//     tableBody.appendChild(addNewUser(element))
//   );
//   forcedCheck(totalRowsPerPage);
// };

// if (getLocalStorageUsersData == null) {
//   setLocalStorage('usersData', JSON.stringify(users));
//   refresh(getUsersData);
// } else if (getLocalStorageUsersData == '[]') {
//   emptyingTable();
// } else {
//   refresh(getUsersData);
// }

// // window.location.reload(uncheckedAll(getUsersData));

// // window.onload = () => uncheckedAll(getUsersData);
// // window.location.reload(true);
// showRoundIcons(getUsersData);
// highlightUser(extractID());
// localStorage.removeItem('index');
// sortedArrByLocalFilter(getUsersData);



















//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////









