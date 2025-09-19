import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'

export const fetchAuthData = createAsyncThunk(
	'auth/fetchAuthData',
	async params => {
		const { data } = await axios.post('/auth/login', params)
		return data
	}
)

const initialState = {
	data: null,
	status: 'loading',
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: {
		[fetchUserData.pending]: state => {
			state.date = null
			state.status = 'loading'
		},
		[fetchUserData.fulfilled]: (state, action) => {
			state.date = action.payload
			state.status = 'loaded'
		},
		[fetchUserData.rejected]: state => {
			state.date = null
			state.status = 'error'
		},
	},
})

export const authReducer = authSlice.reducer
