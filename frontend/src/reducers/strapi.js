const initialState = {
  email: "founder@ymim.org",
  phone: "773.941.1200",
  taxId: "82-1904373",
  donateLink: "https://www.paypal.com/",
  token: ""
};

export default function getStrapi(state = initialState, action) {
  switch (action.type) {
    case "GET_EMAIL":
      return { ...state, email: action.response.data[0].email };
    case "GET_PHONE":
      return { ...state, phone: action.response.data[0].number };
    case "GET_TAXID":
      return { ...state, taxId: action.response.data[0].taxId };
    case "GET_DONATELINK":
      return {
        ...state,
        donateLink: action.response.data[0].paypal,
        token: action.response.data[0].token
      };
    case "GET_SOCIAL":
      return {
        ...state,
        instagram: action.response.data[2].instagram,
        facebook: action.response.data[1].facebook,
        twitter: action.response.data[0].twitter
      };
    default:
      return state;
  }
}
