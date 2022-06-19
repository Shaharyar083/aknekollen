import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CustomerAxiosInstance from "../CustomerAxiosInstance";

const initialState = {
  notifications: [],
  homeNotification: [],
};

// all api request here
export const getAllNotifications = createAsyncThunk(
  "getAllNotifications",
  async () => {
    try {
      const { data } = await CustomerAxiosInstance.get("all/getNotifications");
      return data.notifications;
    } catch (err) {
      console.log(err);
    }
  }
);

export const getHomeNotifications = createAsyncThunk(
  "getHomeNotifications",
  async (userName) => {
    try {
      const { data } = await CustomerAxiosInstance.get(
        `all/getHomeNotifications/${userName}`
      );
      console.log("redux", data);
      return [data.homeNotifications];
    } catch (err) {
      console.log(err);
    }
  }
);

export const addHomeNotification = createAsyncThunk(
  "addHomeNotification",
  async (notification1) => {
    try {
      const { data } = await CustomerAxiosInstance.post(
        "all/addHomeNotification",
        notification1
      );
      console.log("1122233", data);
      return [data.savedHomeNotification];
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteHomeNotifications = createAsyncThunk(
  "deleteHomeNotifications",
  async (id) => {
    try {
      const { data } = await CustomerAxiosInstance.delete(
        `all/deleteHomeNotifications/${id}`
      );

      return [];
    } catch (err) {
      console.log(err);
    }
  }
);

export const updateHomeNotifications = createAsyncThunk(
  "updateHomeNotifications",
  async (values) => {
    try {
      const { data } = await CustomerAxiosInstance.put(
        `all/updateHomeNotifications/${values._id}`,
        { notification: values.notification }
      );

      return [data.homeNotification];
    } catch (err) {
      console.log(err);
    }
  }
);

export const seenNotifications = createAsyncThunk(
  "seenNotifications",
  async () => {
    try {
      const { data } = await CustomerAxiosInstance.put("all/seenNotifications");
      return data.notifications;
    } catch (err) {
      console.log(err);
    }
  }
);

export const notificationReducer = createSlice({
  name: "notification",
  initialState: initialState,
  reducers: {
    pushNotification: (state, action) => {
      console.log("notofication actuion", action.payload);
      state.notifications = [...state.notifications, action.payload];
    },
  },
  extraReducers: {
    [getAllNotifications.fulfilled]: (state, action) => {
      state.notifications = action.payload;
    },
    [seenNotifications.fulfilled]: (state, action) => {
      state.notifications = action.payload;
    },
    [addHomeNotification.fulfilled]: (state, action) => {
      state.homeNotification = action.payload;
    },
    [getHomeNotifications.fulfilled]: (state, action) => {
      state.homeNotification = action.payload;
    },
    [deleteHomeNotifications.fulfilled]: (state, action) => {
      state.homeNotification = action.payload;
    },
    [updateHomeNotifications.fulfilled]: (state, action) => {
      state.homeNotification = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { pushNotification } = notificationReducer.actions;
export default notificationReducer.reducer;
