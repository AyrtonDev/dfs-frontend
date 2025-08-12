import { Menu } from "../components/menu"
import type { BasicPropsType } from "../types/props"

export const ColumnLayout = ({ children }: BasicPropsType) => {
  return (
    <div className="min:h-screen relative flex w-screen justify-center">
      <div className="max:w-5xl my-4 flex flex-col">{children}</div>
      <Menu />
    </div>
  )
}
