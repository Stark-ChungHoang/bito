import { createSlice } from '@reduxjs/toolkit'
const disney =createSlice({
    name:"disney",
    initialState:{
        movie:[]
    },
    reducers:{
        getUser:(state,action) => {
                    state.movie = action.payload
        }
    }
})
export const {getUser} = disney.actions;
export default disney.reducer