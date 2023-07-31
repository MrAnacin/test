import { createSlice } from "@reduxjs/toolkit" 

const initialState = {
    forProgress: false,
    forTrainingList: false,
}

const popUpSlice = createSlice({
    name: 'popUp',
    initialState,
    reducers: {
        setMyprogressPopUp: (state, { payload }) => ({
            ...state,
            forProgress: payload.forProgress
        }),
        setTrainingListPopUp: (state, { payload }) => ({
            ...state,
            forTrainingList: payload.forTrainingList
        }),
    }
})

export const { setMyprogressPopUp, setTrainingListPopUp } = popUpSlice.actions

export default popUpSlice.reducer