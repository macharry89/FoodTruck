import { atom } from "recoil";

const simpleMenu = atom({
  key: "simpleMenu",
  default: {
    menu:  [
      {
        icon: "ShoppingCart",
        title: "Food Trucks",
        pathname: "/",
      },
    ],
  },
});

export { simpleMenu };
