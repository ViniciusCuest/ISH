import { useEffect } from 'react';
import Logo from '../../assets/main.png';
import { Background } from '../../components/background';
import { useNavigate } from 'react-router-dom';
export default function Splash() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/login');
    }, 3000);
  }, []);
  return (
    <Background full>
      <section className='flex flex-col items-center justify-center h-screen gap-3'>
        <img src={Logo} className='w-[70%]' alt='' />
        <h1 className='text-3xl text-sky-500 font-medium italic'>ISH</h1>
      </section>
    </Background>
  );
}
