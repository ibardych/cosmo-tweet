import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BACKEND_BASEURL } from "config";
// import { faker } from "@faker-js/faker";

const instance = axios.create({
  baseURL: BACKEND_BASEURL,
});

export const getAllUsers = createAsyncThunk(
  "users/get",
  async (_, thunkAPI) => {
    try {
      const response = await instance.get(`/users`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const followUser = createAsyncThunk(
  "user/follow",
  async ({ id, followers }, thunkAPI) => {
    // Generate user tweets
    /*
    const tweets = [];
    for (let i = 0; i < Math.round(Math.random() * 1000); i++) {
      tweets.push({
        text: faker.lorem.paragraph(),
        date: faker.date.past(),
        avatar: faker.image.avatar(),
        owner: Math.round(Math.random()),
      });
    }
    */

    try {
      const state = thunkAPI.getState();
      const isFollowing = state.user.followedUsers.includes(id);
      const newFollowers = isFollowing ? followers - 1 : followers + 1;
      const response = await instance.put(`/users/${id}`, {
        followers: newFollowers,
        // tweets,
      });

      return { user: response.data, isFollowing };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default instance;
