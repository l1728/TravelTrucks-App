import { createSlice} from "@reduxjs/toolkit";
import { fetchCamperById, fetchCampers } from "../campersApi.js";

const campersSlice = createSlice({
    name: 'campers',
    initialState: {
        items: [],
        selectedCamper: null,
        favorites: JSON.parse(localStorage.getItem('favorites')) || [],  
        status: 'idle',
    },
    reducers: {
        toggleFavorite: (state, action) => {
            const camperId = action.payload;
           const isFavorite = state.favorites.some(fav => fav.id === camperId);

            if (!isFavorite) {
                
                const camperToAdd = state.items.find(camper => camper.id === camperId);
                if (camperToAdd) {
                    state.favorites.push(camperToAdd);
                }
            } else {
               
                state.favorites = state.favorites.filter(fav => fav.id !== camperId);
            }
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
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
                state.items = action.payload; 
            })
            .addCase(fetchCamperById.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCamperById.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.selectedCamper = action.payload; 
            });
    },
});

export const { toggleFavorite } = campersSlice.actions; 
export default campersSlice.reducer;
