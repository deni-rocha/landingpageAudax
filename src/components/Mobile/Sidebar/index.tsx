import { RefObject } from 'react'
import SvgArrowBack from '../../../assets/icons/SvgArrowBack'
import Nav from '../../Nav'

interface ISideBar {
  refDivMenuMobile: RefObject<HTMLDivElement>
}
const Sidebar = ({ refDivMenuMobile }: ISideBar) => {
  function closeBtn() {
    // esse timeout é para a animação de 'remoção' do sidebar
    setTimeout(() => {
      refDivMenuMobile.current?.classList.remove('xs:animate-menuDelayOut')
      refDivMenuMobile.current?.classList.remove('xs:flex')
    }, 500)
    refDivMenuMobile.current?.classList.add('xs:animate-menuDelayOut')
  }

  return (
    <>
      <div
        className="fixed right-0 w-screen  h-screen z-20 hidden xs:justify-end"
        ref={refDivMenuMobile}
      >
        <div
          className="bg-black opacity-60 fixed right-0 w-screen h-screen"
          onClick={closeBtn}
        ></div>
        <div className="bg-bgDefault z-30 relative w-8/12 h-full">
          <SvgArrowBack
            className="w-7 h-7 absolute left-5 top-5 fill-black cursor-pointer"
            onClick={closeBtn}
          />
          <Nav
            className={{
              nav: 'h-80 text-sm',
              ul: 'pt-20 flex flex-col gap-4 items-center',
              li: 'py-4 px-2 w-10/12 rounded-lg bg-btnColorGreen drop-shadow-xl cursor-pointer flex justify-center',
              a: 'text-center font-bold contrast-200'
            }}
          />
        </div>
      </div>
    </>
  )
}

export default Sidebar
