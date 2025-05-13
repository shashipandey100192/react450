import { configureStore } from '@reduxjs/toolkit'
import Mylist from './Slicerlistpage'

export const mystore = configureStore({
  reducer: {
    counter:Mylist
  },
})