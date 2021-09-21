import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
]

// Create a "portion of state".
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      // Note that we are mutating the state directly (impure function),
      // but @reduxjs/toolkit uses Immer to transform mutable logic into
      // a immutable version, thus being safe to mutate states inside the
      // createSlice().
      state.push(action.payload)
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload
      const existingPost = state.find((post) => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    },
  },
})

// Destructuring assignment to get individual reducers.
export const { postAdded, postUpdated } = postsSlice.actions

export default postsSlice.reducer
