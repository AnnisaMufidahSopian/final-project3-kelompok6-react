import { configureStore } from "@reduxjs/toolkit";
import hotelsReducer from "../feature/hotelsSlice";
import usersReducer from "../feature/usersSlice";
import wishlisReducer from "../feature/wishlistSlice";
import loginReducer from "../feature/loginSlice";
import PemesananReducer from "../feature/bookingSlice";
import historyReducer from "../feature/historySlice";

export const store = configureStore({
  reducer: {
    home: hotelsReducer,
    user: usersReducer,
    wishlist: wishlisReducer,
    login: loginReducer,
    pemesanan: PemesananReducer,
    history: historyReducer
  },
});
