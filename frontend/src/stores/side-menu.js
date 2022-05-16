import { atom } from "recoil";

const sideMenu = atom({
  key: "sideMenu",
  default: {
    menu: [
      {
        icon: "ShoppingCart",
        title: "Food Trucks",
        pathname: "/",
      },
    ],
  },
});

export { sideMenu };
