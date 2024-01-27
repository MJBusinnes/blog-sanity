// Neste arquivo toda vez que uma página não for encontrada a resposta será 'Página não encontrada' sem erros.
import Link from "next/link"

Link;

const notfound = () => {
  return (
    <div className="flex min-h-screen flex-col mb-8 lg:px-40 px-4">notfound</div>
  )
}

export default notfound