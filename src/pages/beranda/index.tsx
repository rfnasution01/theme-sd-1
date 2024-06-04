import { Slider1 } from '@/components/slider/slider-1'
import { BerandaBerita } from '@/features/beranda'
import { ListBanner } from '@/libs/dummy/list-banner'

export default function Beranda() {
  return (
    <div className="flex h-full w-full flex-col gap-32">
      <Slider1 listImage={ListBanner} isShadow />
      <BerandaBerita />
    </div>
  )
}
