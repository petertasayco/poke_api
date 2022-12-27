import { createSlice } from "@reduxjs/toolkit";

const usernameSlice = createSlice({
    name: 'username',
    initialState: '',
    reducers: {
        setUserNameGlobal: (state, action) => action.payload
    }
})

export const {setUserNameGlobal} = usernameSlice.actions    

export default usernameSlice.reducer