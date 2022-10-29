import Image from 'next/image'
import firstLeftNotebook from '../../../../public/images/MainMiddleLine/first-left.png'
import firstRightNotebook from '../../../../public/images/MainMiddleLine/first-right.png'
import secondRight from '../../../../public/images/MainMiddleLine/second-right.png'
import thirdLeft from '../../../../public/images/MainMiddleLine/third-left.png'
import fourthRight from '../../../../public/images/MainMiddleLine/fourth-right.png'
import fivethLeft from '../../../../public/images/MainMiddleLine/fiveth-left.png'
import MainCardTopNotebook from './MainCards/MainCardFirstBlock'
import MainCardLastBlock from './MainCards/MainCardLastBlock'

const MainMiddleLine = () => {
  return (
    <section
      className="py-2 pt-12
    md:pt-24
    "
    >
      <div
        className="space-y-2
      md:flex md:flex-col md:items-center
      "
      >
        <h2
          className="
        font-bold text-center
        md:text-2xl
        "
        >
          Conheça
        </h2>
        <p
          className="text-xs text-center 
        md:w-10/12
        "
        >
          Ema, também conhecida como nandu, nhandu, guaripé e xuri, é uma ave da
          família Rheidae nativa da América do Sul. Apesar de possuir grandes
          asas, é uma ave não voadora.
        </p>
      </div>

      <section className="py-12">
        <div
          className="space-y-12 flex flex-col 
        md:flex-row md:items-center p-2 md:justify-center md:gap-6 md:space-y-0
        "
        >
          <MainCardTopNotebook
            title="99% dos dados adicionados sem"
            subTitle="fonte não possuem veracidade."
            description="Inclusive esse texto aqui, que não possui fundo científico algum e é
        100% errado. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            urlImg={firstLeftNotebook}
            className="bottom-16"
          />
          <MainCardTopNotebook
            title="Aumento de 24% em vendas"
            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            urlImg={firstRightNotebook}
            className="bottom-4"
          />
        </div>

        <section className="pt-24 breakpointGrid:grid breakpointGrid:grid-cols-2">
          <MainCardLastBlock
            title="Lorem ipsum"
            subTitle="dolor sit amen"
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi."
            className="md:row-span-1 md:col-span-2"
          />
          <MainCardLastBlock className="md:row-span-1 md:col-start-3" isImage>
            <Image src={secondRight} alt="notebook" objectFit="cover" />
          </MainCardLastBlock>
          <MainCardLastBlock
            title="Lorem ipsum"
            subTitle="dolor sit amen"
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi."
            className="md:row-span-2 md:col-span-1 "
          />
          <MainCardLastBlock className="md:row-start-2 md:col-span-2" isImage>
            <Image src={thirdLeft} alt="notebook" objectFit="cover" />
          </MainCardLastBlock>
          <MainCardLastBlock
            title="Lorem ipsum"
            subTitle="dolor sit amen"
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi."
            className="md:row-start-2 md:col-span-1"
          />
          <MainCardLastBlock
            className="md:row-start-3 md:col-start-3 md:order-1"
            isImage
          >
            <Image
              src={fourthRight}
              alt="notebook"
              style={{ background: 'white' }}
              objectFit="cover"
            />
          </MainCardLastBlock>
          <MainCardLastBlock
            title="Lorem ipsum"
            subTitle="dolor sit amen"
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi."
            className="md:row-start-3 md:col-span-2"
          />
          <MainCardLastBlock
            className="md:row-start-4 md:col-span-2 space-y-0 "
            isImage
          >
            <Image
              src={fivethLeft}
              alt="notebook"
              style={{ background: '#6ab1c5' }}
              objectFit="cover"
            />
          </MainCardLastBlock>
        </section>
      </section>
    </section>
  )
}

export default MainMiddleLine
