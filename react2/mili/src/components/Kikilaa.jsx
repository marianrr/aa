import React from "react"
import { useParams } from "react-router-dom"


export default function Kikilaa() {
    const {namee} = useParams()
    console.log(namee)
    return (
        <>
        <p>miauuuu...</p>
        
        <p>Numele este {namee}</p>
        </>
    )
}