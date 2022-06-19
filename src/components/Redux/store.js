import { configureStore } from '@reduxjs/toolkit'

import notificationReducer from './notificationReducer'
import navReducer from './navReducer'
import adminReducer from "./adminReducer"
import responseReducer from "./responseReducer"

export const store = configureStore({
  reducer: {
    //   general syntax to pass all reducer to store
    notificationReducer: notificationReducer,
    navReducer: navReducer,
    adminReducer: adminReducer,
    responseReducer: responseReducer,

  },
})
