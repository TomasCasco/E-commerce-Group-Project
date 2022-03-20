import { client } from "../../apolloClient/apolloClient";
import { queryBills, queryBuyFromCheckout } from "../../apolloClient/querys";

export const buyFromCheckout = async ({ cart, userId, email }) => {
  const cartCheckout = cart.map((product) => {
    return {
      id: product.product._id,
      title: product.product.name,
      unit_price: product.product.price,
      picture_url: product.product.image,
      quantity: product.qty,
    };
  });

  try {
    const response = await client.query({
      query: queryBuyFromCheckout,
      variables: {
        cart: cartCheckout,
        userId,
        email,
      },
    });
    return response;
  } catch (e) {
    console.log(JSON.stringify(e, null, 2));
  }
};

export const getBills = (userId) => {
  return {
    type: "GET_BILLS",
    payload: userId,
  };
};
