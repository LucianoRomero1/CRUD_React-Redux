import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 description",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "Task 2 description",
    completed: false,
  },
  {
    id: "3",
    title: "Task 3",
    description: "Task 3 description",
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      //Action está dividido en 2, type es el tipo en este aso seria tasks/addTask que es el nombre del slice y de la func
      //Y payload es el dato que viene
      state.push(action.payload);
      // Este método es mas que nada para React solo [...state, action.payload]
    },
  },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
