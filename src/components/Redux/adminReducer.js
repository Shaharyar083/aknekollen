import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import CustomerAxiosInstance from '../CustomerAxiosInstance'
import jwtDecode from 'jwt-decode';


const initialState = {
  users: [],
  currentUser: null
}

// all api request here


export const getAllUsers = createAsyncThunk('getAllUsers', async () => {
  try {
    const { data } = await CustomerAxiosInstance.get("admin/getusers")
    return data.users
  } catch (err) {
    console.log(err)
  }
})

export const getCurrentUser = createAsyncThunk('getCurrentUser', async (id, { getState }) => {
  try {
    console.log("getCurrentUser1122", id)
    const { data } = await CustomerAxiosInstance.get(`/admin/currentuser/${id}`)
    console.log("getCurrentUser1122", data)
    let currentUser = {
      isSuperAdmin: data?.user?.isSuperAdmin,
      permissions: data?.user?.permissions,
    }
    return currentUser
  } catch (err) {
    console.log(err)
  }
})

export const deleteUser = createAsyncThunk(
  'deleteUser',
  async (id, { getState }) => {
    console.log('delete user', id)
    try {
      const response = await CustomerAxiosInstance.delete(
        `/admin/deleteadmin/${id}`,
      )
      let users = [...getState().adminReducer.users]
      users = users.filter((u) => u._id !== id)
      return users
    } catch (err) {
      console.log(err)
    }
  },
)

export const handelUpdateUsers = createAsyncThunk(
  'updateuser',
  async (user, { getState }) => {
    console.log('update user', user)
    try {
      const response = await CustomerAxiosInstance.put(`/admin/updateusers`, user)
      console.log('updated user', response.data)
      let users = [...getState().adminReducer.users]
      let index = users.findIndex((c) => c._id === user.id)
      console.log('index', index)
      users[index] = response?.data?.user
      console.log('ineex2', users)
      return users
    } catch (err) {
      console.log(err)
    }
  },
)

export const adminReducer = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      console.log('decode====', jwtDecode(action.payload))
      state.currentUser = jwtDecode(action.payload)
    },
  },

  extraReducers: {
    [getAllUsers.fulfilled]: (state, action) => {
      state.users = action.payload
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.users = action.payload
    },
    [getCurrentUser.fulfilled]: (state, action) => {
      state.currentUser = action.payload
    },
    [handelUpdateUsers.fulfilled]: (state, action) => {
      state.users = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCurrentUser } = adminReducer.actions

export default adminReducer.reducer
