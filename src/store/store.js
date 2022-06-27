import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter.slice';
import blogReducer from './blog.slice';
import modalReducer from './modal.slice';
import userReducer from './user.slice';

export const myStore = {
    counter: {
        value: 0,
    },
    blog: {
        articles: [],
        status: "INITIAL",
    },
    modal: [],
    team: {
        users: [],
        status: "INITIAL",
    }
};

const store = configureStore({
  reducer: {
      counter: counterReducer,
      blog: blogReducer,
      modal: modalReducer,
      user: userReducer,
  }
});


export default store;
