import { configureStore } from "@reduxjs/toolkit"
import popUpReducer from './slice/popUpSlice'
// import { userApi } from '../servises/userApi';
// import { songsApi } from '../servises/songsApi';
// import userReducer from './slices/userSlice';
// import filterReducer from './slices/faiterSlice';
// import trackSlice from "./slices/trackSlice";

export default configureStore({
    reducer: {
        popUp: popUpReducer
        // [userApi.reducerPath]: userApi.reducer,
        // [songsApi.reducerPath]: songsApi.reducer,
        // user: userReducer,
        // filter: filterReducer,
        // track: trackSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
       // [userApi.middleware, songsApi.middleware]
    )
});