import notebookFirst from '../../../assets/MainTopLine/notebook-first.png'
import dataBL from '../../../assets/MainTopLine/dataBL.png'
import dataBR from '../../../assets/MainTopLine/dataBR.png'
import dataTL from '../../../assets/MainTopLine/dataTL.png'
import dataTR from '../../../assets/MainTopLine/dataTR.png'
import Image from 'next/image'

const MainTopLine = () => {
  return (
    <section
      className="
        mt-10 space-y-8 
        xs:space-y-12
        flex flex-col items-center"
    >
      <section
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
      </section>

      <div className="p-2">
        <section
          className="
            font-bold leading-6 text-lg
            xs:text-md
            "
        >
          <h1 className="">Esse texto é uma</h1>
          <h1 className="">headline super legal</h1>
        </section>
        <p className="text-xs pt-2 text-textSecondary">
          E esse texto aqui acompanha o título. Já que eu preciso falar muito,
          vou falar sobre Emas. Considerada a maior ave do continente americano,
          a ema pode chegar a medir 1,70 m de altura! Impressionante, não é?
        </p>

        <div
          className="
            w-full text-center pt-4
            "
        >
          <button
            className="
            h-10 w-72 rounded-full font-bold contrast-125 bg-btnColorGreen
            xs:h-8 xs:w-60
            "
          >
            <a href="">Isso aqui é um CTA</a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default MainTopLine
