
//=====================step 2 ==========================

import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./UserSlice";


const Store = configureStore({
    reducer:{
        users:UserSlice.reducer,
        //i can put any name at users
    },
})

export default Store;

// - Ab hum apna Redux store banayenge. configureStore function ko call karke, hum ek object pass kar rahe hain jisme ek reducer key hai. Reducer, basically, humare slices ko combine karta hai.

//reducer key ke andar, hum ek object de rahe hain jisme users key hai, aur uski value hai UserSlice.reducer. Yeh kehta hai ki "users"  ke liye  UserSlice ka reducer use karo. 

