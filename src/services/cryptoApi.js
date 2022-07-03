// Not available free more
// const cryptoApiHeaders = {
//   "X-RapidAPI-Key": "fb80bf5ba6msh7f14e2da284510ap17d20cjsnc361ce0c08e6",
//   "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
// };

// const baseUrl = "https://coinranking1.p.rapidapi.com/coins";

// step II function helps to write url & headers for exchanges endpoin request

//CoinMarketCapFreeApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const cryptoApiHeaders = {
  "X-RapidAPI-Key": "baba849424msha8ee43be083c663p194932jsn9f4ba8f28e69",
  "X-RapidAPI-Host": "CoinMarketCapzakutynskyV1.p.rapidapi.com",
};
const baseUrl =
  "https://coinmarketcapzakutynskyv1.p.rapidapi.com/getCryptocurrenciesList";
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });
// have to pass/provide imp options
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  fetchQuery: fetchBaseQuery({ baseUrl }),
  // endpoints = func(parameter) WHICH returns inside object
  endpoints: (builder) => ({
    getCryptos: builder.query({
      //query: ()=> '/exchanges'    (Step-I)
      query: () => createRequest("/coins"), // step-II Now it need connect to with store.js for
    }), // '/exchanges' is replaced by coins as it provides more information that we looking for
  }), // Now export
});
export const { useGetCryptosQuery } = cryptoApi;
// drive from getCryptos but use before & Query at end. Go home page and import it
//query goining to poin that specific request/ as here is exchanges &  for exchanges there must to provide headers

//Step I
/*import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query';

const cryptoApiHeaders={
    'X-RapidAPI-Key': 'fb80bf5ba6msh7f14e2da284510ap17d20cjsnc361ce0c08e6',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';
export const cryptoApi = createApi ({
    reducerPath: 'cryptoApi',
    fetchQuery: fetchBaseQuery({ baseUrl }),
    // endpoints = func(parameter) WHICH returns inside object
        endpoints : (builder)=> ({
        getCryptos: builder.query({
            query: () => '/exchanges'
        })
    })
});*/

/*
(method) query(arg: any): any
query can be a function that returns either a string or an object which is passed to your baseQuery. If you are using fetchBaseQuery, this can return either a string or an object of properties in FetchArgs. If you use your own custom baseQuery, you can customize this behavior to your liking.
@example
// codeblock-meta title="query example"
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
interface Post {
    id: number
  name: string
}
type PostsResponse = Post[]
}),
 }),
});


const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (build) => ({
    getPosts: build.query<PostsResponse, void>({
      // highlight-start
      query: () => 'posts',
      // highlight-end


      // `result` is the server response
     providesTags: (result, error, id) => [{ type: 'Post', id }],
     // trigger side effects or optimistic updates
     onQueryStarted(id, { dispatch, getState, extra, requestId, queryFulfilled, getCacheEntry, updateCachedData }) {},
     // handle subscriptions etc
     onCacheEntryAdded(id, { dispatch, getState, extra, requestId, cacheEntryRemoved, cacheDataLoaded, getCacheEntry, updateCachedData }) {},
   }),
 }),
});
*/

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Key': 'fb80bf5ba6msh7f14e2da284510ap17d20cjsnc361ce0c08e6',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };
