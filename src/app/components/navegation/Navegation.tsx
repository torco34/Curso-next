import React from 'react'
import Link from 'next/link'
import style from './css/navegation.module.css'
import Perfil from './Perfil'
const links = [
    { label: "Inicio", route: "/" },
    { label: "Tiendo", route: "/about" },
    { label: "Ofertas", route: "/todo" },
    { label: "Servicio al cliente", route: "/" },
    { label: "distribución", route: "/todo" },
    { label: "Post", route: "/posts" },]
const Navegation = () => {
    return (
        <div className={style.navegation}>
            <ul className={style.header} >
                {links.map(({ label, route }) => (
                    <li key={route} className={style.link}>
                        <Link href={route}>{label}</Link>
                    </li>
                ))}

            </ul>
            <Perfil />
        </div>
    )
}

export default Navegation