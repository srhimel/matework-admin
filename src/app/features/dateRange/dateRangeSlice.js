import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  type: 'week',
  startDate: new Date(new Date().setDate(new Date().getDate() - 7)),
  endDate: new Date()
}

export const dateRangeSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeDate: (state, action) => {
      state.type = action.payload.type
      state.startDate = action.payload.startDate
      state.endDate = action.payload.endDate
    },
    resetDate: (state) => {
      state.type = initialState.type
      state.startDate = initialState.startDate
      state.endDate = initialState.endDate
    }
  }
})

// Action creators are generated for each case reducer function
export const { changeDate, resetDate } = dateRangeSlice.actions

export default dateRangeSlice.reducer
