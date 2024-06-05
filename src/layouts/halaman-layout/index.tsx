import Loading from '@/components/Loading'
import { convertSlugToText, convertToSlug } from '@/libs/helpers/format-text'
import { usePathname } from '@/libs/hooks/usePathname'
import { HalamanType } from '@/libs/types/beranda-type'
import { getHalamanSlice } from '@/store/reducer/stateIdHalaman'
import { useGetHalamanQuery } from '@/store/slices/berandaAPI'
import clsx from 'clsx'
import { ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function HalamanLayout() {
  const stateId = useSelector(getHalamanSlice)?.id

  useEffect(() => {
    if (stateId) {
      setId(stateId)
    }
  }, [stateId])

  const searchParams = new URLSearchParams(location.search)
  const idParams = searchParams.get('id')

  const [id, setId] = useState<string>(idParams ?? stateId ?? '')

  // --- Halaman Page ---
  const [halaman, setHalaman] = useState<HalamanType>()
  const { data, isLoading, isFetching } = useGetHalamanQuery({
    id: id,
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data?.data) {
      setHalaman(data?.data)
    }
  }, [data?.data, id])

  const { splittedPath } = usePathname()

  return (
    <div className="flex h-full w-full flex-col gap-12">
      <div className="px-64 phones:px-32">
        <div className="flex items-center gap-12 bg-primary-100 p-12 text-primary-700">
          {splittedPath?.map((item, idx) => (
            <div className="flex items-center gap-12" key={idx}>
              <Link
                to={
                  idx !== splittedPath.length - 1
                    ? item === ''
                      ? '/'
                      : convertToSlug(item)
                    : ''
                }
                className={clsx('text-nowrap hover:text-primary-400', {
                  'hover:cursor-not-allowed': idx === splittedPath.length - 1,
                })}
              >
                {item === ''
                  ? 'Dashboard'
                  : item === 'hasil-ppdb'
                    ? 'Hasil PPDB'
                    : convertSlugToText(item)}
              </Link>
              <p className="text-nowrap">
                {idx < splittedPath.length - 1 ? (
                  <ChevronRight size={16} />
                ) : (
                  ''
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-32 px-64 phones:p-32">
          <p className="font-roboto text-[5rem]">{halaman?.judul}</p>
          <div className="h-[50vh] w-full">
            <img
              src={halaman?.url_gambar}
              alt={halaman?.judul}
              className="h-full w-full"
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: halaman?.isi }} />
        </div>
      )}
    </div>
  )
}
