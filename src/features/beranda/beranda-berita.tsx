export function BerandaBerita() {
  return (
    <div className="grid grid-cols-12 gap-32 px-64 phones:px-32">
      <div className="col-span-6 phones:col-span-12">
        <div className="flex flex-col justify-between gap-16">
          <p className="font-roboto text-[5rem]">Berita Sekolah</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            minima aliquid obcaecati nostrum ex asperiores, consequuntur
            doloribus doloremque sequi ratione ad hic quibusdam! Repellat, sed
            excepturi ipsam dolorem quam id.
          </p>
        </div>
      </div>
      <div className="col-span-6 phones:col-span-12">
        {/* <Slider1 listImage={ListBanner} height="h-[50vh]" /> */}
      </div>
    </div>
  )
}
