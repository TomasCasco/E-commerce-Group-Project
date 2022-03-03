export const addToCart = (itemID) => {
    return {
      type: 'ADD_TO_CART',
      payload: {
        id: itemID,
      },
    };
  };
  
  export const removeFromCart = (itemID) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: {
        id: itemID,
      },
    };
  };
  
  export const addItemQty = (id) => {
    return {
      type: 'ADJUST_ITEM_QTY',
      payload: {
        id: id
        }
    };
  };

  export const subtractItemQty = (id) => {
    return {
      type: 'SUBTRACT_ITEM_QTY',
      payload: {
        id: id
        }
    };
  };
  
  export const loadCurrentItem = (item) => {
    return {
      type: 'LOAD_CURRENT_ITEM',
      payload: item,
    };
  };