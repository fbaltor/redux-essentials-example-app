import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'Ana Luiza' },
  { id: '1', name: 'Felipe Baltor' },
  { id: '2', name: 'Venne Vinix' },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export const usersReducer = usersSlice.reducer
