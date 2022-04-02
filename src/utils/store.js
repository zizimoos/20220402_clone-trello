const cards = [
  {
    id: "card-1",
    title: "Learning how to cook",
  },
  {
    id: "card-2",
    title: "Making a sandwich",
  },
  {
    id: "card-3",
    title: "Taking the trash out",
  },
];

const data = {
  lists: {
    "list-1": {
      id: "list-1",
      title: "ToDo",
      cards: cards,
    },
    "list-2": {
      id: "list-2",
      title: "In Progress",
      cards: [
        {
          id: "card-4",
          title: "Cloning trello",
        },
        {
          id: "card-5",
          title: "upload video to youtube",
        },
      ],
    },
  },
  listIds: ["list-1"],
};

export default data;
