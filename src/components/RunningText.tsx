export const RunningText = ({ children }: { children: string }) => {
  return (
    <div className="relative flex overflow-hidden">
      <p className="animate-marquee whitespace-nowrap text-[2rem]  font-bold uppercase tracking-1.5 text-primary-100 phones:text-[2.4rem]">
        {children}
      </p>
    </div>
  )
}
