import catalina1 from "../images/webP/catalina.webp"
import catalina2 from "../images/webP/catalina2.webp"
import catalina3 from "../images/webP/catalina3.webp"
import catalina4 from "../images/webP/catalina4.webp"
import catalina5 from "../images/webP/catalina5.webp"
import catalina6 from "../images/webP/1280px-The-Aquarium-Catalina-Island.webp"
import catalina7 from "../images/webP/aviv-perets-eLfDul2Uu8k-unsplash.webp"
import catalina8 from "../images/webP/tortoise-5029662_1280.webp"

import bayahibe1 from "../images/webP/bayahibe.webp"
import bayahibe2 from "../images/webP/bayahibe1.webp"
import bayahibe3 from "../images/webP/bayahibe2.webp"
import bayahibe4 from "../images/webP/bayahibe3.webp"
import bayahibe5 from "../images/webP/octopus-428745_1920.webp"

import saona1 from "../images/webP/saona1.webp"
import saona2 from "../images/webP/saona2.webp"
import saona3 from "../images/webP/saona3.webp"
import saona4 from "../images/webP/saona4.webp"
import saona5 from "../images/webP/pexels-richard-segal-1645028.webp"

export const trips = [
  {
    id: 1,
    link: "/trips/catalina",
    name: "Catalina Island",
    overview: {
      price: 185,
      companion: 90,
      duration: "7:30 - 18:00",
      extra: "Lunch included",
      extra2: "Drinks : Alcoholic & Non-Alcoholic included",
    },
    title: "Catalina Island",
    paragraph:
      "It is a popular tourist destination and place frequented by some cruises ships of the Caribbean. Recommended activities on Catalina Island: snorkeling and diving, given the nature of its translucent waters and surrounded by live coral living in colorful fish. Isla Catalina, is an ideal option to take as an excursion if you are spending your vacations in La Romana, Punta Cana.",
    paragraph2:
      "<strong>THE WALL:</strong> This spectacular drop-off is definitely one of the best dive sites in the Dominican Republic. A gentle slope leads towards the wall. On the top reef you will enjoy the abundant marine life. Every square centimeter of this sea bed is covered with sponges and hard or soft coral. The depth of this terrace varies from 1.5 to 6 meters. The drop-off is fully overgrown with coral and the crevices hide a tremendous amount of reef creatures. We restrict the depth even for advanced divers to 30 meters.",
    paragraph3:
      "<strong>THE AQUARIUM:</strong> The dive site is protected from the wind. Year round perfect conditions at the surface guarantee a very easy dive at about 12 meters depth. Incredibly healthy coral formations await you on the almost flat sandy bottom. Yellow stingrays, lobsters, moray eels, angelfish, grunts, snappers, soldier fish and trunkfish are only part of its attraction. Huge vase and barrel sponges hide stone crabs and “sea spiders”. You will see trumpet fish trying to blend in with the branches of soft coral formations.",
    photos: [
      { catalina1 },
      { catalina2 },
      { catalina3 },
      { catalina4 },
      { catalina5 },
      { catalina6 },
      { catalina7 },
      { catalina8 },
    ].sort(() => Math.random() - 0.5),
  },
  {
    id: 2,
    link: "/trips/bayahibe",
    name: "Bayahibe",
    overview: {
      price: 155,
      duration: "7:30 - 16:00",
      extra: "Lunch optional",
      extra2: "Drinks : Alcoholic optional",
    },
    title: "Bayahibe",
    paragraph: "",
    paragraph2:
      "Located just a half-mile off the coast of Dominicus in Bayahíbe, the 73-meter (240 feet) long St. George ship was originally built in 1962 in Scotland, and was used to transport wheat and barley from Europe to the Caribbean. Today, the sunken ship is home to barracudas, moray eels, king mackerels, and groupers, among other species. Due to its depth of 40 meters (131 feet), it is recommended only for advanced divers.",
    paragraph3:
      "The small fishing village of Bayahibe is located on the south coast of the Dominican Republic, a great place to visit any time of the year. Scuba diving in Bayahibe, is probably the best scuba diving on the whole Island. Diving in Bayahibe is generally easy. Most of the reefs just offshore and the protected side of Saona Island have little to no current.",
    photos: [
      { bayahibe1 },
      { bayahibe2 },
      { bayahibe3 },
      { bayahibe4 },
      { bayahibe5 },
    ].sort(() => Math.random() - 0.5),
  },
  {
    id: 3,
    link: "/trips/saona",
    name: "Saona Island",
    overview: {
      price: 185,
      companion: 110,
      duration: "7:30 - 18:00",
      extra: "Lunch included",
      extra2: "Drinks : Alcoholic & Non-Alcoholic included",
    },
    title: "Saona Island",
    paragraph:
      "Saona Island is probably the most famous attraction in the Dominican Republic, and for good reason! The dives are world class and the beaches are paradise! This excursion is perfect for divers and snorkelers from the Punta Cana and Bavaroareas. It is a full day tour that will take you to a wreck dive/snorkel as well as our favorite dive site called el Penon. After the dives we go have lunch on Saona Island and enjoy some beach time. ",
    paragraph2:
      "Our diving excursion to Saona Island is very personalized as we only do it with private groups with a minimum of 2 people. That way we are able to provide the best service possible. The excursion is possible any day as long as the conditions are permitting. We will leave From the Punta Cana area at 8:30 am, (since it is private you don't have to wait for anyone else). It will take approximately 40 minutes until we reach Bayahibe where we will embark for our journey.",
    paragraph3:
      "The first dive we will do is the Atlantic princess which is a very interesting shipwreck with a lot of marine life, this allows your companions who do not dive the chance to snorkel. Afterwards we head towards Saona Island for the second dive, this will be at el Penon. It is one of the best places to dive in the Caribbean Sea since it is somewhat remote and lacks divers where you can also enjoy snorkeling. Then we go to one of the 7 beaches that Saona Island has where we are going to enjoy a delicious buffet just for us. Then we can relax on the beautiful beach, on our way back we can stop at the natural pool and enjoy there seeing the starfish.",
    photos: [{ saona1 }, { saona2 }, { saona3 }, { saona4 }, { saona5 }].sort(
      () => Math.random() - 0.5
    ),
  },
]
