import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { postUpdated } from './postsSlice'

export const EditPostForm = ({ match }) => {
  const { postId } = match.params
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  )
  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)

  const dispatch = useDispatch()

  const onTitleChanged = (event) => {
    // Prevent reloading page on "Enter".
    event.preventDefault()
    setTitle(event.target.value)
  }
  const onContentChanged = (event) => {
    // Prevent reloading page on "Enter".
    event.preventDefault()
    setContent(event.target.value)
  }

  const onUpdatePostClicked = () => {
    if (title && content) {
      dispatch(
        postUpdated({
          id: postId,
          title,
          content,
        })
      )
    }
  }

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        ></textarea>
      </form>
      <button type="button" onClick={onUpdatePostClicked}>
        Update
      </button>
    </section>
  )
}
