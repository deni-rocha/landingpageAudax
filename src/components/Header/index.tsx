const Header: React.FunctionComponent = () => {
  return (
    <header className="flex absolute gap-2 flex-col md:flex-row w-10/12 h-20 items-center md:justify-between bg-bgDefault border border-white">
      <h1 className="text-4xl font-extrabold uppercase">Datanow</h1>
      <nav className="space-x-6 md:space-x-12">
        <a href="">Início</a>
        <a href="">Conheça</a>
        <a href="">Funcionalidades</a>
        <a href="">Contato</a>
      </nav>
    </header>
  )
}

export default Header
