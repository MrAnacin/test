import { configureStore } from "@reduxjs/toolkit"
import popUpReducer from './slice/popUpSlice'
import { coursesApi } from './servises/coursesApi';
import { workoutsApi } from "./servises/workoutsApi";
import { usersApi } from "./servises/usersApi";
import userReducer from './slice/userSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        popUp: popUpReducer,
        [coursesApi.reducerPath]: coursesApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [workoutsApi.reducerPath]: workoutsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat( 
        [
            coursesApi.middleware,
            workoutsApi.middleware,
            usersApi.middleware
        ]
    )
});