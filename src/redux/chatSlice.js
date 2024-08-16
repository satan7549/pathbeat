import { createSlice } from "@reduxjs/toolkit";

const storedMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];

const initialState = {
  messages: storedMessages,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.messages = [...state.messages, action.payload];
      localStorage.setItem("chatMessages", JSON.stringify(state.messages));
    },
  },
});

export const { sendMessage } = chatSlice.actions;
export default chatSlice.reducer;
