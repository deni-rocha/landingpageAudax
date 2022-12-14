import { RefObject } from 'react'

import Nav from '../Nav'
import BtnMobile from '../Mobile/btnMobile'
import Tittle from './Tittle'

interface IHeader {
  refDivMenuMobile: RefObject<HTMLDivElement>
}
const Header = ({ refDivMenuMobile }: IHeader) => {
  return (
    <header
      className="
      flex gap-4 flex-col items-center w-full text-xs
      xs:flex-row xs:justify-between
      md:flex-row md:justify-between
      "
    >
      <Tittle />
      <Nav
        className={{
          nav: 'xs:hidden',
          ul: 'flex space-x-6 md:space-x-12 ',
          li: '',
          a: ''
        }}
      />
      <BtnMobile refDivMenuMobile={refDivMenuMobile} />
    </header>
  )
}

export default Header
