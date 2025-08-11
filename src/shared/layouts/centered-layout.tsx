import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const CenteredLayout = ({ children }: Props) => {
  return <div className="flex h-screen w-screen items-center justify-center">{children}</div>
}
