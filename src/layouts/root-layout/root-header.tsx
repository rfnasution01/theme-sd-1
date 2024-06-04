import { RunningText } from '@/components/RunningText'
import { BeritaUtama } from './berita-utama'
import { LayoutDashboard, Search, X } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'
import { ListHeader } from '@/libs/dummy/list-navigasi'

export function RootHeader({
  setIsShow,
  isShow,
}: {
  setIsShow: Dispatch<SetStateAction<boolean>>
  isShow: boolean
}) {
  const runningText =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus maxime facilis ea itaque et quae! Rerum maiores quasi consequatur natus eveniet, quos debitis. Temporibus sint labore ut officia totam dolor.'

  return (
    <div className="flex items-center gap-32 bg-primary-500 px-64 py-16 text-primary-100 phones:px-32">
      {/* --- Running Text --- */}
      <div className="flex w-3/5 items-center gap-32 phones:flex-1">
        <BeritaUtama />
        <RunningText>{runningText}</RunningText>
      </div>
      {/* --- Navigasi --- */}
      <div className="flex w-1/5 items-center justify-center gap-24 text-[2rem] phones:hidden phones:text-[2.4rem]">
        {ListHeader.map((item, idx) => (
          <div
            className="text-success-100 font-light hover:cursor-pointer hover:text-success-700"
            key={idx}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="relative w-1/5 text-black phones:hidden">
        <span className="block phones:hidden">
          <Search
            className="absolute left-12 top-1/2 -translate-y-1/2 transform"
            size={16}
          />
        </span>
        <span className="hidden phones:block">
          <Search
            className="absolute left-8 top-1/2 -translate-y-1/2 transform phones:left-16"
            size={14}
          />
        </span>
        <input
          type="text"
          className="w-full rounded-lg border border-gray-300 bg-primary-100 p-8 px-48 text-[2rem] focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 phones:w-full phones:px-48"
          placeholder="Tulis & Tekan Enter"
        />
      </div>
      <div className="hidden phones:block">
        <span
          onClick={() => {
            setIsShow(!isShow)
          }}
        >
          {!isShow ? <LayoutDashboard size={20} /> : <X size={20} />}
        </span>
      </div>
    </div>
  )
}