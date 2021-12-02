// Form Errors
let onValid = k => {
  inputDiv[k].classList.add('valid-border');
  inputDiv[k].classList.remove('error-border');
  errors[k].classList.add('non-visible');
  removeAndAddHiddenClassLists(validIcon[k], errorIcon[k]);
};

let onError = k => {
  inputDiv[k].classList.add('error-border');
  errors[k].classList.remove('non-visible');
  errors[k].textContent = 'This field is required';
  inputDiv[k].classList.remove('valid-border');
  removeAndAddHiddenClassLists(errorIcon[k], validIcon[k]);
};

let mustBeNumber = (value, index) => {
  if (value.trim() == '') {
    onError(index);
  } else if (!isNaN(value) && value.trim() !== '') {
    onValid(index);
  } else if (isNaN(value) && value.trim() !== '') {
    onError(index);
    errors[index].textContent = `This field must be a number`;
  }
};

let fullNameInputErrors = () => {
  if (fullNameInput.value.trim() == '') {
    onError(0);
  } else if (/[^a-z A-Z]/.test(fullNameInput.value)) {
    onError(0);
    errors[0].textContent = `Customer name must be string`;
  } else {
    onValid(0);
  }
};

let fullNameExist = arr => {
  arr.forEach(element => {
    if (
      element.fullName.toLowerCase() == fullNameInput.value.toLowerCase() ||
      element.fullName.toUpperCase() == fullNameInput.value.toUpperCase()
    ) {
      onError(0);
      errors[0].textContent = `User already exists`;
    }
  });
};

let idNumberInputErrors = () => {
  if (
    !isNaN(idNumberInput.value) &&
    idNumberInput.value.length != 10 &&
    idNumberInput.value.trim() !== ''
  ) {
    onError(1);
    errors[1].textContent = 'Customer number should be 10 digits';
  }
};

let idExist = arr => {
  arr.forEach(element => {
    if (element.idNumber == idNumberInput.value) {
      onError(1);
      errors[1].textContent = `User ID Number already exists`;
    }
  });
};

let descriptionInputErrors = () => {
  if (descriptionInput.value.length >= 10) {
    onValid(2);
  } else {
    onError(2);
    if (
      descriptionInput.value.trim() !== '' &&
      descriptionInput.value.length > 0 &&
      descriptionInput.value.length < 10
    ) {
      errors[2].textContent = 'Description should at least have 10 characters';
    }
  }
};

let currencyInputErrors = () => {
  if (currencyInput.value != '') {
    onValid(3);
  } else {
    onError(3);
    errors[3].textContent = 'You must choose a Currency';
  }
};

let statusInputErrors = () => {
  if (statusInput.value != '') {
    onValid(7);
  } else {
    onError(7);
    errors[7].textContent = 'This field is required';
  }
};

let mixinFormErrors = arr => {
  fullNameInputErrors();
  mustBeNumber(idNumberInput.value, 1);
  idNumberInputErrors();
  descriptionInputErrors();
  currencyInputErrors();
  mustBeNumber(depositInput.value, 4);
  mustBeNumber(rateInput.value, 5);
  mustBeNumber(balanceInput.value, 6);
  statusInputErrors();
  fullNameExist(arr);
  idExist(arr);
};

let formInputAndBlurErrors = (progV, arr) => {
  inputAndBlurEventListeners.forEach(event =>
    fullNameInput.addEventListener(event, () => {
      fullNameInputErrors();
      fullNameExist(arr);
      progV(0);
    })
  );

  inputAndBlurEventListeners.forEach(event =>
    idNumberInput.addEventListener(event, () => {
      mustBeNumber(idNumberInput.value, 1);
      idNumberInputErrors();
      idExist(arr);
      progV(1);
    })
  );

  inputAndBlurEventListeners.forEach(event =>
    descriptionInput.addEventListener(event, () => {
      descriptionInputErrors();
      progV(2);
    })
  );

  changeAndBlurEventListeners.forEach(event =>
    currencyInput.addEventListener(event, () => {
      currencyInputErrors();
      progV(3);
    })
  );

  inputAndBlurEventListeners.forEach(event =>
    depositInput.addEventListener(event, () => {
      mustBeNumber(depositInput.value, 4);
      progV(4);
    })
  );

  inputAndBlurEventListeners.forEach(event =>
    rateInput.addEventListener(event, () => {
      mustBeNumber(rateInput.value, 5);
      progV(5);
    })
  );

  inputAndBlurEventListeners.forEach(event =>
    balanceInput.addEventListener(event, () => {
      mustBeNumber(balanceInput.value, 6);
      progV(6);
    })
  );

  changeAndBlurEventListeners.forEach(event =>
    statusInput.addEventListener(event, () => {
      statusInputErrors();
      progV(7);
    })
  );
};