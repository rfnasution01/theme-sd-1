import Loading from '@/components/Loading'
import { HalamanType } from '@/libs/types/beranda-type'
import { getHalamanSlice } from '@/store/reducer/stateIdHalaman'
import { useGetHalamanQuery } from '@/store/slices/berandaAPI'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

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

  return (
    <div className="h-full w-full">
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
