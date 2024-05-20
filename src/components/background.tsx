type Props = {
  full?: boolean
  children?: JSX.Element
}
export function Background({ children, full }: Props) {
  return (
    <main className='relative flex h-screen w-full bg-white'>
      <div className='z-10 w-full whitespace-nowrap overflow-x-hidden relative'>{children}</div>
      <span className='absolute top-0 block h-[20%] w-full bg-gradient-to-b from-sky-200 to-white' />
      {full && <span className='absolute bottom-0 block h-[20%] w-full bg-gradient-to-t from-sky-200 to-white' />}
    </main>
  )
}
