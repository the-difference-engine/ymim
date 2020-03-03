import Sponsor1 from "../assets/IDPH logo.PNG";
import Sponsor2 from "../assets/24thDistrict Police.PNG";
import Sponsor3 from "../assets/Citron Hygiene.jpg";
import Sponsor4 from "../assets/evanston Police.jpg";
import Sponsor5 from "../assets/first united methodist Church.png";
import Sponsor6 from "../assets/FlatTop Grill.png";
import Sponsor7 from "../assets/HomersIceCreamLogo200.jpg";
import Sponsor8 from "../assets/Kiwanis Logo (1).jpg";
import Sponsor9 from "../assets/Logo2.jpg";
import Sponsor10 from "../assets/Roger's Park Library.PNG";
import Sponsor11 from "../assets/uic logo2.png";
import Sponsor12 from "../assets/Walmart_logo.svg.png";

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
  video3: "https://www.youtube.com/embed/GwXt3tL6FqY",
  sponsors: [
    Sponsor1,
    Sponsor2,
    Sponsor3,
    Sponsor4,
    Sponsor5,
    Sponsor6,
    Sponsor7,
    Sponsor8,
    Sponsor9,
    Sponsor10,
    Sponsor11,
    Sponsor12
  ]
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
        twitter: action.response.data.twitter,
        facebook: action.response.data.facebook,
        instagram: action.response.data.instagram
      };
    case "GET_VOLUNTEERSVIDEOS":
      return {
        ...state,
        video1: action.response.data[0].videos,
        video2: action.response.data[1].videos,
        video3: action.response.data[2].videos
      };
    case "GET_SPONSORS":
      return { ...state, sponsors: action.response.data };
    case "GET_ABOUT":
      return {
        ...state,
        aboutKim: action.response.data[0].aboutKim,
        aboutPierre: action.response.data[0].aboutPierre,
        aboutShirley: action.response.data[0].aboutShirley,
        kimPhoto: action.response.data[0].kimPhoto[0].url,
        pierrePhoto: action.response.data[0].pierrePhoto[0].url,
        shirleyPhoto: action.response.data[0].shirleyPhoto[0].url
      };
    default:
      return state;
  }
}
