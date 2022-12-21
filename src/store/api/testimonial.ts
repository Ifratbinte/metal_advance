import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { createApi } from "@reduxjs/toolkit/query/react";
const TOKEN = `3124d34ba6d202a6db449b9e7827e19ab1fd4a4f909b2529dedfb640432aea11ceebc032fdd772564d4caa66906983fede41e280d52b6276bf749727163ad654579276856e495df5001ff373f775e752baea23733ae5758d6f8c1a0c5d386a515ab732d82e02ff0c29efa5fbbc07de6cdd9088a282bae6aab2e1e9b2d06aed43`;
export const testimonial = createApi({
  reducerPath: "testimonial",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://157.245.56.86:1337",
    prepareHeaders: (headers, { getState }) => {
      headers.set("authorization", `Bearer ${TOKEN}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTestimonial: builder.query({
      query: () => ({
        url: "/v1/testimonials?populate=*",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetTestimonialQuery } = testimonial;
