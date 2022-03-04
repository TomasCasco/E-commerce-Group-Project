const initialState = {
    products: [
      {
        id: 1,
        stock: 0,
        imageURL:'https://media.kingston.com/hyperx/features/hx-features-keyboard-alloyfpspro-litup.jpg',
        name: 'HyperX Alloy FPS Pro Gaming Keyboard',
        description: 'Mechnical Gaming Keyboard tenkeyless, with detachable USB-C cable, keys with radiant lighting effects.',
        price: 45,
    },
      {
        id: 2,
        stock: 0,
        imageURL:'https://media.kingston.com/hyperx/features/hx-features-keyboard-alloyfpspro-litup.jpg',
        name: 'HyperX Alloy FPS Pro Gaming Keyboard',
        description: 'Mechnical Gaming Keyboard tenkeyless, with detachable USB-C cable, keys with radiant lighting effects.',
        price: 45,
    },
      {
        id: 3,
        stock: 0,
        imageURL:'https://media.kingston.com/hyperx/features/hx-features-keyboard-alloyfpspro-litup.jpg',
        name: 'HyperX Alloy FPS Pro Gaming Keyboard',
        description: 'Mechnical Gaming Keyboard tenkeyless, with detachable USB-C cable, keys with radiant lighting effects.',
        price: 45,
    },
      {
        id: 4,
        stock: 0,
        imageURL:'https://media.kingston.com/hyperx/features/hx-features-keyboard-alloyfpspro-litup.jpg',
        name: 'HyperX Alloy FPS Pro Gaming Keyboard',
        description: 'Mechnical Gaming Keyboard tenkeyless, with detachable USB-C cable, keys with radiant lighting effects.',
        price: 45,
    },
      {
        id: 5,
        stock: 0,
        imageURL:'https://media.kingston.com/hyperx/features/hx-features-keyboard-alloyfpspro-litup.jpg',
        name: 'HyperX Alloy FPS Pro Gaming Keyboard',
        description: 'Mechnical Gaming Keyboard tenkeyless, with detachable USB-C cable, keys with radiant lighting effects.',
        price: 45,
    },
      {
        id: 6,
        stock: 0,
        imageURL:'https://media.kingston.com/hyperx/features/hx-features-keyboard-alloyfpspro-litup.jpg',
        name: 'HyperX Alloy FPS Pro Gaming Keyboard',
        description: 'Mechnical Gaming Keyboard tenkeyless, with detachable USB-C cable, keys with radiant lighting effects.',
        price: 45,
    }
    ],
    cart: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
          //Item data from products array
          const item = state.products.find(
            (product) => product.id === action.payload.id
          );
          // Check if Item is in cart already
          const inCart = state.cart.find((item) =>
            item.id === action.payload.id ? true : false
          );
    
          return {
            ...state,
            cart: inCart
              ? state.cart.map((item) =>
                  item.id === action.payload.id
                    ? { ...item, qty: item.qty + 1 }
                    : item
                )
              : [...state.cart, { ...item, qty: 1 }],
          };
        case 'REMOVE_FROM_CART':
          return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload.id),
          };
        case 'ADJUST_ITEM_QTY':
          return {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            ),
          };

        case 'SUBTRACT_ITEM_QTY':
          return {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty - 1 }
                : item
            ),
          };
        case 'LOAD_CURRENT_ITEM':
          return {
            ...state,
            currentItem: action.payload,
          };
        default:
          return state;
      }
    };
  
  
  export default cartReducer;