import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/main.png';
import { Background } from '../../components/background';
import { Button } from '../../components/button';
import { TextInput } from '../../components/text-input';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const { status } = await axios.post(
        'http://localhost:5000/login',
        {
          email: '',
          password: ''
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      if (status === 200) navigate('/home');
    } catch (e) {}
  };
  return (
    <Background full>
      <section className='flex flex-col items-center gap-y-6 justify-center h-screen w-full '>
        <img src={Logo} className='w-[45%]' alt='' />
        <h1 className='font-medium text-xl text-sky-600'>
          Entre ou{' '}
          <Link to={'/selector'} className='text-sky-400 underline'>
            Cadastre-se
          </Link>
        </h1>
        <form className='flex items-center flex-col gap-y-3 w-full px-10'>
          <TextInput type='text' label='E-mail ou telefone' />
          <TextInput type='text' label='Senha' />
        </form>
        <div className='flex flex-row justify-between items-center w-full px-10'>
          <p className='text-base font-medium text-sky-400'>Esqueceu a senha ?</p>
          <Button
            title='Entrar'
            onPress={() => {
              handleLogin();
            }}
          />
        </div>
        <footer className='flex flex-col gap-y-2'>
          <p className='text-sm uppercase text-zinc-400'>Ou continue com</p>
          <span className='flex flex-row items-center justify-center gap-x-4'>
            <FcGoogle size={35} />
            <FaFacebook className='text-sky-700' size={35} />
          </span>
        </footer>
      </section>
    </Background>
  );
}
