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
      label: "Reservation",
      href: "/reservation",
    },
    {
      label: "Contact",
      href: "/contact",
    },
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
};

export default data;