import notebookFirst from '../../assets/firstSection/notebook-first.png'
import dataBL from '../../assets/firstSection/dataBL.png'
import dataBR from '../../assets/firstSection/dataBR.png'
import dataTL from '../../assets/firstSection/dataTL.png'
import dataTR from '../../assets/firstSection/dataTR.png'
import Image from 'next/image'

const Main = () => {
  return (
    <section className="mt-24">
      <div className="flex flex-col w-8/12 items-center m-auto">
        <div className="flex justify-between mt-8 w-6/12 absolute">
          <div className="w-2/12">
            <Image src={dataTL} alt="table-data" />
          </div>
          <div className="w-2/12">
            <Image src={dataTR} alt="table-data" />
          </div>
        </div>
        <div className="z-10 w-10/12">
          <Image src={notebookFirst} alt="notebook" />
        </div>
        <div className=" flex mt-56 absolute w-6/12 justify-between">
          <div className="w-4/12">
            <Image src={dataBL} alt="table-data" />
          </div>
          <div className="w-4/12">
            <Image src={dataBR} alt="table-data" />
          </div>
        </div>
      </div>

      <article>Esse texto é uma headline super legal</article>
      <div className="mx-2">conteudo mains</div>
      <p className="">Esse texto é uma headline super legal</p>
    </section>
  )
}

export default Main
