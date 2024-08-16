import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCompanionImage = createAsyncThunk(
  "companions/fetchCompanionImage",
  async () => {
    const response = await axios.get(
      "https://source.unsplash.com/featured/?people"
    );
    return { id: Date.now(), imageSrc: response.request.responseURL };
  }
);

const companionsSlice = createSlice({
  name: "companions",
  initialState: {
    companions: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanionImage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCompanionImage.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.companions.push(action.payload);
      })
      .addCase(fetchCompanionImage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default companionsSlice.reducer;
