import type { BasicPropsType } from "../types/props"

export const ColumnLayout = ({ children }: BasicPropsType) => {
  return (
    <div className="min:h-screen flex w-screen justify-center">
      <div className="max:w-5xl my-4 flex flex-col">{children}</div>
    </div>
  )
}
