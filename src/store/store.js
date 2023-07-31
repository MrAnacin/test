import { configureStore } from "@reduxjs/toolkit"
import popUpReducer from './slice/popUpSlice'
import { coursesApi } from './servises/coursesApi';
import { workoutsApi } from "./servises/workoutsApi";
// import { userApi } from '../servises/userApi';
// import { songsApi } from '../servises/songsApi';
import userReducer from './slice/userSlice';
// import filterReducer from './slices/faiterSlice';
// import trackSlice from "./slices/trackSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        popUp: popUpReducer,
        [coursesApi.reducerPath]: coursesApi.reducer,
        [workoutsApi.reducerPath]: workoutsApi.reducer,
        // [userApi.reducerPath]: userApi.reducer,
        // [songsApi.reducerPath]: songsApi.reducer,
        // user: userReducer,
        // filter: filterReducer,
        // track: trackSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat( [coursesApi.middleware, workoutsApi.middleware] )
});