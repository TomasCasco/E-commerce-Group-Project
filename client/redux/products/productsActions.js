import {client} from "../../apolloClient/apolloClient"
import { queryProducts } from "../../apolloClient/querys";

export const getAllProducts = (inputFilter) => {
  return async(dispatch) => {
    try {
      dispatch({
          type:"SET_LOADING_PRODUCTS",
          payload:true
      });  
      const products = await client.query({
        query: queryProducts,
        variables:{
            "input":inputFilter
          }
      });
      dispatch({
          type:"GET_ALL_PRODUCTS",
          payload:{
          products:products.data.getAllProducts,
        }
      })
      setTimeout(()=>{
          return dispatch({
              type:"SET_LOADING_PRODUCTS",
              payload:false
          })
      },1000)
    } catch (error) {
        console.log(error)
    }
  };
};

export const resetSearch=()=>{
    return {
      type:"RESET_SEARCH",
      payload:{
        search:false,
        searchValue:null
      }
    }
  }


export const setSearch=(value)=>{

  return {
    type:"SET_SEARCH",
    payload:{
      search:true,
      searchValue:value
    }
  }

}

