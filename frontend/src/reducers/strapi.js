const initialState = {
  email: "founder@ymim.org",
  phone: "773.941.1200"
};

export default function email(state = initialState, action) {
  switch (action.type) {
    case "GET_EMAIL":
      return { ...initialState, email: action.response.data[0].email };
    case "GET_PHONE":
      return { ...initialState, phone: action.response.data[0].phone };

    default:
      return state;
  }
}
