import {createSlice} from "@reduxjs/toolkit";

interface PopupState {
    show: boolean;
    message: string;
    selected: any;
}

const initialState = {
    show: false,
    message: '',
    selected: []
} as PopupState;

const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        showPopup(state, action) {
            state.show =! state.show;
            state.message = action.payload;
        },
        setSelected(state, action) {
            if (state.selected.length === 0) {
                state.selected.push(action.payload);
            }else {
                state.selected = [];
            }
        },
    }
});

export default popupSlice.reducer;

export const {showPopup, setSelected} = popupSlice.actions;