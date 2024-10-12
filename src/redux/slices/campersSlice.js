import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Функція для отримання списку кемперів
export const fetchCampers = createAsyncThunk('campers/fetchCampers', async (filters) => {
    const response = await axios.get('https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers', { params: filters });
    return response.data.items;
});

// Функція для отримання кемпера за ID
export const fetchCamperById = createAsyncThunk('campers/fetchCamperById', async (camperId) => {
    try {
        const response = await axios.get(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${camperId}`);
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
        favorites: [], // Додайте масив для обраних кемперів
        status: 'idle',
    },
    reducers: {
        toggleFavorite: (state, action) => {
            const camperId = action.payload;
            const index = state.favorites.findIndex(favorite => favorite.id === camperId);
            if (index >= 0) {
                // Якщо кемпер вже улюблений, видаляємо його
                state.favorites.splice(index, 1);
            } else {
                // Якщо не улюблений, додаємо його
                const camperToAdd = state.items.find(camper => camper.id === camperId);
                if (camperToAdd) {
                    state.favorites.push(camperToAdd);
                }
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCampers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCampers.fulfilled, (state, action) => {
                console.log('Fetched campers:', action.payload);
                state.status = 'succeeded';
                state.items = Array.isArray(action.payload) ? action.payload : []; 
            })
            .addCase(fetchCamperById.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCamperById.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.selectedCamper = action.payload; // Зберігаємо деталі обраного кемпера
            });
    },
});

export const { toggleFavorite } = campersSlice.actions; // Експортуємо дію toggleFavorite
export default campersSlice.reducer;
