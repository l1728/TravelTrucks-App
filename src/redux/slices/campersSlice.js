import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Функція для отримання списку кемперів
export const fetchCampers = createAsyncThunk('campers/fetchCampers', async (filters) => {
    const response = await axios.get('https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers', { params: filters });
    return response.data;
});

// Функція для отримання кемпера за ID
export const fetchCamperById = createAsyncThunk('campers/fetchCamperById', async (camperId) => {
    try {
        const response = await axios.get(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${camperId}`);
        console.log('camperId:', camperId);
        return response.data;
    } catch (error) {
        console.error('Error fetching camper:', error);
        throw error; // Необхідно кинути помилку, щоб Redux зміг її обробити
    }
});

const campersSlice = createSlice({
    name: 'campers',
    initialState: {
        items: [],
        selectedCamper: null,
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
            })
            .addCase(fetchCamperById.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCamperById.fulfilled, (state, action) => {

                console.log('action.payload:', action.payload);


                state.status = 'succeeded';
                state.selectedCamper = action.payload; // Зберігаємо деталі обраного кемпера
            });
    },
});

export default campersSlice.reducer;
