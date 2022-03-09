import { client } from "../../apolloClient/apolloClient";
import { queryProducts, ALL_BRANDS } from "../../apolloClient/querys";

export const getAllProducts = (inputFilter) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "SET_LOADING_PRODUCTS",
        payload: true,
      });
      const products = await client.query({
        query: queryProducts,
        variables: {
          input: inputFilter,
        },
      });
      dispatch({
        type: "GET_ALL_PRODUCTS",
        payload: {
          products: products.data.getAllProducts,
        },
      });
      setTimeout(() => {
        return dispatch({
          type: "SET_LOADING_PRODUCTS",
          payload: false,
        });
      }, 500);
      /* return dispatch({
        type: "SET_LOADING_PRODUCTS",
        payload: false,
      }); */
    } catch (error) {
      console.log(error);
    }
  };
};

export const resetSearch = () => {
  return {
    type: "RESET_SEARCH",
    payload: {
      search: false,
      searchValue: null,
    },
  };
};

export const setSearch = (value) => {
  return {
    type: "SET_SEARCH",
    payload: {
      search: true,
      searchValue: value,
    },
  };
};

export const getAllBrands = () => {
  return async function (dispatch) {
    const brands = await client.query({
      query: ALL_BRANDS,
    });

    dispatch({
      type: "GET_ALL_BRANDS",
      payload: brands.data.getAllBrands,
    });
  };
};

export const getProductSuggestion = (query) => {
  return async function (dispatch) {
    const { data } = await client.query({
      query: queryProducts,
      variables: { input: { name: query } },
    });
    const suggestions = data.getAllProducts.map(({ name }) => {
      const len = name.length;
      const mostrar = Math.floor((50 * len) / 100);
      const resultado = name.slice(0, mostrar) + "...";
      return resultado;
    });
    dispatch({
      type: "SUGGESTION",
      payload: suggestions.slice(0, 5),
    });
  };
};

export const resetProductSuggestion = ()=>{
  return {
    type:"SUGGESTION",
    payload:[]
  }
}
