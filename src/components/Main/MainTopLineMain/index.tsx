import notebookFirst from '../../../../public/images/MainTopLine/notebook-first.png'
import dataBL from '../../../../public/images/MainTopLine/dataBL.png'
import dataBR from '../../../../public/images/MainTopLine/dataBR.png'
import dataTL from '../../../../public/images/MainTopLine/dataTL.png'
import dataTR from '../../../../public/images/MainTopLine/dataTR.png'
import Image from 'next/image'

const MainTopLine = () => {
  return (
    <section
      className="
        mt-10 space-y-8 
        xs:space-y-12
        flex flex-col items-center
        md:flex-row md:justify-between
        "
    >
      <section
        className="
          max-w-xs relative w-full
          flex flex-col items-center
          md:order-1 md:items-end
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
          className="
          w-10 absolute top-20 right-8
          md:top-36 md:right-5
          "
        >
          <Image src={dataTR} alt="table-data" className="object-cover" />
        </div>

        <div
          className="
        h-60 w-64 z-10           
        md:h-72 md:w-80
        "
        >
          <Image src={notebookFirst} alt="notebook" className="object-cover" />
        </div>

        <div
          className="
        w-14 absolute bottom-3 left-4
        "
        >
          <Image src={dataBL} alt="table-data" className="object-cover" />
        </div>
        <div
          className="
        w-16 absolute bottom-6 right-10
        md:w-24 md:-bottom-3 md:right-4
        "
        >
          <Image src={dataBR} alt="table-data" className="object-cover" />
        </div>
      </section>

      <div className="p-2 w-96 lg:mr-4 ">
        <section
          className="
            font-bold leading-6 
            md:text-xl
            lg:text-2xl
            "
        >
          <h1 className="">Esse texto é uma</h1>
          <h1 className="">headline super legal</h1>
        </section>
        <p
          className="text-xs pt-2 text-textSecondary
          
        "
        >
          E esse texto aqui acompanha o título. Já que eu preciso falar muito,
          vou falar sobre Emas. Considerada a maior ave do continente americano,
          a ema pode chegar a medir 1,70 m de altura! Impressionante, não é?
        </p>

        <div
          className="
            w-full text-center pt-4
            md:text-left
            "
        >
          <button
            className="
            h-8 w-60 rounded-full font-bold contrast-150 bg-btnColorGreen
            text-sm
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
