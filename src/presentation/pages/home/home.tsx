import { Minus, Plus } from "lucide-react"
import { useState } from "react"

import { Button } from "@/presentation/components/ui/button"

export function Home() {
  const [count, setCount] = useState(0)

  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement

    if (name === "plus") setCount((prev) => prev + 1)

    if (name === "minus" && count > 0) setCount((prev) => prev - 1)

    return
  }

  return (
    <main className="flex h-screen w-screen items-center justify-center bg-gray-900">
      <section className="flex flex-col items-center gap-10 rounded bg-gray-100 p-20">
        <h1 className="text-4xl font-bold">Boilerplate Vite React TS</h1>

        <div className="flex items-center justify-between gap-3">
          <Button name="plus" size="icon" onClick={handleButton} className="cursor-pointer">
            <Plus />
          </Button>
          <span className="w-10 text-center text-xl font-bold">{count}</span>
          <Button name="minus" size="icon" onClick={handleButton} className="cursor-pointer">
            <Minus />
          </Button>
        </div>
      </section>
    </main>
  )
}
