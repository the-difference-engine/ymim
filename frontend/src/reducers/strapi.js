const initialState = {
  email: "founder@ymim.org",
  phone: "773.941.1200",
  taxId: "82-1904373"
};

export default function email(state = initialState, action) {
  switch (action.type) {
    case "GET_EMAIL":
      return { ...state, email: action.response.data[0].email };
    case "GET_PHONE":
      return { ...state, phone: action.response.data[0].phone };
    case "GET_TAXID":
      return { ...state, taxId: action.response.data[0].taxId };

    default:
      return state;
  }
}
