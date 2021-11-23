// Lock Users Icon Style
lockUserRound.onmouseenter = () =>
  removeAndAddHiddenClassLists(lockUserColoredIcon, lockUserBlackIcon);

lockUserRound.onmouseleave = () =>
  removeAndAddHiddenClassLists(lockUserBlackIcon, lockUserColoredIcon);

lockUserRound.addEventListener('click', () => {
  getUsersData.forEach(element => {
    if (element.checkStatus === 'checked') element.lockStatus = 'locked';
  });
  setAndRefresh(getUsersData);
});

// Unlock Users Icon Style
unlockUserRound.onmouseenter = () =>
  removeAndAddHiddenClassLists(unlockUserColoredIcon, unlockUserBlackIcon);

unlockUserRound.onmouseleave = () =>
  removeAndAddHiddenClassLists(unlockUserBlackIcon, unlockUserColoredIcon);

unlockUserRound.addEventListener('click', () => {
  getUsersData.forEach(element => {
    if (element.checkStatus === 'checked') element.lockStatus = 'not locked';
  });
  setAndRefresh(getUsersData);
});
