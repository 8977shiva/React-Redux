export default function coursesReducer(state = [], action) {
  console.log(JSON.stringify(action.course));
  switch (action.type) {
    case "CREATE_COURSE":
      // debugger;
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
