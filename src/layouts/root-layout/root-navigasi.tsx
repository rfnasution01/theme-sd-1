import Loading from '@/components/Loading'
import { enumRoute } from '@/libs/enum/enum-route'
import { usePathname } from '@/libs/hooks/usePathname'
import { MenuType } from '@/libs/types/beranda-type'
import { useGetMenuUtamaQuery } from '@/store/slices/berandaAPI'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Tooltips from '@/components/Tooltip'
import { ChevronDown } from 'lucide-react'

export function RootNavigasi() {
  const { firstPathname } = usePathname()

  // --- Menu Top ---
  const [menuUtama, setMenuUtama] = useState<MenuType[]>([])
  const {
    data: menuUtamaData,
    isLoading: isLoadingMenuUtama,
    isFetching: isFetchingMenuUtama,
  } = useGetMenuUtamaQuery()

  const loading = isLoadingMenuUtama || isFetchingMenuUtama

  useEffect(() => {
    if (menuUtamaData?.data) {
      setMenuUtama(menuUtamaData?.data)
    }
  }, [menuUtamaData?.data])

  const isActivePage = (item: string) => {
    if (
      (item.toLowerCase() === 'home' && firstPathname === '') ||
      item?.toLocaleLowerCase() === firstPathname
    ) {
      return true
    }
    return false
  }

  const sortedData = [...menuUtama].sort((a, b) => {
    return parseInt(a.urutan) - parseInt(b.urutan)
  })

  return (
    <div className="flex items-center justify-between gap-32 bg-primary-700 pl-64 text-primary-100">
      {/* --- Logo --- */}
      <Link to="/" className="flex items-center gap-12">
        <img src="/img/logo.png" alt="logo" className="h-[5rem] w-[5rem]" />
        <p className="font-sf-pro uppercase">Sma Negeri 2 balige</p>
      </Link>
      {/* --- Navigasi --- */}
      <div className="flex items-center">
        {loading ? (
          <Loading />
        ) : (
          sortedData.map((item, idx) => (
            <Link
              to={
                item?.nama_menu === 'Home'
                  ? '/'
                  : item?.jenis_menu === enumRoute.ROUTE
                    ? item?.slug
                    : item?.jenis_menu === enumRoute.HALAMAN
                      ? `/halaman?page=${item?.slug}`
                      : item?.jenis_menu === enumRoute.PROGRAM
                        ? `/program-details?page=${item?.slug}`
                        : item?.jenis_menu === enumRoute.BERITA
                          ? `/berita`
                          : item?.jenis_menu === enumRoute.AGENDA
                            ? `/agenda`
                            : item?.jenis_menu === enumRoute.PENGUMUMAN
                              ? `/pengumuman`
                              : item?.jenis_menu === enumRoute.PRESTASI
                                ? `/prestasi`
                                : item?.jenis_menu === enumRoute.URL
                                  ? item?.id_konten
                                  : item?.slug
              }
              target={item?.jenis_menu === enumRoute.URL ? '_blank' : '_self'}
              className={clsx(
                'border-l border-r border-primary-400 px-16 py-24 text-[2rem] uppercase hover:cursor-pointer hover:bg-primary-400 phones:text-[2.4rem]',
                {
                  'bg-primary-400': isActivePage(item?.slug),
                },
              )}
              key={idx}
            >
              {item?.children?.length > 0 ? (
                <Tooltips
                  triggerComponent={
                    <div
                      className={clsx(
                        'flex items-center gap-4 font-semibold uppercase tracking-0.5',
                        {
                          'text-primary-100': !isActivePage(item?.slug),
                          'text-white': isActivePage(item?.slug),
                        },
                      )}
                    >
                      <p>{item?.nama_menu}</p>
                      <ChevronDown size={12} />
                    </div>
                  }
                  tooltipContent={
                    <div
                      className="flex flex-col gap-y-16 border-l p-12"
                      style={{
                        borderImage:
                          'linear-gradient(180deg, #FFFFFF 0%, #0D1A4B 100%)',
                        borderImageSlice: 1,
                      }}
                    >
                      <div className="mx-16 flex flex-col items-start gap-y-16 text-[2rem]">
                        {item?.children.map((list, no) => (
                          <Link
                            to={
                              list?.nama_menu === 'Home'
                                ? '/'
                                : list?.jenis_menu === enumRoute.ROUTE
                                  ? list?.slug
                                  : list?.jenis_menu === enumRoute.HALAMAN
                                    ? `/halaman?page=${list?.slug}`
                                    : list?.jenis_menu === enumRoute.PROGRAM
                                      ? `/program-details?page=${list?.slug}`
                                      : list?.jenis_menu === enumRoute.BERITA
                                        ? `/berita`
                                        : list?.jenis_menu === enumRoute.AGENDA
                                          ? `/agenda`
                                          : list?.jenis_menu ===
                                              enumRoute.PENGUMUMAN
                                            ? `/pengumuman`
                                            : list?.jenis_menu ===
                                                enumRoute.PRESTASI
                                              ? `/prestasi`
                                              : list?.jenis_menu ===
                                                  enumRoute.URL
                                                ? list?.id_konten
                                                : list?.slug
                            }
                            className={clsx(
                              'text-nowrap hover:cursor-pointer hover:text-primary',
                              {},
                            )}
                            key={no}
                          >
                            {list?.nama_menu}
                          </Link>
                        ))}
                      </div>
                    </div>
                  }
                />
              ) : (
                item?.nama_menu
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  )
}
