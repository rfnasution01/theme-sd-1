import { useState } from 'react'
import { RootHeader } from './root-header'
import { RootNavigasi } from './root-navigasi'
import { ListHeader, ListNavigasi } from '@/libs/dummy/list-navigasi'
import { DoorClosed, DoorOpen, Search } from 'lucide-react'
import { RootFooter } from './root-footer'
import { Outlet } from 'react-router-dom'

export function RootMain() {
  const [isShow, setIsShow] = useState<boolean>(false)

  return (
    <div className="flex h-full w-full flex-col">
      {/* --- Header ---  */}
      <RootHeader setIsShow={setIsShow} isShow={isShow} />
      {/* --- Menu --- */}
      {isShow ? (
        <div className="flex h-full w-full flex-col gap-48 bg-primary-700 p-32 text-primary-100">
          <div className="flex flex-col gap-16">
            {ListNavigasi?.map((item, idx) => (
              <div className="" key={idx}>
                {item}
              </div>
            ))}
            {ListHeader?.map((item, idx) => (
              <div className="" key={idx}>
                {item}
              </div>
            ))}
            <div className="relative w-full text-black">
              <span className="">
                <Search
                  className="absolute left-12 top-1/2 -translate-y-1/2 transform"
                  size={16}
                />
              </span>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 bg-primary-100 p-8 px-48 text-[2rem] focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 phones:w-full phones:px-48"
                placeholder="Tulis & Tekan Enter"
              />
            </div>
          </div>
          {/* --- Login --- */}
          <div className="flex flex-col gap-16">
            <button
              type="button"
              className="flex items-center justify-center gap-12 rounded-lg bg-green-700 py-12 text-[2.4rem]"
            >
              <DoorOpen size={16} /> Masuk
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-12 rounded-lg bg-red-700 py-12 text-[2.4rem]"
            >
              <DoorClosed size={16} /> Daftar
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="phones:hidden">
            <RootNavigasi />
          </div>
          <div className="scrollbar mt-32 flex h-full flex-1 flex-col gap-32 overflow-y-auto phones:gap-24">
            {/* --- Content --- */}
            <div className="flex min-h-[96%] flex-1 phones:min-h-[98%]">
              <Outlet />
            </div>
            {/* --- Footer --- */}
            <RootFooter />
          </div>
        </>
      )}
    </div>
  )
}
