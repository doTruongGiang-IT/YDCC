import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import axios from 'axios';

const initialState = {
    suggestionResults: [{
        "id": 0,
        "percent": 0,
        "distance": "",
        "name": "",
        "address": "",
        "license_id": "",
        "license_date": "",
        "status": "",
        "type": "",
        "head_certificate": "",
        "central_line": false,
        "x_pos": 0,
        "y_pos": 0
    }],
    loading: false,
    error: false
};

export const getSuggestions = createAsyncThunk(
    'search/searchItem',
    async (access_token: string) => {
        const res = await axios.get("http://127.0.0.1:8000/api/v1/health_insurance/suggest_hospital/", {
            headers: {
                Authorization: 'Bearer ' + access_token
            }
        });
        return res.data;
    }
);

export const suggestionSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getSuggestions.pending, (state) => {
                return {...state, loading: true};
            })
            .addCase(getSuggestions.fulfilled, (state, action) => {
                return {...state, loading: false, suggestionResults: action.payload};
            })
            .addCase(getSuggestions.rejected, (state) => {
                return {...state, loading: false, error: true};
            })
    }
});

export const selectSuggestion = (state: RootState) => state.search.suggestionResults;

export default suggestionSlice.reducer;