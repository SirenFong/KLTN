import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";
import { doctorReducer } from "./reducers/doctor";
import { productReducer } from "./reducers/product";
import { eventReducer } from "./reducers/event";

const Store = configureStore({
  reducer: {
    user: userReducer,
    doctor: doctorReducer,
    products: productReducer,
    events: eventReducer,
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
