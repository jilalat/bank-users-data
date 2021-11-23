let getLocalStorageUsersData = localStorage.getItem('usersData');
let getUsersData = JSON.parse(getLocalStorageUsersData);

let getOperation = localStorage.getItem('operation');

let getIndex = localStorage.getItem('index');

// let getLocalStorageUserToUpdate = localStorage.getItem('userToUpdate');
// let getUserToUpdate = JSON.parse(getLocalStorageUserToUpdate);

let getCurrentPage = localStorage.getItem('page');

let getRowsPerPage = localStorage.getItem('rows');

let getFilter = localStorage.getItem('filter');

let getSearch = localStorage.getItem('search');

let filterArray = JSON.parse(getFilter) || ['defaultName', 'defaultStatus'];




