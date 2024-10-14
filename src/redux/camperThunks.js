import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCampersFromAPI, fetchCamperByIdFromAPI } from '../api/campersAPI'; // Імпортуємо функції для запитів до API

// Функція для отримання списку кемперів
export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async (filters, thunkAPI) => {
    try {
      const response = await fetchCampersFromAPI(filters);
      return response; // Повертаємо отримані кемпери
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Якщо сталася помилка, повертаємо повідомлення про помилку
    }
  }
);

// Функція для отримання кемпера за ID
export const fetchCamperById = createAsyncThunk(
  'campers/fetchCamperById',
  async (camperId, thunkAPI) => {
    try {
      const response = await fetchCamperByIdFromAPI(camperId);
      return response; // Повертаємо знайдений кемпер
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Повертаємо повідомлення про помилку
    }
  }
);

// Функція для скидання списку кемперів (наприклад, якщо потрібно скинути фільтри)
export const resetCampers = createAsyncThunk(
  'campers/resetCampers',
  async (_, thunkAPI) => { // Якщо не потрібно передавати дані, можемо не використовувати параметр
    try {
      const response = await fetchCampersFromAPI(); // Можливо, тут варто викликати fetchCampersFromAPI без фільтрів
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Повертаємо повідомлення про помилку
    }
  }
);
