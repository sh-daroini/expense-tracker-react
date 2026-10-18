
const Header = () => {
  return (
    <header className="border-b border-[#e7ebe6] bg-white/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3 text-[#17211d] no-underline" aria-label="Expense Tracker home">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#c8f169] text-lg font-bold">↗</span>
          <span className="font-['Manrope'] text-base font-extrabold tracking-tight">pocket<span className="text-[#78847d]">wise</span></span>
        </a>
        <span className="rounded-full border border-[#e7ebe6] px-3 py-1.5 text-xs font-semibold text-[#78847d]">MY ACCOUNT</span>
      </div>
    </header>
  )
}

export default Header
