import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import Product from "../pages/Product";
import { useNavigate } from "react-router-dom";

export const shopContext = createContext();
export const ShopContextProvider = (props) => {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  const addToCard = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size!");
      return;
    }
    let cardData = structuredClone(cartItems);
    if (cardData[itemId]) {
      if (cardData[itemId][size]) {
        cardData[itemId][size] += 1;
      } else {
        cardData[itemId][size] = 1;
      }
    } else {
      cardData[itemId] = {};
      cardData[itemId][size] = 1;
    }
    setCartItems(cardData);
  };
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          totalCount += cartItems[items][item];
        }
      }
    }
    return totalCount;
  };
  const updateQuantity = async (itemId, size, quantity) => {
    let cardData = structuredClone(cartItems);
    cardData[itemId][size] = quantity;
    setCartItems(cardData);
  };
  const getCardAmount = () => {
    let totalAmout = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmout += itemInfo.price * cartItems[items][item];
          }
        } catch (err) {}
      }
    }
    return totalAmout;
  };
  const currency = "$";
  const delivery_fee = 10;
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addToCard,
    cartItems,
    getCartCount,
    updateQuantity,
    getCardAmount,
    navigate
  };
  return (
    <shopContext.Provider value={value}>{props.children} </shopContext.Provider>
  );
};
