import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as ThunkActions from './slice-name.thunk'

export interface ISomeSlice {
  name: string
  salary: number
  tags: string[]
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

export const INITIAL_STATE: ISomeSlice = {
  name: '',
  salary: 0,
  tags: [],
  loading: 'idle',
}

// Then, handle actions in your reducers:
export const userSlice = createSlice({
  name: ThunkActions.SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    changeName(state, action: PayloadAction<string>) {
      state.name = action.payload
    },
    changeSalary(state, action: PayloadAction<number>) {
      state.salary = action.payload
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(
        ThunkActions.getNewTagsAsync.fulfilled,
        (state, action) => { state.tags.push(...action.payload) },
      )
      .addCase(
        ThunkActions.updateSalaryAsync.fulfilled,
        (state, action) => { state.salary = action.payload },
      )
  },
})

export default {
  name: userSlice.name,
  reducer: userSlice.reducer,
  actions: { ...userSlice.actions, ...ThunkActions },
}
