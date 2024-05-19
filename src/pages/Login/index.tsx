import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/main.png'
import { Background } from '../../components/background'
import { Button } from '../../components/button'
import { TextInput } from '../../components/text-input'

export default function Login() {
  const navigate = useNavigate();
  return (
    <Background full>
      <section className='flex flex-col items-center gap-y-6 justify-center h-screen w-full '>
        <img src={Logo} className='w-[45%]' alt='' />
        <h1 className='font-medium text-2xl text-sky-600'>
          Entre ou <span className='text-sky-400 underline'>Cadastre-se</span>
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
              navigate('/home');
            }}
          />
        </div>
        <footer>
          <p className='text-base uppercase text-zinc-400'>Ou continue com</p>
        </footer>
      </section>
    </Background>
  )
}
