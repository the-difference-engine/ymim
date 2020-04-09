const initialState = "founder@ymim.org";

export default function email(state = initialState, action) {
  switch (action.type) {
    case "GET_EMAIL":
      return action.email;

    default:
      return state;
  }
}
