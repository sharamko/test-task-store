import { createSlice } from '@reduxjs/toolkit';

const stateSlice = createSlice({
  name: 'state',
  initialState: {
    products: null,
    product: null,
    productError: null,
    sizes: [],
    size: '',
    colors: 1,
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setProduct(state, action) {
      state.product = action.payload;
    },
    setProductError(state, action) {
      state.productError = action.payload;
    },
    setSizes(state, action) {
      state.sizes = action.payload;
    },
    setSize(state, action) {
      state.size = action.payload;
    },
    setColors(state, action) {
      state.colors = action.payload;
    },
  },
});

export default stateSlice.reducer;
export const {
  setProducts,
  setProduct,
  setProductError,
  setSizes,
  setSize,
  setColors,
} = stateSlice.actions;
