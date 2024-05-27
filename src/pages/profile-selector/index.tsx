import { Background } from '../../components/background';
import Logo from '../../assets/main.png';
import { Link } from 'react-router-dom';

export default function ProfileSelector() {
  return (
    <Background full>
      <section className='flex flex-col h-screen items-center justify-center relative gap-y-4 px-6'>
        <img src={Logo} className='w-[50%]' alt='' />
        <h2 className='font-medium text-lg text-cyan-900'>Escolha o tipo de usuário</h2>
        <Link
          to={'/register/customer'}
          className='bg-sky-500 flex items-center justify-center py-3 w-full rounded-lg text-white font-medium shadow-[0px_4px_5px_0px_#0000001c]'
        >
          Cliente
        </Link>
        <Link
          to={'/register/fisher'}
          className='bg-sky-500 flex items-center justify-center py-3 w-full rounded-lg text-white font-medium shadow-[0px_4px_5px_0px_#0000001c]'
        >
          Pescador
        </Link>
      </section>
    </Background>
  );
}
