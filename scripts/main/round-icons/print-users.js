// Print Users Icon Style
let printUsers = userData => {
  let {
    fullName,
    idNumber,
    description,
    currency,
    deposit,
    rate,
    balance,
    status,
  } = userData;
  let UserRow = document.createElement('tr');
  UserRow.innerHTML = `<td class="r-border">
<p class="full-name">${fullName.toLowerCase()}</p>
<p class="id-number">${idNumber}</p></td>
<td class="r-border"><p class="description">${description}</p></td>
<td class="r-border">
<p class="rate right-text-align">${Number(rate).toFixed(2)}</p>
<p class="currency right-text-align">${currency}</p></td>
<td class="r-border">
<p class="balance right-text-align ${checkBalance(balance)}">${Number(
    balance
  ).toFixed(2)}</p>
<p class="currency right-text-align">${currency}</p></td>
<td class="r-border">
<p class="deposit right-text-align">${Number(deposit).toFixed(2)}</p>
<p class="currency right-text-align">${currency}</p></td>
<td class="r-border print-status-td center-text-align">
<button id="" class="print-status">${status}</button></td>`;
  return UserRow;
};

let printPDF = () => {
  addTwoHiddenClassLists(blueUpIcon[1], blueDownIcon[1]);
  addTwoHiddenClassLists(blueUpIcon[0], blueDownIcon[0]);
  addTwoHiddenClassLists(tableCheckUser, tableFooter);
  addTwoHiddenClassLists(tableMore, topIcons);
  dashboard.style.padding = '0px';
  dashboard.style.border = 'none';
  tableHead.style.position = 'static';
  printTableStyle.slice(1).forEach(element => {
    element.style.border = '1px solid #000000';
  });
  tableBody.innerHTML = null;
};

let resetDataAfterPrint = () => {
  removeTwoHiddenClassLists(tableFooter, tableCheckUser);
  removeTwoHiddenClassLists(tableMore, topIcons);
  // main.scrollIntoView();
  tableHead.style.position = '';
  dashboard.style.padding = '40px';
  printTableStyle.forEach(element => (element.style.border = ''));
};

printUserRound.onmouseenter = () =>
  removeAndAddHiddenClassLists(printUserColoredIcon, printUserBlackIcon);

printUserRound.onmouseleave = () =>
  removeAndAddHiddenClassLists(printUserBlackIcon, printUserColoredIcon);

printUserRound.addEventListener('click', () => {
  let printCheckedElements = [];
  getUsersData.forEach(element => {
    if (element.checkStatus === 'checked') printCheckedElements.push(element);
  });
  printPDF();
  printCheckedElements.forEach(el => tableBody.appendChild(printUsers(el)));
  window.print();
  resetDataAfterPrint();
  refresh(getUsersData);
  console.log(printCheckedElements);
});
