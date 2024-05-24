import { IoChevronBackOutline, IoInformationCircleOutline } from 'react-icons/io5'
import { Background } from '../../components/background'
import Main from '../../assets/main.png'
import { useNavigate } from 'react-router-dom'
import { FaCreditCard } from 'react-icons/fa'
import { BsCashCoin } from 'react-icons/bs'
import { MdOutlineQrCode2 } from 'react-icons/md'
import { Button } from '../../components/button'

export default function Payments() {
  const navigate = useNavigate()
  return (
    <Background>
      <section className='px-5 flex flex-col w-full space-y-6'>
        <img src={Main} className='w-[30%]' alt='' />
        <header className='flex flex-row items-center justify-between'>
          <button
            onClick={() => {
              navigate('/home')
            }}
          >
            <IoChevronBackOutline className='text-blue-900' size={30} />
          </button>
          <h1 className='text-2xl text-sky-500 font-medium'>Carrinho</h1>
          <button>
            <IoInformationCircleOutline className='text-blue-900' size={30} />
          </button>
        </header>
        <section className='flex flex-col space-y-2'>
          <div className='flex flex-row items-center justify-between bg-sky-200 py-3 px-5 rounded-lg'>
            <label className='text-lg text-sky-900 font-medium flex flex-row gap-x-2' htmlFor='credit'>
              <input type='radio' name='payment' id='credit' value={'credito'} />
              Credito
            </label>
            <FaCreditCard size={30} className='fill-sky-900' />
          </div>
          <div className='flex flex-row items-center justify-between bg-sky-200 py-3 px-5 rounded-lg'>
            <label className='text-lg text-sky-900 font-medium flex flex-row gap-x-2' htmlFor='cash'>
              <input type='radio' name='payment' id='cash' value={'cash'} />
              Dinheiro
            </label>
            <BsCashCoin size={30} className='fill-sky-900' />
          </div>
          <div className='flex flex-row items-center justify-between bg-sky-200 py-3 px-5 rounded-lg'>
            <label className='text-lg text-sky-900 font-medium flex flex-row gap-x-2' htmlFor='pix'>
              <input type='radio' name='payment' id='pix' value={'pix'} />
              Pix
            </label>
            <MdOutlineQrCode2 size={30} className='fill-sky-900' />
          </div>
        </section>
        <div className='relative flex flex-col space-y-3 shadow-[0px_4px_5px_0px_#0000001c] px-3 py-2 rounded-lg'>
          <h4 className='break-words'>
            Enviando para:
            {/* <span className="font-medium text-sm"> */}
            Derick, Rua Tristã Centro eqwkjhejwqhe
            {/* </span> */}
          </h4>
          <div className='flex flex-row justify-between items-center'>
            <div>
              <p className='text-sky-500'>Produto:</p>
              <p className='text-sky-500'>Frete:</p>
            </div>
            <div>
              <p>R$ 20,00</p>
              <p>R$ 8,00</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-row justify-between'>
              <p className='font-medium'>Total pedido:</p>
              <p className='font-medium text-sky-500'>R$ 28,00</p>
            </div>
            <p>
              Forma de pagamento: <span className='text-sky-500 font-medium'>Dinheiro</span>
            </p>
          </div>
        </div>
        <footer className='flex flex-col gap-y-2 absolute bottom-0 w-full left-0 px-5 pb-3'>
          <Button
            size='large'
            title={'Finalizar pedido'}
            onPress={() => {
              navigate('/payments')
            }}
          />
        </footer>
      </section>
    </Background>
  )
}
