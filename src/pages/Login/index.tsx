import Logo from '../assets/main.png'
import { Background } from '../../components/background'

export default function Login() {
  return (
    <Background>
      <section className='flex flex-col items-center justify-center h-screen'>
        <img src={Logo} className='w-[45%]' alt='' />
        <h1>
          Entre ou <span>cadastre-se</span>
        </h1>
        <form></form>
      </section>
    </Background>
  )
}
