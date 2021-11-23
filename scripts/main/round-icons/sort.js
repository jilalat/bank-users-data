if (getFilter == null || getFilter == '[]') {
  setLocalStorage('filter', JSON.stringify(filterArray));
}
let checkIfRadioIsChecked = (radio1, radio2) =>
  JSON.parse(getFilter)[0] === radio1 && JSON.parse(getFilter)[1] === radio2;

let forcedRadioCheck = (radio1, radio2) => {
  radio1.checked = true;
  radio2.checked = true;
};
let sortedArrByLocalFilter = () => {
  if (checkIfRadioIsChecked('azName', 'defaultStatus')) {
    forcedRadioCheck(azNameRadio, defaultStatusRadio);
  } else if (checkIfRadioIsChecked('zaName', 'defaultStatus')) {
    forcedRadioCheck(zaNameRadio, defaultStatusRadio);
  } else if (checkIfRadioIsChecked('defaultName', 'activeStatus')) {
    forcedRadioCheck(defaultNameRadio, activeStatusRadio);
  } else if (checkIfRadioIsChecked('defaultName', 'inactiveStatus')) {
    forcedRadioCheck(defaultNameRadio, inactiveStatusRadio);
  } else if (checkIfRadioIsChecked('azName', 'activeStatus')) {
    forcedRadioCheck(azNameRadio, activeStatusRadio);
  } else if (checkIfRadioIsChecked('azName', 'inactiveStatus')) {
    forcedRadioCheck(azNameRadio, inactiveStatusRadio);
  } else if (checkIfRadioIsChecked('zaName', 'activeStatus')) {
    forcedRadioCheck(zaNameRadio, activeStatusRadio);
  } else if (checkIfRadioIsChecked('zaName', 'inactiveStatus')) {
    forcedRadioCheck(zaNameRadio, inactiveStatusRadio);
  } else {
    forcedRadioCheck(defaultNameRadio, defaultStatusRadio);
  }
};


// Filter Icon Style
blackFilterUserIcon.onmouseenter = () =>
  removeAndAddHiddenClassLists(colorFilterUserIcon, blackFilterUserIcon);

colorFilterUserIcon.onmouseleave = () =>
  removeAndAddHiddenClassLists(blackFilterUserIcon, colorFilterUserIcon);

colorFilterUserIcon.onclick = () =>
  removeAndAddHiddenClassLists(filterBoard, filterIcon);



// Sort Functions
let sortByFullName = (a, b) =>
  a.fullName.toLowerCase() > b.fullName.toLowerCase()
    ? 1
    : b.fullName.toLowerCase() > a.fullName.toLowerCase()
    ? -1
    : 0;

let sortByStatus = (a, b) =>
  a.status.toLowerCase() > b.status.toLowerCase()
    ? 1
    : b.status.toLowerCase() > a.status.toLowerCase()
    ? -1
    : 0;

let radioInputsClickEvent = (index, insertedItem, radioId, arr) => {
  arr.splice(index, 1, insertedItem);
  setLocalStorage('filter', JSON.stringify(arr));
  radioId.checked = true;
  refresh(getUsersData);
};

defaultName.onclick = () => {
  radioInputsClickEvent(0, 'defaultName', defaultNameRadio, filterArray);
};

azName.addEventListener('click', () => {
  radioInputsClickEvent(0, 'azName', azNameRadio, filterArray);
});
zaName.addEventListener('click', () => {
  radioInputsClickEvent(0, 'zaName', zaNameRadio, filterArray);
});

defaultStatus.addEventListener('click', () => {
  radioInputsClickEvent(1, 'defaultStatus', defaultStatusRadio, filterArray);
});
activeStatus.addEventListener('click', () => {
  radioInputsClickEvent(1, 'activeStatus', activeStatusRadio, filterArray);
});
inactiveStatus.addEventListener('click', () => {
  radioInputsClickEvent(1, 'inactiveStatus', inactiveStatusRadio, filterArray);
});

let sortedArr = arr => {
  if (azNameRadio.checked && defaultStatusRadio.checked) {
    removeAndAddHiddenClassLists(blueUpIcon[0], blueDownIcon[0]);
    addTwoHiddenClassLists(blueUpIcon[1], blueDownIcon[1]);
    return arr.sort(sortByFullName);
  } else if (zaNameRadio.checked && defaultStatusRadio.checked) {
    removeAndAddHiddenClassLists(blueDownIcon[0], blueUpIcon[0]);
    addTwoHiddenClassLists(blueUpIcon[1], blueDownIcon[1]);
    return arr.sort(sortByFullName).reverse();
  } else if (activeStatusRadio.checked && defaultNameRadio.checked) {
    removeAndAddHiddenClassLists(blueUpIcon[1], blueDownIcon[1]);
    addTwoHiddenClassLists(blueUpIcon[0], blueDownIcon[0]);
    return arr.sort(sortByStatus);
  } else if (inactiveStatusRadio.checked && defaultNameRadio.checked) {
    removeAndAddHiddenClassLists(blueDownIcon[1], blueUpIcon[1]);
    addTwoHiddenClassLists(blueUpIcon[0], blueDownIcon[0]);
    return arr.sort(sortByStatus).reverse();
  } else if (activeStatusRadio.checked && azNameRadio.checked) {
    removeTwoHiddenClassLists(blueUpIcon[0], blueUpIcon[1]);
    addTwoHiddenClassLists(blueDownIcon[0], blueDownIcon[1]);
    return arr.sort(sortByFullName).sort(sortByStatus);
  } else if (inactiveStatusRadio.checked && azNameRadio.checked) {
    removeTwoHiddenClassLists(blueUpIcon[0], blueDownIcon[1]);
    addTwoHiddenClassLists(blueDownIcon[0], blueUpIcon[1]);
    return arr.sort(sortByFullName).reverse().sort(sortByStatus).reverse();
  } else if (activeStatusRadio.checked && zaNameRadio.checked) {
    removeTwoHiddenClassLists(blueDownIcon[0], blueUpIcon[1]);
    addTwoHiddenClassLists(blueUpIcon[0], blueDownIcon[1]);
    return arr.sort(sortByFullName).reverse().sort(sortByStatus);
  } else if (inactiveStatusRadio.checked && zaNameRadio.checked) {
    removeTwoHiddenClassLists(blueDownIcon[0], blueDownIcon[1]);
    addTwoHiddenClassLists(blueUpIcon[0], blueUpIcon[1]);
    return arr.sort(sortByFullName).sort(sortByStatus).reverse();
  } else {
    addTwoHiddenClassLists(blueUpIcon[1], blueDownIcon[1]);
    addTwoHiddenClassLists(blueUpIcon[0], blueDownIcon[0]);
  }
};

filterBoard.onchange = () => refresh(getUsersData);
filterBoard.onmouseleave = () =>
  removeAndAddHiddenClassLists(filterIcon, filterBoard);
