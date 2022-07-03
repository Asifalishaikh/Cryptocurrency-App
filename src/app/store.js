import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi"; // now pass reduser in reducer:{},

export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]: cryptoApi.reducer, // after step-2 as we createApi as reducer & our application is connected. Now according to need which data we will fetch
    },
})