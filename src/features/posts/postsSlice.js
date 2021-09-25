import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
]

// Create a "portion of state".
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // The new structure of the 'postAdded' reducer with the 'reducer' and the
    // 'prepare' methods. Note that after using this format the action
    // dispatched must match the 'prepare' signature format as in
    // ./AddPostForm.js line 24.
    postAdded: {
      reducer(state, action) {
        // Note that we are mutating the state directly (impure function),
        // but @reduxjs/toolkit uses Immer to transform mutable logic into
        // a immutable version, thus being safe to mutate states inside the
        // createSlice().
        state.push(action.payload)
      },
      // Now, instead of passing a payload object we are passing the arguments
      // like in the prepare function.
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        }
      },
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
