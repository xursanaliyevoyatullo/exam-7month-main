import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    products: [],
    amount: 4,
    user: null,
    mode: 'light'
}

document.documentElement.setAttribute("data-theme", initialState.mode);

const basketSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        userSetting: (state, { payload }) => {
            state.user = payload
        },
        toggleMode: (state) => {
            state.mode = state.mode === "dark" ? "light" : "dark";
            localStorage.setItem("mode", state.mode);
            document.documentElement.setAttribute("data-theme", state.mode);
        },
    },
});



export const { userSetting, toggleMode } = basketSlice.actions

export default basketSlice.reducer