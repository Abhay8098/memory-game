import { createSlice } from "@reduxjs/toolkit";
import data from "../Data.json";

export const counterSlice = createSlice({
  name: "titleCard",
  initialState: {
    Prev: "",
    Next: "",
    Matched: 0,
    Data: data.sort(() => Math.random() - 0.5),
    Steps: 0,
  },
  reducers: {
    AttempOdd: (state, action) => {
      state.Prev = action.payload;
      state.Data.forEach((val) => {
        if (
          val.id === action.payload.id &&
          val.image !==
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Blank_square.svg/2048px-Blank_square.svg.png"
        )
          val.image = val.img;
      });
    },
    AttempEven: (state, action) => {
      state.Next = action.payload;
      state.Data.forEach((val) => {
        if (
          val.id === action.payload.id &&
          val.image !==
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Blank_square.svg/2048px-Blank_square.svg.png"
        )
          val.image = val.img;
      });
    },
    CheckAttemp: (state) => {
      state.Steps += 1;
      if (
        state.Prev.img === state.Next.img &&
        state.Prev.id !== state.Next.id &&
        state.Next.image !==
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Blank_square.svg/2048px-Blank_square.svg.png"
      ) {
        state.Data.forEach((val) => {
          if (val.id === state.Prev.id) {
            val.image =
              "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Blank_square.svg/2048px-Blank_square.svg.png";
            val.img = "";
          }
          if (val.id === state.Next.id && state.Prev.id !== state.Next.id) {
            val.image =
              "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Blank_square.svg/2048px-Blank_square.svg.png";
            val.img = "";
          }
        });
        state.Matched += 1;
      } else {
        state.Data.forEach((val) => {
          console.log( state.Next.id);
          if (
            val.id === state.Prev.id &&
            val.image !==
              "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Blank_square.svg/2048px-Blank_square.svg.png"
          ) {
            val.image =
              "http://images.hellokids.com/_uploads/_tiny_galerie/20150415/dos2_rm2.jpg";
          }
          if (
            val.id === state.Next.id &&
            val.image !==
              "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Blank_square.svg/2048px-Blank_square.svg.png"
          ) {
            val.image =
              "http://images.hellokids.com/_uploads/_tiny_galerie/20150415/dos2_rm2.jpg";
          }
        });
        state.Prev = "";
        state.Next = "";
      }
    },
  },
});

export const { AttempOdd, AttempEven, CheckAttemp } = counterSlice.actions;
export default counterSlice.reducer;
