import {useContext, useEffect, useState} from "react";
import { CartContext } from "./CartContext";
import ItemCart from "./ItemCart";
import style from '../../styles/Cart.module.css'

interface Produ {
    id: number
    title: string
    description: string
    price: number
    image: string
    platform: string[]
    amount: number
}

const Cart = () => {

    const [cartOpen, setCartOpen] = useState(false)
    const [productsLength, setProductsLength] = useState(0)
    const { cartItems } = useContext(CartContext)

    useEffect(() => {
        setProductsLength(
            cartItems.reduce((previous, current) => previous + current.amount, 0)
        )
    }, [cartItems])

    const total = cartItems.reduce((previous: number, current: Produ) => previous + current.amount * current.price, 0)

    return (
        <div className={style.cartContainer}>
            <div onClick={() => {
                setCartOpen(!cartOpen)
            }} className={style.buttonCartContainer}>
                <div className={style.buttonCart}>
                    {
                        !cartOpen ? (
                            <div>
                                🛒
                            </div>
                        ) : (
                            <div>
                                X
                            </div>
                        )
                    }
                </div>
                {
                    !cartOpen && (
                        <div className={style.productsNumber}>{productsLength}</div>
                    )
                }
            </div>
            {
                cartItems && cartOpen && (
                    <div className={style.cart}>
                        <h2>Tu carrito</h2>
                        {cartItems.length === 0 ? <p className={style.cartVacio}>Tu carrito esta vacio</p>: (
                            <div className={style.productsContainer}>
                                {cartItems.map((item: Produ,i: number) => (
                                    <ItemCart key={i} item={item} />
                                ))}
                            </div>
                        )}
                        <div className={style.containerTotal}>
                            <h2 className={style.total}>Total: {total}</h2>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Cart