import Menu from '../assets/hamburguer.png';
import Bag from '../assets/bag.png';
import { IoLocationOutline } from 'react-icons/io5';
import { useCart } from '../context/cart.context';
import { useNavigate } from 'react-router-dom';
import { FaBasketShopping } from 'react-icons/fa6';
import { IoMenu } from 'react-icons/io5';
export function Header() {
  const navigate = useNavigate();
  const { cart, handleMenuDisplay } = useCart();
  return (
    <header className='flex flex-row items-center justify-between'>
      <button onClick={handleMenuDisplay}>
        <IoMenu size={30} className='text-sky-500' />
      </button>
      <div className='mt-14 flex flex-row items-center gap-x-2'>
        <IoLocationOutline size={22} className='text-sky-600' />
        <h4 className='text-cyan-900 text-base font-medium'>Cananéia - SP</h4>
      </div>
      <button
        onClick={() => {
          navigate('/cart');
        }}
      >
        <FaBasketShopping size={25} className='fill-sky-500' />
        {cart.length ? (
          <span className='bg-sky-600 text-xs h-[18px] w-[18px] rounded-full flex flex-row items-center justify-center font-medium text-white absolute top-0 right-0 mt-4 mr-1'>
            {cart.length}
          </span>
        ) : null}
      </button>
    </header>
  );
}
