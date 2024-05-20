type Props = {
  label: string
  type: 'text' | 'number'
}
export function TextInput({ label, type }: Props) {
  return <input className='w-full h-10 shadow-[0px_4px_5px_0px_#0000001c] rounded-md px-2 outline-none' placeholder={label} type={type} />
}
