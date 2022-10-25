const Header: React.FunctionComponent = () => {
  return (
    <header className="flex flex-col">
      <h1 className="text-5xl font-bold">Datanow</h1>

      <nav>
        <a href="">Início</a>
        <a href="">Conheça</a>
        <a href="">Funcionalidades</a>
        <a href="">Contato</a>
      </nav>
      <p className="self-end">Esse texto é uma headline super legal</p>
    </header>
  )
}

export default Header
