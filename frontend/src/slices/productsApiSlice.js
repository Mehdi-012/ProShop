import { PRODUCT_URL } from "../constants";
import { apiSlice } from "./apiSlice";


// used to get all products

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: PRODUCT_URL,
            }),
            keepUnusedDataFor: 5,
        }),
        getProductsDetails: builder.query({
            query: (productId) => ({
                url: `${PRODUCT_URL}/${productId}`
            }),
            keepUnusedDataFor: 5,
        })
    }),
});

export const { useGetProductsQuery, useGetProductsDetailsQuery } = productsApiSlice;