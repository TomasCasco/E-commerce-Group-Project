const initialState = {
    products: [
      {
        id: 1,
        stock: 0,
        image:'https://media.kingston.com/hyperx/features/hx-features-keyboard-alloyfpspro-litup.jpg',
        name: 'HyperX Alloy FPS Pro Gaming Keyboard',
        description: 'Mechnical Gaming Keyboard tenkeyless, with detachable USB-C cable, keys with radiant lighting effects.',
        price: 45,
    },
      {
        id: 2,
        stock: 0,
        image:'https://media.kingston.com/hyperx/features/hx-features-keyboard-alloyfpspro-litup.jpg',
        name: 'HyperX Alloy FPS Pro Gaming Keyboard',
        description: 'Mechnical Gaming Keyboard tenkeyless, with detachable USB-C cable, keys with radiant lighting effects.',
        price: 45,
    },
      {
        id: 3,
        stock: 0,
        image:'https://media.kingston.com/hyperx/features/hx-features-keyboard-alloyfpspro-litup.jpg',
        name: 'HyperX Alloy FPS Pro Gaming Keyboard',
        description: 'Mechnical Gaming Keyboard tenkeyless, with detachable USB-C cable, keys with radiant lighting effects.',
        price: 45,
    },
      {
        id: 4,
        stock: 0,
        image:'https://media.kingston.com/hyperx/features/hx-features-keyboard-alloyfpspro-litup.jpg',
        name: 'HyperX Alloy FPS Pro Gaming Keyboard',
        description: 'Mechnical Gaming Keyboard tenkeyless, with detachable USB-C cable, keys with radiant lighting effects.',
        price: 45,
    },
      {
        id: 5,
        stock: 0,
        image:'https://media.kingston.com/hyperx/features/hx-features-keyboard-alloyfpspro-litup.jpg',
        name: 'HyperX Alloy FPS Pro Gaming Keyboard',
        description: 'Mechnical Gaming Keyboard tenkeyless, with detachable USB-C cable, keys with radiant lighting effects.',
        price: 45,
    },
      {
        id: 6,
        stock: 0,
        image:'https://media.kingston.com/hyperx/features/hx-features-keyboard-alloyfpspro-litup.jpg',
        name: 'HyperX Alloy FPS Pro Gaming Keyboard',
        description: 'Mechnical Gaming Keyboard tenkeyless, with detachable USB-C cable, keys with radiant lighting effects.',
        price: 45,
    }
    ],
    favorites: []
  };
  
  const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITES':
          //Item data from products array
          const item = state.products.find(
            (product) => product.id === action.payload.id
          );
          // Check if Item is in cart already
          const inCart = state.favorites.find((item) =>
            item.id === action.payload.id ? true : false
          );
    
          return {
            ...state,
            favorites: inCart
              ? state.favorites.map((item) =>
                  item.id === action.payload.id
                    ? { ...item, qty: item.qty + 1 }
                    : item
                )
              : [...state.favorites, { ...item, qty: 1 }],
          };
        case 'REMOVE_FROM_FAVORITES':
          return {
            ...state,
            favorites: state.favorites.filter((item) => item.id !== action.payload.id),
          };
        default:
          return state;
      }
    };
  
  
  export default favoritesReducer;