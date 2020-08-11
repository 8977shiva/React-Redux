export default function coursesReducer(action, state = []) {
  switch (action.type) {
    case "CREATE_COURSE":
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
