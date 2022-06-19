import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const initialState = {
  toggled: false,
  dashboardMargin: true
}


export const navReducer = createSlice({
  name: 'navBar',
  initialState: initialState,
  reducers: {
    handleToggleSidebar: (state, action) => {
      state.toggled = !state.toggled
    },
    changeDashboardMargin: (state, action) => {
      state.dashboardMargin = !state.dashboardMargin
    },

  }
})

// Action creators are generated for each case reducer function
export const { handleToggleSidebar, changeDashboardMargin } = navReducer.actions

export default navReducer.reducer
