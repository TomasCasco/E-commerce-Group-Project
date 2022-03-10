import { client } from "../../apolloClient/apolloClient";
import { getById } from "../../apolloClient/querys";

export const getProductsById = (_id) => {
  return async (dispatch) => {
    try {
      const product = await client.query({
        query: getById,
        variables: {
          input: _id,
        },
      });
      dispatch({
        type: "GET_PRODUCT_BY_ID",
        payload: product.data.getProductById,
      });
    } catch (e) {
      console.error(e);
    }
  };
};
