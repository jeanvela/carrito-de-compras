import style from '../styles/Card.module.css'
import { useContext } from 'react'
import { CartContext } from './Cart/CartContext'

interface Games {
    id: number
    title: string
    description: string
    price: number
    image: string
    platform: string[]
    amount: number
}

const Card = ({id, title, description, price, image, platform, amount}: Games) => {

    const { addItemToCart } = useContext(CartContext)
    const produ: Games = {
        id,
        title,
        description,
        price,
        image,
        platform,
        amount
    }
  return (
    <div className={style.container}>
        <div className={style.contaiImg}>
            <img src={image} alt={title} />
        </div>
        <div className={style.info}>
            <div className={style.titlePrice}>
                <h3>{title}</h3>
                <span>$ {price}</span>
            </div>
            <div className={style.contaiDescrip}>
                <p>{description}</p>
            </div>
            <div className={style.contaiSpan}>
                {
                    platform.map(plat => {
                        return (
                            <span className={style.platf}>{plat}</span>
                        )
                    })
                }
            </div>
            <div className={style.contaiBtn}>
                <button  onClick={() => addItemToCart(produ)} className={style.btn}>Agregar</button>
            </div>
        </div>
    </div>
  )
}


export default Card