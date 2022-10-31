import Tittle from '../../Header/Tittle'
import Nav from '../../Nav'
const Footer = () => {
  return (
    <footer
      className="
      bg-textPrimary border-t-2 mt-20 w-10/12 mx-auto
      md:w-8/12
      "
    >
      <div className="flex justify-between items-center mt-4">
        <Tittle className="text-bgDefault" />
        <Nav
          className={{
            nav: 'text-gray-500 text-right w-full',
            ul: 'md:flex md:justify-end md:gap-3 gap-2',
            li: 'text-xs font-roboto',
            a: ''
          }}
        />
      </div>
    </footer>
  )
}

export default Footer
