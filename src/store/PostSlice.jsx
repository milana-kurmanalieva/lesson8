import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userFunction = createAsyncThunk('userFunction',
    async (user, {dispatch}) => {
        const options = {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(user),
          };
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', options)
        const data  = await response.json()
        dispatch(addUser(data))
    }
)

export const PostSlice = createSlice({
    name: 'PostSlice',
    initialState: {
        user: []
    },
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload
        },
        
    }
})

export const {addUser} = PostSlice.actions
export default PostSlice.reducer
