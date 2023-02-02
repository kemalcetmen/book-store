import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { Categories } from "../../types/categories"
import { Book } from "../../types/book"

export const fetchBooks = createAsyncThunk("fetchBooks", async () => {
    const { data } = await axios.get(`/api/categories/categories`);
    let books: Book[] = []
    const categories = data.category

    for (const category of categories) {
        const { data } = await axios.get(`/api/categories/${category.id}`);

        for (const book of data.product) {
            const { data } = await axios.post('https://assign-api.piton.com.tr/api/rest/cover_image', {
                fileName: book.cover,
            })

            let onebook = {
                ...book,
                cover: data.action_product_image.url,
                category: category.name,
                category_id: category.id
            }
            books.push(onebook)
        }
    }
    return {
        books:
            books,
        categories:
            categories
    }
})


interface ProductState {
    categories: Categories[],
    books: Book[],
    loading: boolean,
    error: string,
}

const initialState: ProductState = {
    categories: [],
    books: [],
    loading: false,
    error: "",
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state) => {
            state.loading = true;
            state.error = "";
        })
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "";
            state.books = action.payload.books
            state.categories = action.payload.categories
        })
        builder.addCase(fetchBooks.rejected, (state) => {
            state.loading = false;
            state.error = "Error fetching user data";
        })
    },
})

export default productsSlice.reducer
