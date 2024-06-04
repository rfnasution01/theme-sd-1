export type IdentitasType = {
  nama_website: string
  satuan_kerja: string | null
  alamat: string
  telepon: string
  kota: string
  logo: string
  favicon: string
  wa: string
  fb: string
  tw: string
  ig: string
  yt: string
  telegram: string
  weekday_cs: string
  weekend_cs: string
  tiktok: string
  email: string
  keyword: string
  deskripsi: string
  latitude: string
  longitude: string
  footer: string
}

export type MenuType = {
  id: string
  nama_menu: string
  jenis_menu: string
  slug: string
  id_konten: string
  deskripsi_singkat: string
  url_gambar: string | null
  id_parent: string | null
  urutan: string
  children?: MenuType[]
}

export type SliderType = {
  judul: string
  url: string
  gambar: string
  urutan: number
}
