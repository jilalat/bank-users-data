// Progress Bar
let progressColor = document.querySelector('.progress-color');
let progressValue = document.querySelector('.progress-value');
let subValidArr = [];
let updValidArr = [0, 1, 2, 3, 4, 5, 6, 7];

// Form Inputs
let fullNameInput = document.querySelector('.full-name-input');
let idNumberInput = document.querySelector('.id-number-input');
let descriptionInput = document.querySelector('.description-input');
let currencyInput = document.querySelector('.currency-input');
let depositInput = document.querySelector('.deposit-input');
let rateInput = document.querySelector('.rate-input');
let balanceInput = document.querySelector('.balance-input');
let statusInput = document.querySelector('.status-input');

// Form Validation
let errorIcon = document.querySelectorAll('.error-icon');
let validIcon = document.querySelectorAll('.valid-icon');
let inputDiv = document.querySelectorAll('.input-div');
let inputArea = document.querySelectorAll('.input');
let errors = document.querySelectorAll('.errors');
let inputAndBlurEventListeners = ['input', 'blur'];
let changeAndBlurEventListeners = ['change', 'blur'];

// Form Btns
let submitBtn = document.querySelector('.submit-btn');
let clearBtn = document.querySelector('.clear-btn');
let cancelSubmitBtn = document.querySelector('.cancel-submit');
let updateUserBtn = document.querySelector('.update-user-btn');
let cancelUpdateBtn = document.querySelector('.cancel-update');
let submitBtns = [clearBtn, submitBtn, cancelSubmitBtn];
let updateBtns = [updateUserBtn, cancelUpdateBtn];

// URLSearchParams
let thisFormUrl = window.location.search;
const thisUrlParams = new URLSearchParams(thisFormUrl);
