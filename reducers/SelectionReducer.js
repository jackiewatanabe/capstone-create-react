export default (state = null, action) => {
  // console.log(action);
  // return null;
  switch (action.type) {
    case 'select_result_photo':
      return action.payload;
    default:
      return state;
  }
};
