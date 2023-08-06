import { createContext, useEffect, useState } from "react";

interface Product {
    id: number
    title: string
    description: string
    price: number
    image: string
    platform: string[]
    amount: number
}

interface CartContextValue {
    cartItems: Product[];
    addItemToCart: (product: Product) => void;
    deleteItemToCart: (product: Product) => void;
  }

export const CartContext = createContext<CartContextValue>({
    cartItems: [],
    addItemToCart: () => {},
    deleteItemToCart: () => {},
})

export const CartProvider = ({children}: any) => {
    const [cartItems, setCartItems] = useState(() => {
        try {
            const productsEnLocalStorage = localStorage.getItem('cartProducts')
            return productsEnLocalStorage ? JSON.parse(productsEnLocalStorage) : []
        } catch (error) {
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem('cartProducts', JSON.stringify(cartItems))
    }, [cartItems])

    const addItemToCart = (product: Product) => {
        const inCart = cartItems.find((productInCart: Product) => productInCart.id === product.id);
    
        if (inCart) {
            setCartItems(
                cartItems.map((productInCart: Product) => {
                    if (productInCart.id === product.id) {
                       return {...inCart, amount: inCart.amount + 1}
                    } else return productInCart
                })
            )
        } else {
            setCartItems([...cartItems, { ...product, amount: 1 }]);
        }
    };

    const deleteItemToCart = (product: Product) => {
        const inCart = cartItems.find(
            (productInCart: Product) => productInCart.id === product.id
        )

        if(inCart.amount === 1) {
            setCartItems(
                cartItems.filter((productInCart: Product) => productInCart.id !== product.id)
            )
        } else {
            setCartItems(
                cartItems.map((productInCart: Product) => {
                if (productInCart.id === product.id) {
                    return {...inCart, amount: inCart.amount - 1}
                } else return productInCart
            }))
        }
    }

    return (
        <CartContext.Provider value={{cartItems, addItemToCart, deleteItemToCart}}>
            {children}
        </CartContext.Provider>
    )
}
