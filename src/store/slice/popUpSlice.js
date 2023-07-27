import { createSlice } from "@reduxjs/toolkit" 

const initialState = {
    isActive: false
}

const popUpSlice = createSlice({
    name: 'popUp',
    initialState,
    reducers: {
        setPopUp: (state, { payload }) => ({
            ...state,
            isActive: !payload.isActive
        })
    }
})

export const { setPopUp } = popUpSlice.actions

export default popUpSlice.reducer