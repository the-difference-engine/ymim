const initialState = {
  email: "founder@ymim.org",
  phone: "773.941.1200",
  taxId: "82-1904373",
  donateLink: "https://www.paypal.com/",
  token: "",
  facebook: "https://www.facebook.com/theymim/",
  instagram: "https://www.instagram.com/theyoungmasterbuilders/",
  twitter: "https://twitter.com/YMIMtweets",
  video1: "https://www.youtube.com/embed/PK9ESRMGq74",
  video2: "https://www.youtube.com/embed/jdsqht1m1rE",
  video3: "https://www.youtube.com/embed/GwXt3tL6FqY"
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
        twitter: action.response.data[0].twitter,
        facebook: action.response.data[1].facebook,
        instagram: action.response.data[2].instagram
      };
    case "GET_VOLUNTEERSVIDEOS":
      return {
        ...state,
        video1: action.response.data[0].videos,
        video2: action.response.data[1].videos,
        video3: action.response.data[2].videos
      };
    default:
      return state;
  }
}
