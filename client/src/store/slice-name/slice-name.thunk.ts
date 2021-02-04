import { createAsyncThunk } from '@reduxjs/toolkit'

export const SLICE_NAME = 'slice-name'

export const getNewTagsAsync = createAsyncThunk(
  `${SLICE_NAME}/getNewTags`,
  // you can use any api requests like fetch, axios
  async () => Promise.resolve(['test']),
)

export const updateSalaryAsync = createAsyncThunk(
  `${SLICE_NAME}/updateSalary`,
  // you can use any api requests like fetch, axios
  async (extraPay: number, thunkAPI) => {
    if (extraPay < 0) {
      return thunkAPI.rejectWithValue(0)
    }

    return Promise.resolve(extraPay)
  },
)
