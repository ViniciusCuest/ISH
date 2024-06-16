import { IoSettingsSharp, IoInformationCircleOutline } from 'react-icons/io5';
import DarkLogo from '../assets/dark-row-logo.png';
import { useCart } from '../context/cart.context';
import { useEffect, useState } from 'react';
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
                <img
                  className='w-12 h-12 object-cover rounded-full'
                  src='https://s3-alpha-sig.figma.com/img/1a14/694e/1e4a7505c3f362efa96e570b432e48aa?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RhyjEeghvcFzpK8UsTrIIsw1aFBo1E8Bwnrg1g2FSVf0e-pq6ih14jxeBBhXYYQ5aWAUjTcioy2zxlLxexDtcI-fCXS-eYRyfgnvcd4hbDEocmWKL9QQWo14FrMthYZX6iT4EOxhCqO2h3Kn7bVzjHihK79eVjpIlFQH89ufjPbh~DgoliMd1Vbm5cGAim0qYTluzSoLq-eyeT6I6WX0y~2awBsW8l4qgpxPXwfHxHckUzAin3tMUUX8eF5Hw-8VcpBP1sxyHSkR-rVe6TIZr6SD5UEJM20oHmqV910A1zrVFOljowbgrKlBM~RDF7rinHdqT9wDMY6BzB9bvoB2hA__'
                  alt=''
                />
              </div>
              <h2 className='text-xl font-medium'>Olá, {'Roberto'}</h2>
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
