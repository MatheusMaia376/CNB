'use client'

import { useState } from "react"


export function Button () {
    const [nome, setNome] = useState("Sujeito Programador")

   function handleChangeName () {
        setNome("Maia")
    }


    return (
        <div>
            <button onClick={handleChangeName}>Alterar Nome</button>
            <h3>Nome: {nome}</h3>
        </div>
    )
}