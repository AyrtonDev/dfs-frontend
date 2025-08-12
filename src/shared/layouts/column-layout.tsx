import { Menu } from "../components/menu"
import type { BasicPropsType } from "../types/props"

export const ColumnLayout = ({ children }: BasicPropsType) => {
  return (
    <div className="relative flex min-h-screen w-screen justify-center">
      <div className="my-4 flex w-full max-w-5xl flex-col">{children}</div>
      <Menu />
    </div>
  )
}
