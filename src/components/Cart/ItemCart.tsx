import { useContext } from "react";
import { CartContext } from "./CartContext";
import style from '../../styles/ItemCart.module.css'

interface Produ {
    id: number
    title: string
    description: string
    price: number
    image: string
    platform: string[]
    amount: number
}

interface ItemProps {
    item: Produ
}

const ItemCart = ({item}: ItemProps) => {

    const {addItemToCart, deleteItemToCart} = useContext(CartContext)

    return (
        <div className={style.cartItem}>
            <img className={style.imagen} src={item.image} alt={item.title} />
            <div className={style.dataContainer}>
                <div className={style.left}>
                    <p className={style.name}>{item.title}</p>
                    <div className={style.btn}>
                        <button className={style.btn_agregar} onClick={() => addItemToCart(item)}>Agregar</button>
                    </div>
                </div>
                <div className={style.right}>
                    <div className={style.amount}>{item.amount}</div>
                    <p className={style.total}>Total: {item.amount * item.price}</p>
                </div>
                <div>
                    <button className={style.sacar_product} onClick={() => deleteItemToCart(item)}>-</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCart