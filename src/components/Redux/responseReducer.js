import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import CustomerAxiosInstance from '../CustomerAxiosInstance'
import swal from "sweetalert";

const initialState = {
    responses: [],
    currentSurvey: [],
    analytics: null,
    isLoading: false,
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

export const getAnalyticsData = createAsyncThunk('getAnalyticsData', async () => {
    try {
        const { data } = await CustomerAxiosInstance.get(`/analytics/getanalytics`)
        return data.analytics[0]
    } catch (err) {
        console.log(err)
    }
})


export const addUserResponse = createAsyncThunk(
    'addUserResponse',
    async (response, { getState }) => {
        console.log('update user', response)
        try {
            const { data } = await CustomerAxiosInstance.post(`response/addresponse`, response)
            console.log('updated user', data)
            if (data) {
                window.location.href = data.url;
                // swal({
                //     title: "",
                //     text: "You're done. We will be in touch shortly.",
                //     icon: "success",
                // })
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
            state.isLoading = false
        },
        [addUserResponse.pending]: (state, action) => {
            state.isLoading = true
        },
        [getAnalyticsData.fulfilled]: (state, action) => {
            state.analytics = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setCurrentServey } = responseReducer.actions

export default responseReducer.reducer
