import { configureStore } from '@reduxjs/toolkit'
import { postsReducer } from '../features/posts/postsSlice'
import { usersReducer } from '../features/users/usersSlice'

// Adding the first piece ('slice') of state by using the postsReducer
export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
})
