import { ReactNode } from "react"

type IconButtonProps = {
  children: ReactNode
}

export function IconButton(props: IconButtonProps) {
  return (
    <button className="p-1.5 bg-gray-500 text-blue font-semibold rounded-md cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300">
      {props.children}
    </button>
  )
}