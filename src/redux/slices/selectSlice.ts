import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SelectValues = {
  id: string;
  imageUrl: string;
  title: string;
  desc?: string;
  price: number;
  sizes: number[];
  nutritionFacts: string;
};

interface Select {
  modal: boolean;
  toolTip: boolean;
  activateHeightTop: boolean;
  heightTop: number;
  totalPrice: number;
  size: number;
  type: number;
  values: SelectValues[];
}

const initialState: Select = {
  modal: false,
  toolTip: false,
  activateHeightTop: false,
  heightTop: 0,
  totalPrice: 0,
  size: 0,
  type: 0,
  values: [],
};

const selectSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    openModal(state, action) {
      state.modal = action.payload;
    },
    openToolTip(state, action) {
      state.toolTip = action.payload;
    },
    switcherTopHeight(state, action) {
      state.activateHeightTop = action.payload;
    },
    getTopHeight(state, action) {
      state.heightTop = action.payload;
    },
    addProduct(state, action: PayloadAction<SelectValues>) {
      state.values.push(action.payload);
    },
    clearProducts(state) {
      state.values = [];
    },
    setSize(state, action) {
      state.size = action.payload;
    },
    setType(state, action) {
      state.type = action.payload;
    },
  },
});

export const {
  openModal,
  openToolTip,
  switcherTopHeight,
  getTopHeight,
  addProduct,
  clearProducts,
  setSize,
  setType,
} = selectSlice.actions;

export default selectSlice.reducer;
