import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './localSlice'

export default configureStore({
    reducer: {
        counter: counterReducer
    }
})