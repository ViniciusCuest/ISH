type Props = {
  title: string;
  onPress: () => void;
  size?: 'small' | 'large';
};
export function Button({ title, size, onPress }: Props) {
  const buttonStyle: string =
    size === 'small'
      ? 'bg-sky-500 rounded-xl outline-none px-4 py-1 text-xs font-medium text-white'
      : size === 'large'
        ? 'bg-sky-500 rounded-xl outline-none px-6 py-3 w-full font-medium text-white'
        : 'bg-sky-500 rounded-xl outline-none px-4 py-2 text-white font-medium text-base';
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onPress();
      }}
      className={buttonStyle}
    >
      {title}
    </button>
  );
}
