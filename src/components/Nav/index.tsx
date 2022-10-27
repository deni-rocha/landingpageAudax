interface INav {
  className: {
    nav: string | undefined
    ul: string | undefined
    li: string | undefined
    a: string | undefined
  }
}
const Nav = ({ className }: INav) => {
  return (
    <>
      <nav className={className.nav}>
        <ul className={className.ul}>
          <li className={className.li}>
            <a className={className.a} href="">
              Início
            </a>
          </li>
          <li className={className.li}>
            <a className={className.a} href="">
              Conheça
            </a>
          </li>
          <li className={className.li}>
            <a className={className.a} href="">
              Funcionalidades
            </a>
          </li>
          <li className={className.li}>
            <a className={className.a} href="">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
