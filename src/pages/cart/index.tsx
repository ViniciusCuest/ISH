import { Button } from '../../components/button';
import { FaTrash } from 'react-icons/fa';
import { Background } from '../../components/background';
import { Header } from '../../components/header';
import { IoChevronBackOutline, IoInformationCircleOutline } from 'react-icons/io5';
import { useCart } from '../../context/cart.context';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const navigate = useNavigate();
  const { cart, handleRemoveProduct } = useCart();
  return (
    <Background>
      <section className='px-5 flex flex-col w-full space-y-6'>
        <Header />
        <header className='flex flex-row items-center justify-between'>
          <button
            onClick={() => {
              navigate('/home');
            }}
          >
            <IoChevronBackOutline className='text-blue-900' size={30} />
          </button>
          <h1 className='text-2xl text-sky-500 font-medium'>Carrinho</h1>
          <button>
            <IoInformationCircleOutline className='text-blue-900' size={30} />
          </button>
        </header>
        {cart.length ? (
          cart.map((item) => {
            return (
              <div className='flex flex-row p-2 shadow-[0px_4px_5px_0px_#0000001c] w-full rounded-xl' key={item.id}>
                <img src={item.img} className='w-[78px] h-[84px] object-cover rounded-xl' alt='' />
                <div className='flex flex-col justify-between w-full px-3'>
                  <div className='flex flex-row gap-x-2 w-full justify-between'>
                    <span>
                      <div>
                        <h4 className='text-lg text-sky-500 font-medium'>{item.title}</h4>
                        <p className='text-xs'>Pescador: {item.ownerName}</p>
                      </div>
                    </span>
                    <button
                      onClick={() => {
                        const remove = window.confirm('Tem certeza que deseja remover esse produto do seu carrinho ?');
                        if (!remove) return;

                        handleRemoveProduct(item.id);
                        navigate('/home');
                      }}
                      className='flex flex-row flex-end items-center gap-x-1'
                    >
                      <FaTrash size={20} className='text-cyan-900' />
                    </button>
                  </div>
                  <div className='flex flex-row justify-between items-center gap-x-2 mt-1'>
                    <p className='text-sm mt-[2px] text-sky-500 font-medium'>
                      Quantidade: <span className='text-base text-black'>{item.selectedQuantity}kg</span>
                    </p>
                    <p className='text-sm mt-[2px] text-sky-500 font-medium'>
                      Total:{' '}
                      <span className='text-base text-black'>
                        R$ {(item.unitValue * Number(item.selectedQuantity)).toFixed(2).replace('.', ',')}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className='flex items-center text-sky-500 justify-center h-[50vh] w-full gap-x-2'>
            <MdOutlineShoppingBag size={35} />
            <h1 className='text-2xl'>Carrinho vazio</h1>
          </div>
        )}
        <footer className='flex flex-col gap-y-2 absolute bottom-0 w-full left-0 px-5 pb-3'>
          <div className='flex flex-row items-center justify-between bg-sky-200 rounded-lg p-3 flex-grow'>
            <div className='flex flex-col gap-y-2'>
              <h2 className='text-sky-500 font-medium'>Endereço:</h2>
              <p className='text-xs text-cyan-950'>
                RUA TRISTÃO LOBO, 267, CENTRO <br />
                CANANEÍA, SP, 11990-000
              </p>
            </div>
            <div className='flex flex-col justify-end h-full self-end'>
              <p className='text-sm text-cyan-900 font-medium'>Editar endereço</p>
            </div>
          </div>
          <Button
            size='large'
            title={'Ir para pagamentos'}
            onPress={() => {
              navigate('/payments');
            }}
          />
        </footer>
      </section>
    </Background>
  );
}
