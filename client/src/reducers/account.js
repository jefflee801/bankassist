const account = (state = {}, action) => {
  switch (action.type) {
    case 'SELECTED':
      return { ...action.account };
    case 'NOTSELECTED':
      return {};
    default:
      return state;
  }
};

export default account;
