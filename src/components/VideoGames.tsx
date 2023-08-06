import videoGames from "../data/data"
import Card from "./Card"
import style from '../styles/VideoGames.module.css'
import { useState } from 'react'
import Paginacion from "./Paginacion"
import Cart from "./Cart/Cart"

const VideoGames = () => {
    const [pagina, setPagina] = useState(1)
    const [porPagina, setPorPagina] = useState(10)
    const maximo: number = Math.ceil(videoGames.length / porPagina)

    return (
        <section className={style.sectionGame}>
            <div className={style.contaiCart}>
                <Cart/>
            </div>
            <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo}></Paginacion>
            <div className={style.container}>
                {
                    videoGames.slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina).map((game, i: number) => {
                        return (
                            <Card
                                key={i}
                                id={game.id}
                                title={game.title}
                                description={game.description}
                                price={game.price}
                                image={game.image}
                                platform={game.platform}
                                amount={game.amount}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default VideoGames