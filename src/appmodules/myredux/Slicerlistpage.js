import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  age: 10,
}

export const Myslicer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.age =50
    },
    decrement: (state) => {
      state.age =200
    }
  },
})
export const { increment, decrement } = Myslicer.actions

export default Myslicer.reducer