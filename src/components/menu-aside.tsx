import { IoSettingsSharp, IoInformationCircleOutline } from 'react-icons/io5'
import DarkLogo from '../assets/dark-row-logo.png'
export function MenuAside() {
  return (
    <aside className='flex left-0 top-0 bg-blue-600 flex-col justify-between h-screen w-[55%] absolute z-50 rounded-r-3xl pt-10 pb-8'>
      <header className='bg-blue-600'>
        <img src={DarkLogo} className='w-[70%]' alt='' />
        <div>
          <h2 className='text-xl'>Olá, {'Roberto'}</h2>
        </div>
        <ul style={{ listStyle: 'inside' }} className='flex flex-col space-y-6 pl-5'>
          <li className='text-lg text-blue-100 '>MINHA CONTA</li>
          <li className='text-lg text-blue-100'>MEUS PEDIDOS</li>
          <li className='text-lg text-blue-100'>MEUS CUPONS</li>
          <li className='text-lg text-blue-100'>FAVORITOS</li>
          <li className='text-lg text-blue-100'>NOTIFICAÇÕES</li>
          <li className='text-lg text-blue-100'>ENDEREÇOS</li>
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
  )
}