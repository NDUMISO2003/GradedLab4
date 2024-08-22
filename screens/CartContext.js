import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
   
    const priceWithoutCurrency = parseFloat(item.price.replace('R', '').trim());
    const itemWithNumericPrice = { ...item, price: priceWithoutCurrency };

    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(cartItem => cartItem.id === itemWithNumericPrice.id);
      if (existingItemIndex > -1) {
        
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      }
     
      return [...prevItems, { ...itemWithNumericPrice, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.map(item => item.id === id ? { ...item, quantity } : item);
      return updatedItems.filter(item => item.quantity > 0); 
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);

