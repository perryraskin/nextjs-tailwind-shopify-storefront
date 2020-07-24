import { NextPage } from "next"

interface Props {
  text: any
  value?: string
  extend?: string
  onClick?: any
}

const Button: NextPage<Props> = ({ text, value, extend, onClick }) => {
  return (
    <button
      className={`inset-0 font-bold py-2 px-3 rounded 
      focus:outline-none leading-tight mt-6 mb-6 ml-2 mr-2 text-sm uppercase
      relative inline-block ${extend}`}
      onClick={onClick}
      value={value}
    >
      <span className="relative font-semibold">{text}</span>
    </button>
  )
}

export default Button
