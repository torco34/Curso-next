import React from 'react'
import Link from 'next/link'
import style from './css/navegation.module.css'
const links = [
    { label: "Inicio", route: "/" },
    { label: "Tiendo", route: "/about" },
    { label: "Ofertas", route: "/todo" },
    { label: "Servicio al cliente", route: "/" },
    { label: "distribución", route: "/todo" },]
const Navegation = () => {
    return (
        <div >
            <ul className={style.header} >
                {links.map(({ label, route }) => (
                    <li key={route} className={style.link}>
                        <Link href={route}>{label}</Link>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Navegation