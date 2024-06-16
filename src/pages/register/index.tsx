import { useRef, useState } from 'react';
import { IoMdEyeOff, IoMdEye } from 'react-icons/io';
import { Background } from '../../components/background';
import { Button } from '../../components/button';
import { MdCalendarMonth, MdLocalPhone, MdOutlineEmail } from 'react-icons/md';
import { FaAddressCard, FaIdCardAlt } from 'react-icons/fa';
import Logo from '../../assets/main.png';
import { Link, useParams } from 'react-router-dom';
import { IoPersonSharp, IoChevronBackOutline } from 'react-icons/io5';

type RegistrationProps = {
  name: string;
  cpf: string;
  crpa?: string;
  birth: string;
  phone: string;
  email: string;
  pass: string;
  terms: boolean;
};

export default function Register() {
  const params = useParams();

  const [state, setState] = useState({
    showPassword: false,
    showConfirmPassword: false
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleRegisternNewUser = async () => {
    const form = Array.from(formRef.current?.getElementsByTagName('input') ?? []);
    const terms = form.find((item) => item.name === 'terms')?.checked;

    const nonFilledFields = form.filter((item) => item.value === '').length;
    const pass = form.find((item) => item.name === 'pass')?.value.trim();
    const confirmPass = form.find((item) => item.name === 'password')?.value.trim();

    if (nonFilledFields) return alert(`Há ${nonFilledFields} campo(s) sem preencher, por favor finalize-os com seus dados`);

    if (pass !== confirmPass) return alert('As senhas não combinam');

    if (!terms) return alert('É necessário aceitar os termos de uso');

    const body = {
      name: form.find((item) => item.name === 'name')?.value.trim(),
      birth: form.find((item) => item.name === 'birth')?.value.trim(),
      cpf: form.find((item) => item.name === 'cpf')?.value.trim(),
      email: form.find((item) => item.name === 'email')?.value.trim(),
      phone: form.find((item) => item.name === 'phone')?.value.trim(),
      crpa: form.find((item) => item.name === 'crpa')?.value.trim(),
      pass,
      terms
    } as Partial<RegistrationProps>;
  };

  const currentButtonShown = (id: string, state: boolean): JSX.Element => {
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          setState((prev) => {
            return {
              ...prev,
              [id]: state
            };
          });
        }}
      >
        {state ? <IoMdEyeOff size={20} className='fill-sky-800' /> : <IoMdEye size={20} className='fill-sky-800' />}
      </button>
    );
  };

  return (
    <Background full>
      <section className='flex flex-col pt-8'>
        <header>
          <Link to={'/login'}>
            <IoChevronBackOutline className='text-cyan-900 ml-4' size={30} />
          </Link>
        </header>
        <div className='w-full flex flex-col items-center gap-y-4 justify-center'>
          <img src={Logo} className='w-[35%]' alt='' />
          <h1 className='text-sky-900 text-lg font-medium'>Cadastro cliente</h1>
        </div>
        <form ref={formRef} className='flex flex-col space-y-5 px-5 mt-4'>
          <span className='w-full flex items-center flex-row px-2 bg-white h-8 shadow-[0px_4px_5px_0px_#0000001c] rounded-lg'>
            <input type='text' name='name' required className='h-full w-full outline-none' placeholder='Nome completo' />
            <IoPersonSharp size={20} className='fill-sky-800' />
          </span>
          <span className='w-full flex-1 p-2 relative flex items-center flex-row bg-white h-8 shadow-[0px_4px_5px_0px_#0000001c] rounded-lg'>
            <input
              name='birth'
              required
              className='h-full flex-1 outline-none bg-transparent text-left text-gray-400'
              placeholder='Data de nascimento'
              type='date'
            />
            <MdCalendarMonth size={20} className='fill-sky-800' />
          </span>
          <span className='w-full px-2 flex items-center flex-row bg-white h-8 shadow-[0px_4px_5px_0px_#0000001c] rounded-lg'>
            <input name='cpf' type='text' className='h-full w-full outline-none' placeholder='CPF' />
            <FaAddressCard size={20} className='fill-sky-800' />
          </span>
          {params.type === 'fisher' && (
            <span className='w-full px-2 flex items-center flex-row bg-white h-8 shadow-[0px_4px_5px_0px_#0000001c] rounded-lg'>
              <input name='crpa' required type='text' className='h-full w-full outline-none' placeholder='CRPA' />
              <FaIdCardAlt size={20} className='fill-sky-800' />
            </span>
          )}
          <span className='w-full flex flex-row items-center px-2 bg-white h-8 shadow-[0px_4px_5px_0px_#0000001c] rounded-lg'>
            <input name='phone' required type='text' className='h-full w-full outline-none' placeholder='Telefone' />
            <MdLocalPhone size={20} className='fill-sky-800' />
          </span>
          <span className='w-full px-2 flex flex-row items-center bg-white h-8 shadow-[0px_4px_5px_0px_#0000001c] rounded-lg'>
            <input name='email' required type='email' className='h-full w-full outline-none' placeholder='E-mail' />
            <MdOutlineEmail size={20} className='fill-sky-800' />
          </span>
          <span className='w-full px-2 flex flex-row items-center  bg-white h-8 shadow-[0px_4px_5px_0px_#0000001c] rounded-lg'>
            <input
              type={state.showPassword ? 'text' : 'password'}
              name='password'
              required
              className='h-full w-full outline-none'
              placeholder='Defina uma senha'
            />
            {currentButtonShown('showPassword', !state.showPassword)}
          </span>
          <span className='w-full px-2 flex flex-row items-center  bg-white h-8 shadow-[0px_4px_5px_0px_#0000001c] rounded-lg'>
            <input
              type={state.showConfirmPassword ? 'text' : 'password'}
              name='confirm-pass'
              className='h-full w-full outline-none'
              required
              placeholder='Repita a senha'
            />
            {currentButtonShown('showConfirmPassword', !state.showConfirmPassword)}
          </span>
          <footer className='flex flex-row justify-between'>
            <label htmlFor='' className='flex flex-row items-center gap-x-1'>
              <input required name='terms' type='checkbox' />
              <p className='text-xs'>
                Li e aceito a <span className='text-sky-500 underline underline-offset-1 font-medium'>politica de privacidade</span>
              </p>
            </label>
            <Button onPress={() => handleRegisternNewUser()} title={'Cadastrar'} />
          </footer>
        </form>
      </section>
    </Background>
  );
}
