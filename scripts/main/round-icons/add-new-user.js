// Add User Icon Style
addUserRound.onmouseenter = () =>
  removeAndAddHiddenClassLists(addUserColoredIcon, addUserBlackIcon);

addUserRound.onmouseleave = () =>
  removeAndAddHiddenClassLists(addUserBlackIcon, addUserColoredIcon);

addUserRound.addEventListener('click', () => {
  setItems('0', 'Add New');
  // localStorage.removeItem('userToUpdate');
  redirectWebpage('../form.html');
});
