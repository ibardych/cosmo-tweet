import { createSlice } from "@reduxjs/toolkit";
import { followUser, getAllUsers } from "./operations";

const initialState = {
  users: [],
  followedUsers: [],
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.error = null;
      })
      .addCase(getAllUsers.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.error = null;
      })
      .addCase(getAllUsers.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(followUser.pending, (state) => {
        state.error = null;
      })
      .addCase(followUser.fulfilled, (state, { payload }) => {
        const { user, isFollowing } = payload;
        const index = state.users.findIndex((u) => u.id === user.id);
        state.users[index] = user;
        state.followedUsers = state.followedUsers.filter(
          (id) => id !== user.id
        );
        if (!isFollowing) {
          state.followedUsers.push(user.id);
        }
        state.error = null;
      })
      .addCase(followUser.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const userReducer = userSlice.reducer;
