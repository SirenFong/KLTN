import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";
import { doctorReducer } from "./reducers/doctor";

const Store = configureStore({
  reducer: {
    user: userReducer,
    doctor: doctorReducer,
  },
});

// const Store = configureStore({
//   reducer: {
//     user: userReducer,
//     seller: sellerReducer,
//     products: productReducer,
//     events: eventReducer,
//     cart: cartReducer,
//     wishlist: wishlistReducer,
//     order: orderReducer,
//   },
// });

export default Store;
