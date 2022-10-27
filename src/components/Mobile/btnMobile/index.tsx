import { RefObject } from 'react'
import SvgMenu from '../../../assets/icons/SvgMenu'

interface IBtnMobile {
  refDivMenuMobile: RefObject<HTMLDivElement>
}

const BtnMobile = ({ refDivMenuMobile }: IBtnMobile) => {
  return (
    <>
      <button
        className="bg-btnColorGreen p-1 rounded-sm hidden xs:block"
        onClick={() => {
          refDivMenuMobile.current?.classList.add('xs:flex')
          refDivMenuMobile.current?.classList.add('xs:animate-menuDelayIn')
        }}
      >
        <SvgMenu className="fill-white" />
      </button>
    </>
  )
}

export default BtnMobile
