import { createSlice } from '@reduxjs/toolkit';

const tripsSlice = createSlice({
  name: 'trips',
  initialState: {
    tripsList: [],
  },
  reducers: {
    setTrips(state, action) {
      state.tripsList = action.payload;
    },
    addTrip(state, action) {
      state.tripsList.push(action.payload);
    },
  },
});

export const { setTrips, addTrip } = tripsSlice.actions;
export default tripsSlice.reducer;
