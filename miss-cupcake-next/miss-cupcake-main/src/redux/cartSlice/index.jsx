import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

// if (typeof window !== 'undefined') {
//   // Perform localStorage action
//   const item = localStorage.getItem('key')
// }

const INITIAL_STATE = {
  cartItems: [],
  // cartItems: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cartItems')) : [],
  // cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
  cartTotalQuantity: 0,
  cartTotalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      
      console.log({newItem});
      state.cartTotalQuantity++;
      state.cartTotalPrice += newItem.price;
      toast.info(`Increased ${newItem.name} quantity!`, {
        position: "bottom-left",
      });

      if (!existingItem) {
        state.cartItems.push({
          ...newItem,
        }),
        toast.success(`${newItem.name} added to cart!`, {
          position: "bottom-left",
        })
        // state.cartTotalQuantity = 1;
        // state.cartTotalPrice = newItem.price;
      }
      // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeItemFromCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem);

      state.cartTotalQuantity--;
      state.cartTotalPrice -= newItem.price;

      // tentando fazer com que fiquem apenas duas casa decimais no valor total do carrinho
      // const totalPriceCart = state.cartTotalPrice;
      // Number.parseFloat(totalPriceCart).toFixed(2);
      // totalPriceCart -= newItem.price;

      // Number.parseFloat(state.cartTotalPrice).toFixed(2) -= newItem.price;


      if (newItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        newItem.quantity--;
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;