import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import CustomerAxiosInstance from '../CustomerAxiosInstance'
import swal from "sweetalert";

const initialState = {
    responses: [],
    currentSurvey: []
}
// all api request here
export const getAllResponses = createAsyncThunk('getAllResponses', async () => {
    try {
        const { data } = await CustomerAxiosInstance.get("response/getallresponses")
        return data.responses
    } catch (err) {
        console.log(err)
    }
})

// export const getCurrentUser = createAsyncThunk('getCurrentUser', async (id, { getState }) => {
//   try {
//     console.log("getCurrentUser1122", id)
//     const { data } = await CustomerAxiosInstance.get(`/admin/currentuser/${id}`)
//     console.log("getCurrentUser1122", data)
//     let currentUser = {
//       isSuperAdmin: data?.user?.isSuperAdmin,
//       permissions: data?.user?.permissions,
//     }
//     return currentUser
//   } catch (err) {
//     console.log(err)
//   }
// })

// export const deleteUser = createAsyncThunk(
//   'deleteUser',
//   async (id, { getState }) => {
//     console.log('delete user', id)
//     try {
//       const response = await CustomerAxiosInstance.delete(
//         `/admin/deleteadmin/${id}`,
//       )
//       let users = [...getState().adminReducer.users]
//       users = users.filter((u) => u._id !== id)
//       return users
//     } catch (err) {
//       console.log(err)
//     }
//   },
// )

export const addUserResponse = createAsyncThunk(
    'addUserResponse',
    async (response, { getState }) => {
        console.log('update user', response)
        try {
            const { data } = await CustomerAxiosInstance.post(`response/addresponse`, response)
            console.log('updated user', data)
            if (data) {
                swal({
                    title: "",
                    text: data.message,
                    icon: "success",
                })
            }
            let users = [...getState().adminReducer.users]
            let index = users.findIndex((c) => c._id === response.id)
            console.log('index', index)
            users[index] = data?.response
            console.log('ineex2', users)
            return users
        } catch (err) {
            console.log(err)
        }
    },
)

export const responseReducer = createSlice({
    name: 'Response',
    initialState: initialState,
    reducers: {
        setCurrentServey: (state, action) => {
            state.currentSurvey = action.payload
        },
    },

    extraReducers: {
        [getAllResponses.fulfilled]: (state, action) => {
            state.responses = action.payload
        },
        // [deleteUser.fulfilled]: (state, action) => {
        //     state.users = action.payload
        // },
        [addUserResponse.fulfilled]: (state, action) => {
            state.responses = action.payload
        },
        // [handelUpdateUsers.fulfilled]: (state, action) => {
        //     state.users = action.payload
        // }
    },
})

// Action creators are generated for each case reducer function
export const { setCurrentServey } = responseReducer.actions

export default responseReducer.reducer
