import Menu from '../assets/hamburguer.png';
import Bag from '../assets/bag.png';
import { IoLocationOutline } from "react-icons/io5";

export function Header() {
   return (
      <header className="flex flex-row items-center justify-between">
         <button>
            <img src={Menu} alt="" />
         </button>
         <div className='mt-14 flex flex-row items-center gap-x-2'>
            <IoLocationOutline size={22} className='text-sky-600' />
            <h4 className='text-black text-base font-medium'>Cananéia - SP</h4>
         </div>
         <button>
            <img src={Bag} alt="" />
         </button>
      </header>
   )
}