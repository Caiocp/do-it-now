let lists = [
  {
    id: 1,
    title: "Lista 1",
    task: [],
  },
  {
    id: 2,
    title: "Lista 2",
    task: [
      {
        id: 1,
        title: "Tarefa 1",
        subTasks: [{ id: 1, name: "subtarefa 1", completed: false }],
        completed: false,
      },
      {
        id: 2,
        title: "Tarefa 2",
        subTasks: [
          { id: 1, name: "subtarefa 1", completed: false },
          { id: 2, name: "subtarefa 2", completed: false },
        ],
        completed: false,
      },
      {
        id: 3,
        title: "Tarefa 3",
        subTasks: [
          { id: 1, name: "subtarefa 1", completed: false },
          { id: 2, name: "subtarefa 2", completed: false },
          { id: 3, name: "subtarefa 3", completed: false },
        ],
        completed: false,
      },
    ],
  },
  {
    id: 3,
    title: "Lista 3",
    task: [],
  },
];

export default lists;
