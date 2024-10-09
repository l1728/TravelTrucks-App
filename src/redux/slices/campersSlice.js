import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCampers = createAsyncThunk('campers/fetchCampers', async (filters) => {
    const response = await axios.get('https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers', { params: filters });
    return response.data;
});

const campersSlice = createSlice({
    name: 'campers',
    initialState: {
        items: [],
        status: 'idle',
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCampers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCampers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            });
    },
});

export default campersSlice.reducer;