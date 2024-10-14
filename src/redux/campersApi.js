import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
  import { campersApi } from "../api/api.js";

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async ( filter,  thunkAPI) => {
    try {
      const { data } = await campersApi.get(`?${filter}`);
      
      console.log('camperrsApi', data);


      return data.items;// Повертаємо список кемперів
    } catch (error) {
      console.error('Error fetching campers:', error);
      return thunkAPI.rejectWithValue(error.message); // Обробка помилки
    }
  }
);


export const fetchCamperById = createAsyncThunk(
  'campers/fetchCamperById',
  async (camperId, thunkAPI) => {
    try {
      const response = await axios.get(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${camperId}`);
      return response.data; // Повертаємо знайдений кемпер
    } catch (error) {
      console.error('Error fetching camper:', error);
      return thunkAPI.rejectWithValue(error.message); // Обробка помилки
    }
  }
);