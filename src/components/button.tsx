type Props = {
   title: string;
   onPress: () => void;
   size?: 'small'
}
export function Button({ title, size, onPress }: Props) {
   const buttonStyle: string = size === 'small' ? 'bg-sky-500 rounded-xl outline-none px-4 py-1 text-sm text-white' : 'bg-sky-500 rounded-xl outline-none px-6 py-2 text-white'
   return (
      <button onClick={onPress} className={buttonStyle}>
         {
            title
         }
      </button>
   )
}