import ChatRoomOne from "../../static/images/chatroom_one.jpeg";
import ChatRoomTwo from "../../static/images/chatroom_two.png";
import ChatRoomThree from "../../static/images/chatroom_three.png";
import EyeSVG from "../../static/svg/eye.svg";
import JoinSVG from "../../static/svg/Join.svg";
import Profile from "../../static/images/profile.png";

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

export const meetingParticipantCard = [
  {
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/3d8d/c598/9258e71c235ab88e1603717863174370?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nD-T3IBp9DOwB3qUyCh2PBsENFtYjIumIiglaTUwBgvRtP2Wb-iS8O-IN5rZLo~FkpE77cW35S8ZWaXbHM1WCQkzx-iq6qg8CEPexWtB6tLeKObUA~HvTXmi9GvxGb4oTFJM0VKsPjrft7zVqbSacBRArexYtB88MI~oKHSV8VHVR~VrFcfnG~YvVnD-V3lWCQe6h1keaHezjHl~S53Z57rPbWBzuOkSKkCjRr3uWo4LGxIGRmDnizFvwLO1S9tsOfuRp6UNYC02KY6MkWEs5oh-Z68C1slaWcfjRtnAgzq8XxvmmYcNCR7BZXNSp03vp8Z343JH54cvlu3GYKlZnQ__",
    title: "Jack Ostin",
  },
  {
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Jack Ostin",
  },
  {
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/480a/527a/233aefcdba2d8345ebcccb8174112faa?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pHpfgbEB8gKJI3WcbNnJ6ctd2mk87Krlz135zzfbZ~pjS0TznwT3DjR-CTChlNcCUW-GLqqy8lsZBRUY1~KibgloBG~Jlo3qAMtrarRFxdiCM0t1lzJWjej-wunJvAAqVwasgyxmO4xgco7kEzH7-q7YEMRqTVLmXbxnV7Go6urZNeSY-PWya1yInrVcjUwSmisAk5rnbHQViJrQHM8MQkaQBowiJJEx93FaFGFy137m7vJcyVhrEpmvFCwLP6bWc9mrgvu4Ts0NInIvYfM1Htb9-szJ65w45gijmW~XY7f5qGISOXB8-E-9lOS1DGRY8ywZfSQbg8qKrlW6WHPilQ__",
    title: "Jack Ostin",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Jack Ostin",
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

export const therapiestPageUserCard = [
  {
    id: 1,
    imageSrc: Profile,
    title: "Dr. Laura Valexander",
    description: "8 years of experience in psychological studies",
    infoElements: ["Psychologist", "Eng", "Therapist"],
    rating: 4.5,
    ratingCount: 349,
    buttonText: "Schedule a consultation",
  },
  {
    id: 2,
    imageSrc: Profile,
    title: "Dr. John Doe",
    description: "10 years of experience in clinical psychology",
    infoElements: ["Psychologist", "Clinician", "Author"],
    rating: 4.8,
    ratingCount: 412,
    buttonText: "Book an appointment",
  },
  {
    id: 3,
    imageSrc: Profile,
    title: "Dr. Emily Smith",
    description: "5 years of experience in child psychology",
    infoElements: ["Psychologist", "Speaker"],
    rating: 4.7,
    ratingCount: 290,
    buttonText: "Consult Now",
  },
  {
    id: 4,
    imageSrc: Profile,
    title: "Dr. Robert Brown",
    description: "12 years of experience in cognitive behavioral therapy",
    infoElements: ["CBT Therapist", "Trainer", "Author"],
    rating: 4.6,
    ratingCount: 378,
    buttonText: "Get Help Today",
  },
  {
    id: 5,
    imageSrc: Profile,
    title: "Dr. Alice Johnson",
    description: "7 years of experience in family therapy",
    infoElements: ["Family Therapist", "Mediator", "Author"],
    rating: 4.4,
    ratingCount: 265,
    buttonText: "Start Session",
  },
  {
    id: 6,
    imageSrc: Profile,
    title: "Dr. Laura Valexander",
    description: "8 years of experience in psychological studies",
    infoElements: ["Psychologist", "Eng", "Therapist"],
    rating: 4.5,
    ratingCount: 349,
    buttonText: "Schedule a consultation",
  },
  {
    id: 7,
    imageSrc: Profile,
    title: "Dr. John Doe",
    description: "10 years of experience in clinical psychology",
    infoElements: ["Psychologist", "Clinician", "Author"],
    rating: 4.8,
    ratingCount: 412,
    buttonText: "Book an appointment",
  },
  {
    id: 8,
    imageSrc: Profile,
    title: "Dr. Emily Smith",
    description: "5 years of experience in child psychology",
    infoElements: ["Psychologist", "Speaker"],
    rating: 4.7,
    ratingCount: 290,
    buttonText: "Consult Now",
  },
  {
    id: 9,
    imageSrc: Profile,
    title: "Dr. Robert Brown",
    description: "12 years of experience in cognitive behavioral therapy",
    infoElements: ["CBT Therapist", "Trainer", "Author"],
    rating: 4.6,
    ratingCount: 378,
    buttonText: "Get Help Today",
  },
  {
    id: 10,
    imageSrc: Profile,
    title: "Dr. Alice Johnson",
    description: "7 years of experience in family therapy",
    infoElements: ["Family Therapist", "Mediator", "Author"],
    rating: 4.4,
    ratingCount: 265,
    buttonText: "Start Session",
  },
];

export const messageLst = [
  {
    name: "Raite",
    message: "Hi",
    current: false,
  },
  {
    name: "Jane",
    message: "Hello ",
    current: false,
  },
  {
    name: "Me",
    message: "Hello ",
    current: true,
  },
  {
    name: "Raite",
    message:
      "Tortor in mauris ipsum nisl feugiat arcu, pellentesque risus nisl.",
    current: false,
  },
  {
    name: "Raite",
    message: "Hi",
    current: false,
  },
  {
    name: "Me",
    message:
      "Tortor in mauris ipsum nisl feugiat arcu, pellentesque risus nisl.",
    current: true,
  },
];
