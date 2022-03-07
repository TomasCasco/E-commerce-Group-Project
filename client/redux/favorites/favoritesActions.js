export const addToFavorites = (itemID) => {
    return {
      type: 'ADD_TO_FAVORITES',
      payload: {
        id: itemID,
      },
    };
  };
  
  export const removeFromFavorites = (itemID) => {
    return {
      type: 'REMOVE_FROM_FAVORITES',
      payload: {
        id: itemID,
      },
    };
  };