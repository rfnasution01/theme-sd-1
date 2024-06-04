import { useState } from 'react'
import { RootHeader } from './root-header'

export function RootMain() {
  const [isShow, setIsShow] = useState<boolean>(false)

  return (
    <div className="flex h-full w-full flex-col">
      {/* --- Header ---  */}
      <RootHeader setIsShow={setIsShow} isShow={isShow} />
      {/* --- Menu --- */}
      {isShow ? (
        <div className="h-full w-full bg-red-300">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem quis, iusto accusantium sint ea aperiam voluptas
          quaerat incidunt aliquid tempore aliquam quisquam nisi rerum vero
          expedita qui nemo culpa ipsam.
        </div>
      ) : (
        <>
          <div className="flex">Tes</div>
          <div className="scrollbar mt-32 flex h-full flex-1 flex-col gap-32 overflow-y-auto bg-green-200 phones:gap-24">
            {/* --- Content --- */}
            <div className="flex h-full flex-1 bg-red-300">Tes</div>
            {/* --- Footer --- */}
            <div className="flex bg-red-300">Tes</div>
          </div>
        </>
      )}
    </div>
  )
}
