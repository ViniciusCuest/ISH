import { IoSettingsSharp, IoInformationCircleOutline } from 'react-icons/io5';
import DarkLogo from '../assets/dark-row-logo.png';
import { useCart } from '../context/cart.context';
import { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
export function MenuAside() {
  const [isOpen, setIsOpen] = useState(false);

  const { handleMenuDisplay } = useCart();

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      <span onClick={handleMenuDisplay} className='w-screen h-full absolute top-0 bg-[rgba(0,0,0,0.2)] z-[10]' />
      <aside
        style={isOpen ? { marginLeft: 0 } : { marginLeft: '-55%' }}
        className={
          'flex bg-blue-600 transition-all flex-col justify-between h-screen w-[55%] left-0 top-0 absolute z-[100] rounded-r-3xl pt-10 pb-8'
        }
      >
        <header className='bg-blue-600 flex flex-col'>
          <div className='flex flex-col gap-y-2'>
            <img src={DarkLogo} className='w-[70%]' alt='' />
            <span className='flex flex-row items-center space-x-3 ml-4 mt-8'>
              <div className='flex items-center justify-center p-[2px] bg-white rounded-full relative'>
                <FaUserCircle size={36} className='text-blue-600' />
              </div>
              <h2 className='text-xl font-medium text-blue-950'>Olá, {'Roberto'}</h2>
            </span>
          </div>
          <ul style={{ listStyle: 'inside' }} className='flex flex-col space-y-6 mt-6 pl-5'>
            <li className='text-lg text-blue-100 '>Minha conta</li>
            <li className='text-lg text-blue-100'>Meus pedidos</li>
            <li className='text-lg text-blue-100'>Meus cupons</li>
            <li className='text-lg text-blue-100'>Favoritos</li>
            <li className='text-lg text-blue-100'>Notificações</li>
            <li className='text-lg text-blue-100'>Endereços</li>
          </ul>
        </header>
        <footer className='flex flex-col pl-4 gap-y-5'>
          <button className='flex flex-row items-center gap-x-3 text-lg text-blue-100'>
            <IoSettingsSharp className='text-blue-900' size={35} />
            Configuração
          </button>
          <button className='flex flex-row items-center gap-x-3 text-lg text-blue-100'>
            <IoInformationCircleOutline className='text-blue-900' size={35} />
            Informações
          </button>
        </footer>
      </aside>
    </>
  );
}
