import { ReactNode } from 'react'

interface Props {
  isImage?: boolean
  children?: ReactNode
  title?: string
  subTitle?: string
  description?: string
  className: string
}

const MainCardLastBlock = ({
  isImage,
  children,
  title,
  subTitle,
  description,
  className
}: Props) => {
  return (
    <div
      className={`
      w-80 h-80 text-center m-auto 
      rounded-lg ${isImage ? '' : 'p-10 pb-16'}
      xs:w-72
     flex flex-col justify-end space-y-4
      ${className}
    `}
    >
      {isImage ? (
        children
      ) : (
        <>
          <div className="font-bold text-lg text-left">
            <h2>{title}</h2>
            <h2>{subTitle}</h2>
          </div>
          <p className="text-xs text-textSecondary text-center">
            {description}
          </p>
        </>
      )}
    </div>
  )
}

export default MainCardLastBlock
