import { Background } from '../../components/background'
import { Button } from '../../components/button'
import { MdCalendarMonth } from 'react-icons/md'

export default function Register() {
  return (
    <Background full>
      <section className='flex flex-col'>
        <h1>Cadastro cliente</h1>
        <form action='' className='flex flex-col space-y-5 px-5'>
          <span className='w-full px-2 bg-white h-8 shadow-[0px_4px_5px_0px_#0000001c] rounded-lg'>
            <input type='text' className='h-full w-full outline-none' placeholder='Nome' />
          </span>
          <span className='w-full px-2 bg-white h-8 shadow-[0px_4px_5px_0px_#0000001c] rounded-lg'>
            <input type='text' className='h-full w-full outline-none' placeholder='Sobrenome' />
          </span>
          <span className='w-full px-2 relative flex items-center flex-row bg-white h-8 shadow-[0px_4px_5px_0px_#0000001c] rounded-lg'>
            <input className='block h-full w-full outline-none text-gray-400' placeholder='Data de nascimento' type='date' />
            <MdCalendarMonth size={20} className='fill-sky-800' />
          </span>
          <span className='w-full px-2 bg-white h-8 shadow-[0px_4px_5px_0px_#0000001c] rounded-lg'>
            <input type='text' className='h-full w-full outline-none' placeholder='CPF' />
          </span>
          <span className='w-full px-2 bg-white h-8 shadow-[0px_4px_5px_0px_#0000001c] rounded-lg'>
            <input type='text' className='h-full w-full outline-none' placeholder='Telefone' />
          </span>
          <span className='w-full px-2 bg-white h-8 shadow-[0px_4px_5px_0px_#0000001c] rounded-lg'>
            <input type='text' className='h-full w-full outline-none' placeholder='E-mail' />
          </span>
          <span className='w-full px-2 bg-white h-8 shadow-[0px_4px_5px_0px_#0000001c] rounded-lg'>
            <input type='text' className='h-full w-full outline-none' placeholder='Defina uma senha' />
          </span>
          <span className='w-full px-2 bg-white h-8 shadow-[0px_4px_5px_0px_#0000001c] rounded-lg'>
            <input type='text' className='h-full w-full outline-none' placeholder='Repita a senha' />
          </span>
          <footer className='flex flex-row justify-between'>
            <label htmlFor='' className='flex flex-row items-center gap-x-1'>
              <input type='checkbox' />
              <p className='text-xs'>
                Li e aceito a <span className='text-sky-500 font-medium'>politica de privacidade</span>
              </p>
            </label>

            <Button
              title={'Cadastrar'}
              onPress={() => {
                console.log('')
              }}
            />
          </footer>
        </form>
      </section>
    </Background>
  )
}
