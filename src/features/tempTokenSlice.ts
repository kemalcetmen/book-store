import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ProductState {
    tempToken: string,
}

const initialState: ProductState = {
    tempToken: "",
}

const productsSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        addtoken: (state, action: PayloadAction<string>) => {
            state.tempToken = action.payload
        },
    }
})

export default productsSlice.reducer
export const { addtoken } = productsSlice.actions