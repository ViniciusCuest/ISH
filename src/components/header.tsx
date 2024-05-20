import Menu from '../assets/hamburguer.png'
import Bag from '../assets/bag.png'
import { IoLocationOutline } from 'react-icons/io5'
import { useCart } from '../context/cart.context'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()
  const { cart } = useCart()
  return (
    <header className='flex flex-row items-center justify-between'>
      <button>
        <img src={Menu} alt='' />
      </button>
      <div className='mt-14 flex flex-row items-center gap-x-2'>
        <IoLocationOutline size={22} className='text-sky-600' />
        <h4 className='text-black text-base font-medium'>Cananéia - SP</h4>
      </div>
      <button
        onClick={() => {
          navigate('/cart')
        }}
      >
        <img src={Bag} alt='' />
        {cart.length ? (
          <span className='bg-sky-600 text-xs h-[18px] w-[18px] rounded-full flex flex-row items-center justify-center font-medium text-white absolute top-0 right-0 mt-4 mr-1'>
            {cart.length}
          </span>
        ) : null}
      </button>
    </header>
  )
}
