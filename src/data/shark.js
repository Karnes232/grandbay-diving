import photo1 from "../images/webP/shark/1.webp"
import photo2 from "../images/webP/shark/2.webp"
import photo3 from "../images/webP/shark/3.webp"
import photo4 from "../images/webP/shark/4.webp"
import photo5 from "../images/webP/shark/5.webp"
import photo6 from "../images/webP/shark/6.webp"
import photo7 from "../images/webP/shark/7.webp"
import photo8 from "../images/webP/shark/8.webp"
import photo9 from "../images/webP/shark/9.webp"
import photo10 from "../images/webP/shark/10.webp"

export const shark = [
  {
    id: 1,
    link: "/shark-dive-punta-cana",
    name: "Shark Point",
    title: "Shark Diving in Punta Cana",
    title2:
      "Experience the Thrill of Shark Diving in Punta Cana with Grand Bay of the Sea",
    paragraph:
      "Are you an experienced diver looking for an adventure that will take your skills to the next level? Look no further than Grand Bay of the Sea's shark diving tours in Punta Cana! Our tours offer thrilling opportunities to dive to depths of up to 25 meters and encounter a variety of shark species in their natural habitat.",
    paragraph2:
      "Led by our experienced dive instructors, our shark diving tours take you to some of the best dive sites in the Dominican Republic, where you can see nurse sharks, blacktip sharks, and occasionally even rare hammerhead sharks. Our instructors will guide you through the dive sites and ensure that you have a safe and enjoyable experience.",
    details:
      "At Grand Bay of the Sea, we use only the best equipment and adhere to strict safety protocols, so you can focus on enjoying the adventure. Our shark diving tours are suitable for advanced divers who are comfortable diving to depths of up to 25 meters.",
    details2:
      "If you're new to diving or not yet comfortable at that depth, we recommend taking our training and certification courses first.",
    details3:
      "So why wait? Book your shark diving tour with Grand Bay of the Sea today and experience the thrill of diving with sharks in Punta Cana!",
    // details3:
    //   "In your confined water dives you will learn all you need to know in how to use scuba equipment and be able to handle yourself under water as well as being prepared for any situation in the open water. We prefer to take a little more time with you in the pool so that you are 100% comfortable when you go diving in the open water. Not only will you learn a lot, you will a have a lot of fun swimming around under water.",
    // details4:
    //   "The open water portion of the course consists of 2 open water dives where you will perform various dive skills both under water and at the surface to make sure that you are a competent and safe diver. We break up the skills over the 2 dives so that you only are doing a few skills each dive and get to spend the majority of your time diving with your instructor and exploring the underwater world.",
    overview: {
      level: "Advanced",
      price: 199,
      duration: "2.5 Hours",
    },
    photos: [
      { photo1 },
      { photo2 },
      { photo3 },
      { photo4 },
      { photo5 },
      { photo6 },
      { photo7 },
      { photo8 },
      { photo9 },
      { photo10 },
    ].sort(() => Math.random() - 0.5),
  },
]
