import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Colégio Normélia Ballock',
  description:'Novo site CNB',
  openGraph:{
    title:'Colégio Normélia Ballock',
    description:'Parte da URL'

  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
}


export const revalidate = 60;

export default function Home () {

const randomNumber = Math.random() * 10

  return (
    <div>
      <h1>Pagina Home</h1>
      <h2>Número Gerado: {randomNumber}</h2>
    </div>
  )
}