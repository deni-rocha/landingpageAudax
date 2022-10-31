type Props = {
  className?: string
}

const Tittle = ({ className }: Props) => {
  return (
    <h1
      className={`text-2xl font-black uppercase 
        md:text-3xl ${className}
        `}
    >
      Datanow
    </h1>
  )
}

export default Tittle
