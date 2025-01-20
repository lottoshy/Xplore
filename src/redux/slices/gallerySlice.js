import { createSlice } from '@reduxjs/toolkit';

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: {
    images: [],
  },
  reducers: {
    setImages(state, action) {
      state.images = action.payload;
    },
    addImage(state, action) {
      state.images.push(action.payload);
    },
  },
});

export const { setImages, addImage } = gallerySlice.actions;
export default gallerySlice.reducer;
