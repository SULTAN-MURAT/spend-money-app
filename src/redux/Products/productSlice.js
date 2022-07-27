import { createSlice } from "@reduxjs/toolkit";
import products from "../../data/products.json";

const data = products;
const balance = 100_000_000_000;
const productSlice = createSlice({
  name: "products",
  initialState: {
    items: data.products,
    balance: balance,
    initialBalance: balance,
  },
  reducers: {
    updateBalance: (state, action) => {
      const { id, input } = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.count = input;
      let spentMoney = 0;
      state.items.map(
        (item) => (spentMoney += +item.count * +item.productPrice)
      );
      state.balance = state.initialBalance - spentMoney;
    },
    sell: (state, action) => {
      const { id } = action.payload;
      console.log("sell", action.payload);
      const item = state.items.find((item) => item.id === id);
      item.count -= 1;
      let spendMoney = 0;
      state.items.map(
        (item) => (spendMoney += +item.count * +item.productPrice)
      );
      state.balance = state.balance + spendMoney;
    },
    buy: (state, action) => {
      const { id } = action.payload;
      console.log("buy", action.payload);
      const item = state.items.find((item) => item.id === id);
      item.count = +item.count + 1;
      let spendMoney = 0;
      state.items.map(
        (item) => (spendMoney += +item.count * +item.productPrice)
      );
      state.balance = state.initialBalance - spendMoney;
    },
  },
});

export const { updateBalance, sell, buy } = productSlice.actions;
export default productSlice.reducer;
