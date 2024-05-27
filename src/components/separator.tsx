export function Separator({ small }: { small?: boolean }) {
  return (
    <div
      style={
        small
          ? {
              paddingTop: 8,
              paddingBottom: 8
            }
          : {
              paddingTop: 24,
              paddingBottom: 24
            }
      }
      className='w-full py-6 px-4 flex flex-row items-center'
    >
      <span className='flex h-2 w-2 rounded-full bg-sky-500' />
      <span className='flex w-full bg-sky-500 h-[2.5px] rounded-2xl ml-[-2px]'></span>
    </div>
  );
}
