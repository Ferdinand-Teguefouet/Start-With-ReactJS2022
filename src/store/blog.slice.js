import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

// The process to fetch some data
// 1. YOU HAVE TO LAUNCH THE FETCH. IT WILL BE PENDING.
// 2. IT CAN  BE SUCCESSFUL
// 3. IT CAN BE AN ERROR

// First, create the thunk
const url = 'https://jsonplaceholder.typicode.com/posts';
export const fetchArticles = createAsyncThunk('blog/fetchArticles',
    async () => {
        try {
            const response = await fetch(url);
            const articles = await response.json();
            return articles;
        } catch (error) {
            console.error(error);
        }
    }
)

export const  blogSlice = createSlice({
    name: 'blog',
    initialState: {
        status: "INITIAL",
        articles: [],
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticles.pending, (state) => {
            state.status = 'PENDING';
        });
        builder.addCase(fetchArticles.fulfilled, (state, action) => {
            state.articles = action.payload;
            state.status = 'SUCCESS';
        });
        builder.addCase(fetchArticles.rejected, (state) => {
            state.status = 'ERROR';
        });
    },
});

export default blogSlice.reducer;