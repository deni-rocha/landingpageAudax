import Image, { StaticImageData } from 'next/image'

interface IMainCardTopNotebook {
  urlImg: StaticImageData
  title: string
  subTitle?: string
  description: string
  className: string
}

const MainCardTopNotebook = ({
  title,
  subTitle,
  description,
  urlImg,
  className
}: IMainCardTopNotebook) => {
  return (
    <div
      className="
        w-80 h-96 text-center rounded-lg py-10 px-5 text-bgDefault 
        bg-textPrimary space-y-4 flex flex-col items-center relative m-auto
        xs:w-72
        md:w-64 md:m-0
        "
    >
      <div className="text-sm font-bold">
        <p>{title}</p>
        {subTitle ? <p>{subTitle}</p> : ''}
      </div>
      <p className="text-xs">{description}</p>
      <div className={`w-64 h-40 absolute ${className} `}>
        <Image src={urlImg} alt="notebook" objectFit="cover" />
      </div>
    </div>
  )
}

export default MainCardTopNotebook
