// Submit Progress Bar
let addProgressValue = i => {
  if (inputDiv[i].classList.contains('valid-border')) {
    if (!subValidArr.includes(i)) subValidArr.push(i);
  } else {
    if (subValidArr.includes(i)) subValidArr.splice(subValidArr.indexOf(i), 1);
  }
  progressValue.textContent = (100 / inputDiv.length) * subValidArr.length;
  progressColor.style.width = `${progressValue.textContent}%`;
};

// Update Progress Bar
let removeProgressValue = i => {
  if (!inputDiv[i].classList.contains('valid-border')) {
    if (updValidArr.includes(i)) updValidArr.splice(updValidArr.indexOf(i), 1);
  } else {
    if (!updValidArr.includes(i)) updValidArr.push(i);
  }
  progressValue.textContent = (100 / inputDiv.length) * updValidArr.length;
  progressColor.style.width = `${progressValue.textContent}%`;
};

let updateProgressBar = num => {
  progressValue.textContent = num;
  progressColor.style.width = `${progressValue.textContent}%`;
};

// Show Operation Btns
let showOperationBtns = (arr1, arr2) => {
  arr1.forEach(element => element.classList.remove('hidden'));
  arr2.forEach(element => element.classList.add('hidden'));
};

// Pre-Fill Form
let preFillInputs = () => {
  fullNameInput.value = thisUrlParams.get('fullName');
  idNumberInput.value = thisUrlParams.get('idNumber');
  descriptionInput.value = thisUrlParams.get('description');
  currencyInput.value = thisUrlParams.get('currency');
  depositInput.value = thisUrlParams.get('deposit');
  rateInput.value = thisUrlParams.get('rate');
  balanceInput.value = thisUrlParams.get('balance');
  statusInput.value = thisUrlParams.get('status');
  mixinFormErrors(getUsersData);
  formInputAndBlurErrors(removeProgressValue, getUsersData);
};

let preFillForm = () => {
  if (localStorage.getItem('operation') === 'Update') {
    preFillInputs();
    updateProgressBar(100);
    showOperationBtns(updateBtns, submitBtns);
  } else if (localStorage.getItem('operation') === 'duplicate') {
    preFillInputs();
    updValidArr = [2, 3, 4, 5, 6, 7];
    updateProgressBar(75);
    showOperationBtns(submitBtns.splice(1), [...updateBtns, ...submitBtns]);
  } else {
    formInputAndBlurErrors(addProgressValue, getUsersData);
    showOperationBtns(submitBtns, updateBtns);
    console.log(submitBtns);
  }
};

preFillForm();

// Form Operations
let userObj = checkSt => {
  let user = {
    fullName: fullNameInput.value,
    idNumber: idNumberInput.value,
    description: descriptionInput.value,
    currency: currencyInput.value,
    deposit: depositInput.value,
    rate: rateInput.value,
    balance: balanceInput.value,
    status: statusInput.value,
    lockStatus: 'not locked',
    checkStatus: checkSt,
  };
  return user;
};

let cancelUpdateObj = () => {
  let user = {
    fullName: thisUrlParams.get('fullName'),
    idNumber: thisUrlParams.get('idNumber'),
    description: thisUrlParams.get('description'),
    currency: thisUrlParams.get('currency'),
    deposit: thisUrlParams.get('deposit'),
    rate: thisUrlParams.get('rate'),
    balance: thisUrlParams.get('balance'),
    status: thisUrlParams.get('status'),
    lockStatus: thisUrlParams.get('lockStatus'),
    checkStatus: thisUrlParams.get('checkStatus'),
  };
  return user;
};

let submitUser = () => {
  userObj('unchecked');
  getUsersData.splice(extractIndex(), 0, userObj('unchecked'));
  setLocalStorage('usersData', JSON.stringify(getUsersData));
};

let resetForm = () => {
  inputDiv.forEach(element => {
    element.classList.remove('valid-border');
    element.classList.remove('error-border');
  });
  inputArea.forEach(element => (element.value = ''));
  validIcon.forEach(element => element.classList.add('hidden'));
  errorIcon.forEach(element => element.classList.add('hidden'));
  errors.forEach(element => element.classList.add('non-visible'));
  progressValue.textContent = '0';
  progressColor.style.width = '1%';
  subValidArr = [];
};

let updatedObj = obj => {
  getUsersData.splice(userIndex(), 0, obj);
  setLocalStorage('usersData', JSON.stringify(getUsersData));
};

let updateUser = checkSt => {
  if (
    Object.entries(inputDiv).every(element =>
      element[1].classList.contains('valid-border')
    )
  ) {
    userObj(checkSt);
    updatedObj(userObj(checkSt));
  }
};

//Form Btns Handel Events :
submitBtn.addEventListener('click', () => {
  if (
    Object.entries(inputDiv).every(element =>
      element[1].classList.contains('valid-border')
    )
  ) {
    submitUser();
    redirectWebpage('../index.html');
  } else {
    mixinFormErrors(getUsersData);
  }
});

clearBtn.onclick = () => resetForm();

cancelSubmitBtn.onclick = () => {
  redirectWebpage('../index.html');
  localStorage.removeItem('index');
  setLocalStorage('operation', 'Cancel Submit');
};

updateUserBtn.onclick = () => {
  updateUser(thisUrlParams.get('checkStatus'));
  redirectWebpage('../index.html');
};

cancelUpdateBtn.onclick = () => {
  updatedObj(cancelUpdateObj());
  setLocalStorage('operation', 'Cancel Update');
  redirectWebpage('../index.html');
};
