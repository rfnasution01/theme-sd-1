import { ListNavigasi } from '@/libs/dummy/list-navigasi'
import { convertToSlug } from '@/libs/helpers/format-text'
import { Link } from 'react-router-dom'

export function RootNavigasi() {
  return (
    <div className="flex items-center justify-between gap-32 bg-primary-700 pl-64 text-primary-100">
      {/* --- Logo --- */}
      <Link to="/" className="flex items-center gap-12">
        <img src="/img/logo.png" alt="logo" className="h-[5rem] w-[5rem]" />
        <p className="font-sf-pro uppercase">Sma Negeri 2 balige</p>
      </Link>
      {/* --- Navigasi --- */}
      <div className="flex items-center">
        {ListNavigasi.map((item, idx) => (
          <Link
            to={item === 'Beranda' ? '/' : `/${convertToSlug(item)}`}
            className="border-l border-r border-primary-400 px-16 py-24 text-[2rem] uppercase hover:cursor-pointer hover:bg-primary-400 phones:text-[2.4rem]"
            key={idx}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  )
}
