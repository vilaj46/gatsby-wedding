import church from "../images/icons/church.svg";
import cracker from "../images/icons/cracker.svg";
import heart from "../images/icons/heart.svg";

const data = {
  bride: {
    first: "Danielle",
    last: "Smith",
  },
  groom: {
    first: "Julian",
    last: "Vila",
  },
  ourStory:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  nav: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Info",
      href: "/info",
    },
    {
      label: "Wedding Party",
      href: "/wedding-party",
    },
    // {
    //   label: "Reservation",
    //   href: "/reservation",
    // },
    // {
    //   label: "Contact",
    //   href: "/contact",
    // },
  ],

  // Information Page
  infos: [
    {
      label: "Our wedding day",
      time: "26th November, 2021",
      desc: "Lucky!",
      icon: heart,
    },
    {
      label: "Reception",
      time: "5:00 PM",
      desc: `The Vineyards at Aquebogue 
             978 Main Rd, Riverhead,
             NY 11931`,
      icon: cracker,
    },
    {
      label: "Ceremony",
      time: "12:30 AM",
      desc: "St Anne's Church 35 Dartmouth St, Garden City, NY 11530",
      icon: church,
    },
  ],

  // Wedding Party
  weddingParty: [
    {
      name: "Matron of Honor", // Amy Smith
      title: "matron of honor",
      search: "matron",
      pic: "../../images/weddingParty/matronHonor.png"
    },
    {
      name: "Best Man", // Nicolas Vila
      title: "best man",
      search: "bestman",
    },
    {
      name: "Maid of Honor 1", // Paulette Mocahsi
      title: "Maid of Honor 1",
      search: "mh1",
    },
    {
      name: "Groomsman 1", // Evan Ng
      title: "Groomsman 1",
      search: "gm1",
    },
    {
      name: "Maid of Honor 2", // Lauren Evangelista
      title: "Maid of Honor 2",
      search: "mh2",
    },
    {
      name: "Groomsman 2", // Greg Giordano
      title: "Groomsman 2",
      search: "gm2",
    },
    {
      name: "Maid of Honor 3", // Cailin Grant
      title: "Maid of Honor 3",
      search: "mh3",
    },
    {
      name: "Groomsman 3", // Tj Gullo
      title: "Groomsman 3",
      search: "gm3",
    },
    {
      name: "Maid of Honor 4", // Emily ____
      title: "Maid of Honor 4",
      search: "mh4",
    },
    {
      name: "Groomsman 4", // Sara Vila
      title: "Groomsman 4",
      search: "gm4",
    },
    {
      name: "Maid of Honor 5", // Sara Vila
      title: "Maid of Honor 5",
      search: "mh5",
    },
  ],
};

export default data;
