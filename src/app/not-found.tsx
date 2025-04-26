import Link from "next/link"

export default function NotFound () {

    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center font-bold mt-9 text-6x1">
          Pagina 404 não encontrada
        </h1>
        <p>Essa página que tentou encontra não existe</p>

        <Link href='/'>
        Voltar para Home
        </Link>
      </div>
    )
  }