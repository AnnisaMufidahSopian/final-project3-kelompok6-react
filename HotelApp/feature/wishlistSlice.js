import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistItems: JSON.parse(localStorage.getItem("wishlist")) || [],
  loading: false,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addTowishlist(state, action) {
      state.wishlistItems.unshift(action.payload);
      localStorage.setItem("wishlist", JSON.stringify(state.wishlistItems));
      alert("Hotel masukan ke wishlist");
    },

    removeFromwishlist(state, action) {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload.id
      );

      localStorage.setItem("wishlist", JSON.stringify(state.wishlistItems));
      alert("Hotel hapus dari wishlist");
    },
  },
});

export const { addTowishlist, checkedwishlist, removeFromwishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
