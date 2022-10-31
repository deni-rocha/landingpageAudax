import Image from 'next/image'
import rectangle from '../../../public/images/Bottom/rectangle.png'
import Footer from './Footer'
import Form from './Form'

const Bottom = () => {
  return (
    <section className="bg-textPrimary">
      <div className="w-65 h-16">
        <Image src={rectangle} alt="rectangle" />
      </div>
      <Form />
      <Footer />
    </section>
  )
}

export default Bottom
