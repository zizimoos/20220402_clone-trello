import { atom } from "recoil";

export const AddCardState = atom({
  key: "AddCardState",
  default: false,
});

export const cardsState = atom({
  key: "cardsState",
  default: [
    {
      id: "card-1",
      content: "Learning how to cook",
    },
    {
      id: "card-2",
      content: "Making a sandwich",
    },
    {
      id: "card-3",
      content: "Taking the trash out",
    },
  ],
});

export const dataState = atom({
  key: "dataState",
  default: {
    lists: {
      "list-1": {
        id: "list-1",
        title: "To Do",
        cards: [],
      },
      "list-2": {
        id: "list-2",
        title: "In Progress",
        cards: [
          {
            id: "card-4",
            content: "Cloning trello",
          },
          {
            id: "card-5",
            content: "upload video to youtube",
          },
        ],
      },
    },
    listIds: ["list-1"],
  },
});
