'use client';
// cartcontext.js

import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

// cartcontext.js

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(
        item => item.title === action.payload.title && item.size === action.payload.size
      );

      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.title === action.payload.title && item.size === action.payload.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          ...state,
          items: updatedItems,
          total: state.total + parseFloat(action.payload.price.replace(/\s/g, '').replace(',', '.')),
          count: state.count + 1,
        };
      } else {
        const newItem = { ...action.payload, quantity: 1 };
        return {
          ...state,
          items: [...state.items, newItem],
          total: state.total + parseFloat(action.payload.price.replace(/\s/g, '').replace(',', '.')),
          count: state.count + 1,
        };
      }
      case 'INCREASE_QUANTITY':
        return {
          ...state,
          items: state.items.map(item =>
            item.title === action.payload.title && item.size === action.payload.size
             ? { ...item, quantity: item.quantity + 1 } : item
          ),
          total: state.total + parseFloat(action.payload.price.replace(/\s/g, '').replace(',', '.')),
          count: state.count + 1,
        };
  
        case 'DECREASE_QUANTITY':
          const targetItem = state.items.find(
            item => item.title === action.payload.title && item.size === action.payload.size
          );
        
          if (targetItem.quantity > 1) {
            return {
              ...state,
              items: state.items.map(item =>
                item.title === action.payload.title && item.size === action.payload.size
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              ),
              total: state.total - parseFloat(action.payload.price.replace(/\s/g, '').replace(',', '.')),
              count: state.count - 1,
            };
          } else {
            return {
              ...state,
              items: state.items.filter(
                item => !(item.title === action.payload.title && item.size === action.payload.size)
              ),
              total: state.total - parseFloat(action.payload.price.replace(/\s/g, '').replace(',', '.')),
              count: state.count - 1,
            };
          }
  
        case 'REMOVE_ITEM':
  const removedItem = state.items.find(
    item => item.title === action.payload.title && item.size === action.payload.size
  );

  if (removedItem) {
    const removedItemTotal =
      parseFloat(removedItem.price.replace(/\s/g, '').replace(',', '.')) * removedItem.quantity;
    const newTotal = state.total - removedItemTotal;
    const total = newTotal < 0 ? 0 : newTotal;
    return {
      ...state,
      items: state.items.filter(
        item => !(item.title === action.payload.title && item.size === action.payload.size)
      ),
      total,
      count: state.count - removedItem.quantity,
    };
  } else {
    return state;
  }
    default:
      return state;
  }
};


const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    count: 0,
  });

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };

