import notebookFirst from '../../assets/firstSection/notebook-first.png'
import dataBL from '../../assets/firstSection/dataBL.png'
import dataBR from '../../assets/firstSection/dataBR.png'
import dataTL from '../../assets/firstSection/dataTL.png'
import dataTR from '../../assets/firstSection/dataTR.png'
import Image from 'next/image'

const Main = () => {
  return (
    <section
      className="
      mt-10 space-y-8 
      flex flex-col items-center"
    >
      <div
        className="
        max-w-xs relative w-full
        flex flex-col items-center 
       "
      >
        <div
          className="w-10 absolute 
        top-10 left-16
        "
        >
          <Image src={dataTL} alt="table-data" />
        </div>
        <div
          className="w-10 absolute 
        top-20 right-8
        "
        >
          <Image src={dataTR} alt="table-data" className="object-cover" />
        </div>

        <div className="h-60 w-64 z-10">
          <Image src={notebookFirst} alt="notebook" className="object-cover" />
        </div>

        <div className="w-14 absolute bottom-3 left-4">
          <Image src={dataBL} alt="table-data" className="object-cover" />
        </div>
        <div className="w-16 absolute bottom-6 right-10">
          <Image src={dataBR} alt="table-data" className="object-cover" />
        </div>
      </div>

      <div className="border-white border">
        <h1>Esse texto é uma headline super legal</h1>
        <div className="mx-2">conteudo mains</div>
        <p className="">Esse texto é uma headline super legal</p>
      </div>
    </section>
  )
}

export default Main
