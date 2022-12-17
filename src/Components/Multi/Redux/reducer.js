const initialstate = "1";

const Multi_Reducer = (state = initialstate, action) => {
  switch (action.type) {
    case "MultiplyDispatch":
      return state * action.formValue;
    default:
      return state;
  }
}

export default Multi_Reducer;