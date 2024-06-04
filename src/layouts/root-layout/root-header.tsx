import { RunningText } from '@/components/RunningText'
import { BeritaUtama } from './berita-utama'
import { LayoutDashboard, Search, X } from 'lucide-react'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { usePathname } from '@/libs/hooks/usePathname'
import clsx from 'clsx'
import { MenuType } from '@/libs/types/beranda-type'
import { useGetMenuTopQuery } from '@/store/slices/berandaAPI'
import Loading from '@/components/Loading'

export function RootHeader({
  setIsShow,
  isShow,
}: {
  setIsShow: Dispatch<SetStateAction<boolean>>
  isShow: boolean
}) {
  const { firstPathname } = usePathname()
  // --- Header ---
  const [menuTop, setMenuTop] = useState<MenuType[]>([])
  const {
    data: menuTopData,
    isLoading: isLoadingMenuTop,
    isFetching: isFetchingMenuTop,
  } = useGetMenuTopQuery()

  const loading = isLoadingMenuTop || isFetchingMenuTop

  useEffect(() => {
    if (menuTopData?.data) {
      setMenuTop(menuTopData?.data)
    }
  }, [menuTopData?.data])

  const runningText =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus maxime facilis ea itaque et quae! Rerum maiores quasi consequatur natus eveniet, quos debitis. Temporibus sint labore ut officia totam dolor.'

  const isActivePage = (item: string) => {
    if (item?.toLocaleLowerCase() === firstPathname) {
      return true
    }
    return false
  }

  return (
    <div className="flex items-center gap-32 bg-primary-500 px-64 py-16 text-primary-100 phones:px-32">
      {/* --- Running Text --- */}
      <div className="flex w-3/6 items-center gap-32 phones:flex-1">
        <BeritaUtama />
        <RunningText>{runningText}</RunningText>
      </div>
      {/* --- Navigasi --- */}
      <div className="flex w-2/6 items-center justify-center gap-24 text-[2rem] phones:hidden phones:text-[2.4rem]">
        {loading ? (
          <Loading />
        ) : (
          menuTop?.slice(0, 3)?.map((item, idx) => (
            <Link
              to={item?.slug}
              className={clsx(
                'text-success-100 font-light hover:cursor-pointer hover:text-success-700',
                {
                  'text-success-700': isActivePage(item?.slug),
                },
              )}
              key={idx}
            >
              {item?.nama_menu}
            </Link>
          ))
        )}
      </div>
      <div className="relative w-1/6 text-black phones:hidden">
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
