import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postsSlice'

// Adding the first piece of state by using the postsReducer
export default configureStore({
  reducer: {
    posts: postsReducer,
  },
})
