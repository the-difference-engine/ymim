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
import PierrePriestley from "../assets/Pierre-Priestley_new.jpg";
import ShirleyScott from "../assets/Shirley-Scott_new.jpg";
import KimWright from "../assets/KWright_new.jpg";

const initialState = {
  email: "founder@ymim.org",
  number: "773.941.1200",
  taxId: "82-1904373",
  donateLink: "https://www.paypal.com/",
  token: "",
  facebook: "https://www.facebook.com/theymim/",
  instagram: "https://www.instagram.com/theyoungmasterbuilders/",
  twitter: "https://twitter.com/YMIMtweets",
  video1: "https://www.youtube.com/embed/PK9ESRMGq74",
  video2: "https://www.youtube.com/embed/jdsqht1m1rE",
  video3: "https://www.youtube.com/embed/GwXt3tL6FqY",
  sponsors_host: process.env.REACT_APP_FRONTEND_HOST,
  photosHost: process.env.REACT_APP_FRONTEND_HOST,
  sponsors: [
    { sponsors: { url: Sponsor1 } },
    { sponsors: { url: Sponsor2 } },
    { sponsors: { url: Sponsor3 } },
    { sponsors: { url: Sponsor4 } },
    { sponsors: { url: Sponsor5 } },
    { sponsors: { url: Sponsor6 } },
    { sponsors: { url: Sponsor7 } },
    { sponsors: { url: Sponsor8 } },
    { sponsors: { url: Sponsor9 } },
    { sponsors: { url: Sponsor10 } },
    { sponsors: { url: Sponsor11 } },
    { sponsors: { url: Sponsor12 } }
  ],
  kimPhoto: KimWright,
  pierrePhoto: PierrePriestley,
  shirleyPhoto: ShirleyScott,
  aboutKim:
    "Wright grew up as a youth-in-care from age 2 to 17 in multiple foster homes and a catholic orphanage after losing her mother to a premature death due to a horrific domestic violence incident. At the age of 7, Wright knew then that her life’s path would lead her serve children and young people who also grew up without the care and guidance of their own loving mother or father. Lacking mentors and relatives to share their experiences on how they made it and how she could too, caused Wright to always read and research how to do anything. Wright has worked as a reporter, writer, editor, HR manager, trainer, case manager, and director. Finally stepping out on faith to do what she had in her heart since age 7, Wright quotes Audrey Lorde, “When I dare to be powerful—to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.”",
  aboutPierre:
    "“Service to our youth today will ensure the strength of our world tomorrow.” <br /><br />  Priestley currently serves as an associate general counsel of Investment Property Exchange Services, Inc. He is an attorney and Certified Public Accountant. Priestley served in a variety of roles in large companies as a tax analyst and manager. He has worked on many community service initiatives for to equip youth and young adults.",
  aboutShirley:
    "Scott works as a perinatal network administrator and cares for women and infants. She has a special interest in the adolescent and young adult women population particularly those living in underserved areas. Scott incorporates the physical, social, emotional, and spiritual aspects of life to help women and families obtain optimal health. U.S. Air Force Veteran."
};

function getState(contentType, state, action) {
  if (action.response.data.length === 0) {
    return { ...state, [contentType]: initialState[contentType] };
  } else {
    return { ...state, [contentType]: action.response.data[0][contentType] };
  }
}

export default function getStrapi(state = initialState, action) {
  switch (action.type) {
    case "GET_EMAIL":
      return getState("email", state, action);
    case "GET_PHONE":
      return getState("number", state, action);
    case "GET_TAXID":
      return getState("taxId", state, action);
    case "GET_DONATELINK":
      if (action.response.data.length === 0) {
        return state;
      }
      return {
        ...state,
        donateLink: action.response.data[0].paypal,
        token: action.response.data[0].token
      };
    case "GET_SOCIAL":
      if (action.response.data.length === 0) {
        return state;
      }
      return {
        ...state,
        twitter: action.response.data[0].twitter,
        facebook: action.response.data[0].facebook,
        instagram: action.response.data[0].instagram
      };
    case "GET_VOLUNTEERSVIDEOS":
      if (action.response.data.length === 0) {
        return state;
      }
      return {
        ...state,
        video1: action.response.data[0].videos,
        video2: action.response.data[1].videos,
        video3: action.response.data[2].videos
      };
    case "GET_SPONSORS":
      if (action.response.data.length === 0) {
        return state;
      }
      return {
        ...state,
        sponsors: action.response.data,
        sponsors_host: process.env.REACT_APP_STRAPI_HOST
      };
    case "GET_ABOUT":
      if (action.response.data.length === 0) {
        return state;
      }
      return {
        ...state,
        aboutKim: action.response.data[0].aboutKim,
        aboutPierre: action.response.data[0].aboutPierre,
        aboutShirley: action.response.data[0].aboutShirley,
        kimPhoto: action.response.data[0].kimPhoto[0].url,
        pierrePhoto: action.response.data[0].pierrePhoto[0].url,
        shirleyPhoto: action.response.data[0].shirleyPhoto[0].url,
        photosHost: process.env.REACT_APP_STRAPI_HOST
      };
    default:
      return state;
  }
}
