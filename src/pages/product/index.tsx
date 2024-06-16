import { FaStar, FaUserCircle } from 'react-icons/fa';
import { Background } from '../../components/background';
import { Header } from '../../components/header';
import { useState } from 'react';
import { IoIosAdd, IoIosRemove } from 'react-icons/io';
import { Button } from '../../components/button';
import { IoChevronBackOutline, IoInformationCircleOutline } from 'react-icons/io5';
import { useCart } from '../../context/cart.context';
import { useLocation, useNavigate } from 'react-router-dom';
import { Separator } from '../../components/separator';
import { TbFishHook } from 'react-icons/tb';

export default function Product() {
  const [quantity, setQuantity] = useState<string>('0');

  const navigate = useNavigate();
  const data = useLocation().state;

  const { handleAddProduct } = useCart();

  const inputHandler = (action: 'inc' | 'dec') => {
    setQuantity((prevValue) => {
      let newValue = parseFloat(prevValue);
      newValue = isNaN(newValue) ? 0 : newValue;
      if (action === 'inc') newValue++;
      else {
        newValue = newValue < 1 ? 1 : newValue;
        newValue--;
      }
      return `${newValue}`;
    });
  };
  return (
    <Background>
      <section className='px-5 flex flex-col w-full'>
        <Header />
        <div className='flex flex-col justify-center'>
          <article className='flex flex-col w-full py-4 px-4 shadow-[0px_4px_5px_0px_#0000001c] space-y-4 mt-4'>
            <header className='flex flex-row items-center justify-between'>
              <button
                onClick={() => {
                  navigate('/home');
                }}
              >
                <IoChevronBackOutline className='text-cyan-900' size={30} />
              </button>
              <div className='flex flex-col items-center justify-center'>
                <h1 className='text-xl text-sky-500 font-medium'>
                  {data.title} | {data.weight ? `${data.weight}Kg` : `${data.units} unidades`}
                </h1>
                <p className='text-xs text-cyan-950'>Pescado há 7 horas</p>
              </div>
              <button>
                <IoInformationCircleOutline className='text-cyan-900' size={30} />
              </button>
            </header>
            <Separator small />
            <img src={data.img} className='rounded-xl h-[120px] object-cover' alt='' />
            <div className='flex flex-row justify-between'>
              <div className='flex flex-row gap-x-2'>
                <FaUserCircle size={36} className='text-sky-500' />
                <span>
                  <h4 className='text-base font-medium text-cyan-900'>{data.user.nome}</h4>
                  <div className='flex flex-row items-center gap-x-2'>
                    <TbFishHook size={20} className='text-sky-500' />
                    <p className='text-sm ml-[-6px] text-cyan-950'>Pescador a 20 anos</p>
                  </div>
                </span>
              </div>
              <span className='flex flex-row flex-end items-center gap-x-1 text-sm text-cyan-950'>
                {`${data.rating.toFixed(1)}`.replace('.', ',')}
                <FaStar className='text-cyan-900' />
              </span>
            </div>
            <section className='flex flex-col gap-y-10'>
              <div className='flex flex-wrap relative'>
                <h2 className='text-xl text-sky-500 font-medium'>Descrição</h2>
                <p className='text-wrap text-sm text-cyan-950'>
                  De pesca em cerco caiçara, localizada na cidade de Cananeia, estou com tainhas grandes e ovadas. Realizando entrega a
                  partir das 14h enquanto durar o estoque.
                </p>
              </div>
              <div>
                <p className='font-medium text-xl text-cyan-900'>
                  R$ {Number(data.price).toFixed(2).replace('.', ',')} / {data.weight ? `Kg` : `unidade`}
                </p>
                <p className='text-base text-cyan-900'>
                  <span className='font-medium text-sky-500'>Obs.</span> Pedido minímo de 2{data.weight ? `Kg` : ` unidades`}
                </p>
              </div>
            </section>
            <footer className='flex flex-col items-center justify-center gap-y-4'>
              <div className='w-full relative bg-sky-200 flex flex-row items-center justify-between px-4 py-1 rounded-md'>
                <button
                  className='text-sky-500'
                  id='decrease'
                  onClick={() => {
                    inputHandler('dec');
                  }}
                  value='Decrease Value'
                >
                  <IoIosRemove size={35} />
                </button>
                <input
                  id='number'
                  type='number'
                  placeholder={data.weight ? `Kg` : `Unidades`}
                  className='bg-transparent w-full text-center text-sky-500 font-medium placeholder:text-sky-500'
                  value={quantity === '0' ? '' : quantity.replace(',', '.')}
                  onChange={(e) => {
                    setQuantity(e.target.value.replace(',', '.'));
                  }}
                />
                <button
                  className='text-sky-500 font-medium'
                  id='increase'
                  onClick={() => {
                    inputHandler('inc');
                  }}
                  value='Increase Value'
                >
                  <IoIosAdd size={35} />
                </button>
              </div>
              <Button
                size='large'
                title='Adicionar ao carrinho'
                onPress={() => {
                  console.log(+quantity > data.weight && +quantity > data.units);
                  if (+quantity === 0) return alert('Quantidade não foi selecionada.');
                  if (+quantity > data.weight && +quantity > data.units)
                    return alert('A quantidade selecionada foi maior que a disponível');

                  handleAddProduct({
                    fullQuantity: data.weight ? data.weight : data.units,
                    id: data.id,
                    title: data.title,
                    ownerName: data.user.nome,
                    unitValue: data.price,
                    selectedQuantity: quantity,
                    img: data.img
                  });
                  alert('Você adicionou um item ao seu carrinho');
                  navigate('/home');
                }}
              />
            </footer>
          </article>
        </div>
      </section>
    </Background>
  );
}
