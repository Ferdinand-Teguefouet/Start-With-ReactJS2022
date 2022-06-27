import { createSlice } from "@reduxjs/toolkit";


const modalProperties = {
    isActive: false,
    headerContent: undefined,
    bodyContent: undefined
};

let id = 0;
const updateId = () => id++;

export const  modalSlice = createSlice({
    name: 'modal',
    initialState: [],
    reducers: {
        addModal: (state, action)=>{
            //console.log(action);
            state.push({
                id: updateId(), // the goal is to increase our id dynamiclly
                isActive: true,
                headerContent : action.payload.headerContent,
                bodyContent : action.payload.bodyContent,
            });            
        },
        removeModal: (state, action)=>{
            console.log(action);
            const idx = state.findIndex((modal) => modal.id === action.payload);
            console.log(idx);
            state.splice(idx, 1);
        }
    },
});

export const {addModal, removeModal} = modalSlice.actions;

export default modalSlice.reducer;