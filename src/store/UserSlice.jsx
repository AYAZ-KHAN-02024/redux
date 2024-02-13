//====state and action============
//Toh, ek simple analogy ho sakti hai ki state ek snapshot hai jise aap dekh rahe hain, aur action ek button press karna hai jo kuch change laane ka instruction deta hai.

//===========reducers=========================
// Ye hamare application ke state ko manage karne mein madad karte hain. Redux ka use karte samay, ham apne application ke data ko ek universal store mein store karte hain, aur fir reducers us data ko modify karte hain.


//Reducers ka kaam hota hai state ko update karna based on actions jo hamare application mein hoti hain. Actions basically events hote hain jo kuch change ko represent karte hain, jaise ki koi button press karna ya koi data receive karna.


//=================slice==================
//Redux mein bhi, hum apne state ko slices mein divide karte hain, jise hum slices kehte hain. Har slice ek particular piece of information represent karta hai. yha pe yek userslice hai .
//aur jab hume jis info ki  jarurat hogi hum usko access kar sakte hai directly 



//===============step --1 =========================================



import { createSlice } from '@reduxjs/toolkit'

const UserSlice = createSlice({
    name: 'user',
    initialState: [],

    reducers:{
        addUsers(state, action) {

            state.push(action.payload);

        },


        removeUsers(state, action) {

            state.splice(action.payload, 1)
            //1 yani  vhai vala vlaue jo target kiya gya hai , 2 yani 1 oo jo target kiya gya hai aur dusra uske age vala


        },
        deleteAllUsers(state, action) {
            return [];
            //asign nhai kar rahe delte kar rahe hai , so return empty array
        },

    },

});



export { UserSlice };
export const { addUsers, removeUsers, deleteAllUsers } = UserSlice.actions;

// Aap jab UserSlice.actions likhte hain, toh aapko addUsers,etc ke sath sari actions milti hain jo UserSlice mein define ki gayi hain.
// Jab aap is line ko use karenge, toh aapko addUsers action mil jayegi, jise aap fir apne component ya kisi aur jagah par Redux store mein user add karne ke liye use kar sakte hain.








