
let totalRowsPerPage;

// Top Main
// let main = document.getElementById('main');
let searchBar = document.querySelector('.search-bar');
let searchInputField = document.querySelector('.search-input-field');
let searchIcon = document.querySelector('.search-icon');
let blackSearchUserIcon = document.querySelector('.black-search-user-icon');
let colorSearchUserIcon = document.querySelector('.color-search-user-icon');
let blackDeleteSearch = document.querySelector('.black-delete-search');
let colorDeleteSearch = document.querySelector('.color-delete-search');
let filterBoard = document.querySelector('.filter-board');
let filterIcon = document.querySelector('.filter-icon');
let blackFilterUserIcon = document.querySelector('.black-filter-user-icon');
let colorFilterUserIcon = document.querySelector('.color-filter-user-icon');

let addUserRound = document.querySelector('.add-user-icons');
let addUserBlackIcon = document.querySelector('.add-user-black-icon');
let addUserColoredIcon = document.querySelector('.add-user-colored-icon');

let printUserRound = document.querySelector('.print-user-icons');
let printUserBlackIcon = document.querySelector('.print-user-black-icon');
let printUserColoredIcon = document.querySelector('.print-user-colored-icon');

let deleteUserRound = document.querySelector('.delete-user-icons');
let deleteUserColoredIcon = document.querySelector('.delete-user-colored-icon');
let deleteUserBlackIcon = document.querySelector('.delete-user-black-icon');

let lockUserRound = document.querySelector('.lock-user-icons');
let lockUserColoredIcon = document.querySelector('.lock-user-colored-icon');
let lockUserBlackIcon = document.querySelector('.lock-user-black-icon');

let unlockUserRound = document.querySelector('.unlock-user-icons');
let unlockUserColoredIcon = document.querySelector('.unlock-user-colored-icon');
let unlockUserBlackIcon = document.querySelector('.unlock-user-black-icon');

let uncheckAllUsersRound = document.querySelector('.uncheck-all-users-icons');
let uncheckAllUsersColoredIcon = document.querySelector(
  '.uncheck-all-users-colored-icon'
);
let totalOfCheckedUsers = document.querySelector('.total-of-checked-users');
// let uncheckAllUsersBlackIcon = document.querySelector(
//   '.total-of-checked-users'
// );

//dashboard
let dashboard = document.getElementById('dashboard');
let emptyData = document.querySelector('.empty-row');
let topIcons = document.querySelector('.top-icons');

// print Section
// let printCheckedElements = [];
let tableNameAndIdNumber = document.querySelector('.table-name-and-id-number');
let tableDescription = document.querySelector('.table-description');
let tableRateAndCurrency = document.querySelector('.table-rate-and-currency');
let tableBalanceAndCurrency = document.querySelector(
  '.table-balance-and-currency'
);
let tableDepositAndCurrency = document.querySelector(
  '.table-deposit-and-currency'
);
let tableStatus = document.querySelector('.table-status');

let printTableStyle = [
  dashboard,
  tableNameAndIdNumber,
  tableDescription,
  tableRateAndCurrency,
  tableBalanceAndCurrency,
  tableDepositAndCurrency,
  tableStatus,
];

// Message Modal
// let updateOrCancelModal = document.querySelector('.update-or-cancel-modal');
let lockModal = document.querySelector('.lock-modal');
let duplicateModal = document.querySelector('.duplicate-modal');
let successfullyAddUserModal = document.querySelector('.add-user-modal');
let successfullyAdded = document.querySelector('.added');
let successfullyUpdated = document.querySelector('.updated');
let successfullyAddUserModalValue = document.querySelector(
  '.add-user-modal-value'
);

// table
let table = document.querySelector('.table');

// Table Head :
let tableHead = document.querySelector('.t-head');
let tableCheckUser = document.querySelector('.table-check-user');
let tableMore = document.querySelector('.table-more');

// checkbox
let checkAll = document.getElementById('checkbox');

// Sort-by
let blueUpIcon = document.querySelectorAll('.blue-up');
let blueDownIcon = document.querySelectorAll('.blue-down');
let defaultNameRadio = document.getElementById('default-name-radio');
let azNameRadio = document.getElementById('az-name-radio');
let zaNameRadio = document.getElementById('za-name-radio');
let defaultStatusRadio = document.getElementById('default-status-radio');
let activeStatusRadio = document.getElementById('active-status-radio');
let inactiveStatusRadio = document.getElementById('inactive-status-radio');
let defaultName = document.querySelector('.default-name');
let azName = document.querySelector('.az-name');
let zaName = document.querySelector('.za-name');
let defaultStatus = document.querySelector('.default-status');
let activeStatus = document.querySelector('.active-status');
let inactiveStatus = document.querySelector('.inactive-status');

// table Body
let tableBody = document.querySelector('.table-body');
let rowIdIndexArr = [];

// Table Footer
let tableFooter = document.querySelector('.t-footer');
let totalOfLockedUsers = document.querySelector('.total-of-locked-users');
let activeUsers = document.querySelector('.active-users');
let totalOfUsers = document.querySelectorAll('.total-of-users');
let rowsPerPage = document.getElementById('rows-per-page');
let startingIndex = document.querySelector('.starting-index');
let endingIndex = document.querySelector('.ending-index');
let currentPage = 0;
let blackRightArrow = document.querySelector('.black-right-arrow');
let colorRightArrow = document.querySelector('.color-right-arrow');
let blackLeftArrow = document.querySelector('.black-left-arrow');
let colorLeftArrow = document.querySelector('.color-left-arrow');

// URLSearchParams
const formUrl = 'http://127.0.0.1:5500/form.html';
let formUrlParams = new URL(formUrl);