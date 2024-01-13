"use client"
import { useState } from 'react'
import { BsFillHeartFill, BsSuitHeart } from 'react-icons/bs'

const ButtonLinke = ({ id }: any) => {
    const [liked, setLiked] = useState(false)

    return (
        <div>
            <button className='btn btn-dark' onClick={() => setLiked(!liked)}>{liked ? <BsFillHeartFill style={{ color: "#e81313" }} /> : <BsSuitHeart />}</button>
        </div>
    )
}
export default ButtonLinke