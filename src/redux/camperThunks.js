import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCampersFromAPI, fetchCamperByIdFromAPI } from '../api/campersAPI'; 


export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async (filters, thunkAPI) => {
    try {
      const response = await fetchCampersFromAPI(filters);
      return response; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); 
    }
  }
);


export const fetchCamperById = createAsyncThunk(
  'campers/fetchCamperById',
  async (camperId, thunkAPI) => {
    try {
      const response = await fetchCamperByIdFromAPI(camperId);
      return response; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); 
    }
  }
);


export const resetCampers = createAsyncThunk(
  'campers/resetCampers',
  async (_, thunkAPI) => { 
    try {
      const response = await fetchCampersFromAPI(); 
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); 
    }
  }
);
