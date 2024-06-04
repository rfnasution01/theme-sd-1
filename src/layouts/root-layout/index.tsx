import { useEffect, useState } from 'react'
import { RootMain } from './root-main'
import { LoadingPacman } from '@/components/loadings'

export default function RootLayout() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulasi proses loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // Contoh: 2 detik

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="scrollbar h-screen w-full overflow-auto bg-background text-[2.4rem] phones:text-[2.8rem]">
      {loading ? <LoadingPacman /> : <RootMain />}
    </div>
  )
}
