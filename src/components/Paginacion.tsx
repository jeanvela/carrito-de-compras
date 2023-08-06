import { useState } from "react";
import style from '../styles/Paginacion.module.css'

interface Page {
    pagina: number
    setPagina: React.Dispatch<React.SetStateAction<number>>
    maximo: number
}

const Paginacion = ({pagina, setPagina, maximo}: Page) => {

    const [input, setInput] = useState(1)

    const nextPage = () => {
        setInput(input + 1)
        setPagina(pagina + 1)
    }

    const previousPage = () => {
        setInput(input - 1)
        setPagina(pagina - 1)
    }

    return (
        <div className={style.paginacion}>
            <button disabled={pagina === 1 || pagina < 1} className={style.btn} onClick={previousPage}>{`<`}</button>
            <p className={style.text_white}>{input}</p>
            <p className={style.text_white}> de {maximo}</p>
            <button disabled={pagina === Math.ceil(maximo) || pagina > Math.ceil(maximo)} className={style.btn} onClick={nextPage}>{`>`}</button>
        </div>
    )
}

export default Paginacion