import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchBooks = createAsyncThunk("fetchBooks", async () => {
    const { data } = await axios.get(`./list.json`);
    return data
})

interface Product {
}

interface ProductState {
    products: Product[],
    loading: boolean,
    error: string,
}

const initialState: ProductState = {
    products: [],
    loading: false,
    error: "",
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<string>) => {
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state) => {
            state.loading = true;
            state.error = "";
        })
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "";
            state.products = action.payload.data
        })
        builder.addCase(fetchBooks.rejected, (state) => {
            state.loading = false;
            state.error = "Error fetching user data";
        })
    },
})

export default productsSlice.reducer
export const { add } = productsSlice.actions