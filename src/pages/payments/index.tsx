import Main from '../../assets/main.png';
import { useState } from 'react';
import { IoChevronBackOutline, IoInformationCircleOutline } from 'react-icons/io5';
import { Background } from '../../components/background';
import { useNavigate } from 'react-router-dom';
import { FaCreditCard } from 'react-icons/fa';
import { BsCashCoin } from 'react-icons/bs';
import { MdOutlineQrCode2 } from 'react-icons/md';
import { Button } from '../../components/button';
import { Separator } from '../../components/separator';
import { useCart } from '../../context/cart.context';
import { Header } from '../../components/header';

export default function Payments() {
  const navigate = useNavigate();
  const [paymentType, setPaymentType] = useState<string>('Crédito');
  const handleChangeState = (value: string) => setPaymentType(value);

  const { cart } = useCart();

  const totalValue: number = cart.reduce((previous: any, current: any) => {
    return previous + +current.selectedQuantity * current.unitValue;
  }, 0);

  return (
    <Background>
      <section className='px-5 flex flex-col w-full space-y-6'>
        <Header />
        <div className='flex flex-row items-center justify-center w-full px-3 mt-12 mb-4'>
          <img src={Main} className='w-[30%]' alt='' />
        </div>
        <header className='flex flex-row items-center justify-between'>
          <button
            onClick={() => {
              navigate('/home');
            }}
          >
            <IoChevronBackOutline className='text-cyan-900' size={30} />
          </button>
          <h1 className='text-2xl text-sky-500 font-medium'>Pagamentos</h1>
          <button>
            <IoInformationCircleOutline className='text-cyan-900' size={30} />
          </button>
        </header>
        <Separator small />
        <form className='flex flex-col space-y-2'>
          <div className='flex flex-row items-center justify-between bg-sky-200 py-3 px-5 rounded-lg'>
            <label className='text-lg text-cyan-900 font-medium flex flex-row gap-x-2 items-center' htmlFor='credit'>
              <input
                className='accent-cyan-900'
                checked={paymentType === 'Crédito'}
                type='radio'
                onChange={(evt) => handleChangeState(evt.target.value)}
                name='payment'
                id='credit'
                value={'Crédito'}
              />
              Crédito
            </label>
            <FaCreditCard size={30} className='fill-cyan-900' />
          </div>
          <div className='flex flex-row items-center justify-between bg-sky-200 py-3 px-5 rounded-lg'>
            <label className='text-lg text-cyan-900 font-medium flex flex-row gap-x-2 items-center' htmlFor='cash'>
              <input
                checked={paymentType === 'Dinheiro'}
                className='accent-cyan-900'
                onChange={(evt) => handleChangeState(evt.target.value)}
                type='radio'
                name='payment'
                id='cash'
                value={'Dinheiro'}
              />
              Dinheiro
            </label>
            <BsCashCoin size={30} className='fill-cyan-900' />
          </div>
          <div className='flex flex-row items-center justify-between bg-sky-200 py-3 px-5 rounded-lg'>
            <label className='text-lg text-cyan-900 font-medium flex flex-row items-center gap-x-2' htmlFor='pix'>
              <input
                className='accent-cyan-900'
                checked={paymentType === 'Pix'}
                onChange={(evt) => handleChangeState(evt.target.value)}
                type='radio'
                name='payment'
                id='pix'
                value={'Pix'}
              />
              Pix
            </label>
            <MdOutlineQrCode2 size={30} className='fill-cyan-900' />
          </div>
        </form>
        <footer className='flex flex-col gap-y-2 absolute bottom-0 w-full left-0 px-5 pb-3'>
          <div className='relative flex flex-col space-y-3 mb-3 shadow-[0px_4px_5px_0px_#0000001c] px-3 py-2 rounded-lg'>
            <h4 className='break-words text-sky-500 font-medium text-wrap'>
              Enviando para: <span className='font-medium text-cyan-900 text-sm text-wrap'>Derick, Rua Tristã Centro</span>
            </h4>
            <div className='flex flex-row justify-between items-center'>
              <div>
                <p className='text-sky-500'>Produto:</p>
                <p className='text-sky-500'>Frete:</p>
              </div>
              <div>
                <p className='text-cyan-900'>R$ {totalValue.toFixed(2).replace('.', ',')}</p>
                <p className='text-cyan-900'>R$ 8,00</p>
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='flex flex-row justify-between'>
                <p className='font-medium text-cyan-900'>Total pedido:</p>
                <p className='font-medium text-sky-500'>R$ {(totalValue + 8).toFixed(2).replace('.', ',')}</p>
              </div>
              <p className='text-cyan-900'>
                Forma de pagamento: <span className='text-sky-500 font-medium'>{paymentType}</span>
              </p>
            </div>
          </div>
          <Button
            size='large'
            title={'Finalizar pedido'}
            onPress={() => {
              navigate('/success');
            }}
          />
        </footer>
      </section>
    </Background>
  );
}
