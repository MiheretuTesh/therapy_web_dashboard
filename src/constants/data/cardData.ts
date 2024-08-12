import ChatRoomOne from "../../static/images/chatroom_one.jpeg";
import ChatRoomTwo from "../../static/images/chatroom_two.png";
import ChatRoomThree from "../../static/images/chatroom_three.png";
import EyeSVG from "../../static/svg/eye.svg";
import JoinSVG from "../../static/svg/Join.svg";

export const chatRoomCard = [
  {
    imageSrc:
      "https://images.unsplash.com/photo-1609234656432-603fd648adf8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Meeting Room Name 1",
  },
  {
    imageSrc:
      "https://hopeodessa.com/images/rsmedia/27a041d6fae173aed2a68957733a93bd.jpg",
    title: "Meeting Room Name 2",
  },
  {
    imageSrc:
      "https://static.wixstatic.com/media/65e615_69a9f536361b4bc88cca5e7b9390fb8f~mv2.jpg/v1/fill/w_980,h_928,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/65e615_69a9f536361b4bc88cca5e7b9390fb8f~mv2.jpg",
    title: "Meeting Room Name 4",
  },
  {
    imageSrc:
      "https://analyticalfactory.com/wp-content/uploads/2021/09/reading-book-unsplash-1024x683.jpg",
    title: "Meeting Room Name 3",
  },
];

export const friendsPageChatRoomCard = [
  {
    imageSrc: ChatRoomOne,
    title: "Video Room: Why We Love Music",
    caption: "18.10 | 12:00",
    buttons: [
      {
        imageSrc: EyeSVG,
        text: "View",
        backgroundColor: "#F368D0",
        hoverBackgroundColor: "#e05ec0",
        onClick: () => console.log("View button clicked"),
      },
      {
        imageSrc: JoinSVG,
        text: "Join",
        backgroundColor: "#8B9CFF",
        hoverBackgroundColor: "#7d8ffa",
        onClick: () => console.log("Join button clicked"),
      },
    ],
  },
  {
    imageSrc: ChatRoomTwo,
    title: "Video Room: Why We Love Music",
    caption: "18.10 | 12:00",
    buttons: [
      {
        imageSrc: EyeSVG,
        text: "View",
        backgroundColor: "#F368D0",
        hoverBackgroundColor: "#e05ec0",
        onClick: () => console.log("View button clicked"),
      },
      {
        imageSrc: JoinSVG,
        text: "Join",
        backgroundColor: "#8B9CFF",
        hoverBackgroundColor: "#7d8ffa",
        onClick: () => console.log("Join button clicked"),
      },
    ],
  },
  {
    imageSrc: ChatRoomThree,
    title: "Video Room: Why We Love Music",
    caption: "18.10 | 12:00",
    buttons: [
      {
        imageSrc: EyeSVG,
        text: "View",
        backgroundColor: "#F368D0",
        hoverBackgroundColor: "#e05ec0",
        onClick: () => console.log("View button clicked"),
      },
      {
        imageSrc: JoinSVG,
        text: "Join",
        backgroundColor: "#8B9CFF",
        hoverBackgroundColor: "#7d8ffa",
        onClick: () => console.log("Join button clicked"),
      },
    ],
  },
];
