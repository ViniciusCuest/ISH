import { FaStar } from 'react-icons/fa';
import { Background } from '../../components/background';
import { Header } from '../../components/header';
import Fishhook from '../../assets/fishhook.png';
import { useState } from 'react';
import { IoIosAdd, IoIosRemove } from 'react-icons/io';
import { Button } from '../../components/button';
import { IoChevronBackOutline, IoInformationCircleOutline } from 'react-icons/io5';
import { useCart } from '../../context/cart.context';
import { useNavigate } from 'react-router-dom';
import { Separator } from '../../components/separator';
import { TbFishHook } from 'react-icons/tb';

export default function Product() {
  const [quantity, setQuantity] = useState<string>('0');

  const navigate = useNavigate();

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
                <h1 className='text-xl text-sky-500 font-medium'>Camarão | 20kg</h1>
                <p className='text-xs text-cyan-950'>Pescado há 7 horas</p>
              </div>
              <button>
                <IoInformationCircleOutline className='text-cyan-900' size={30} />
              </button>
            </header>
            <Separator small />
            <img
              src='https://s3-alpha-sig.figma.com/img/3d99/81f2/c9ba1bcec3dff9874e992ed3ca4ed9ce?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jT0-QyzEDaZNS1Yj1-l0po0ZynFXqL4Hjn64SJK0biTf0B1SMWHKKj0YzD8kuEWuAps08jYJvmpHw719hXihQvBzzk01jGpciOpiHNcvOsXTrcJiB6cGheC62ry7Bb30F7OOXmSKeopXLCCIzwKQtXXFsIKLI4HZimHLheWgf49VwfYWhLqcK-hoq7mQeJRBZFNfxy4kyaANhnimxd~SDKz9Itvu9DpzqD-I3g~1xWQrF8yaH5-OLdlNaAD2EvcJAch4d71U~w82PJv8jiRLv~CINjirO4~gAh0riNCfQ5n3xEFFnOODJAMOs~Ab81z1VwdMj~MdmkL9JUYQe8U6YQ__'
              className='rounded-xl h-[120px] object-cover'
              alt=''
            />
            <div className='flex flex-row justify-between'>
              <div className='flex flex-row gap-x-2'>
                <img
                  src='https://s3-alpha-sig.figma.com/img/1a14/694e/1e4a7505c3f362efa96e570b432e48aa?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RhyjEeghvcFzpK8UsTrIIsw1aFBo1E8Bwnrg1g2FSVf0e-pq6ih14jxeBBhXYYQ5aWAUjTcioy2zxlLxexDtcI-fCXS-eYRyfgnvcd4hbDEocmWKL9QQWo14FrMthYZX6iT4EOxhCqO2h3Kn7bVzjHihK79eVjpIlFQH89ufjPbh~DgoliMd1Vbm5cGAim0qYTluzSoLq-eyeT6I6WX0y~2awBsW8l4qgpxPXwfHxHckUzAin3tMUUX8eF5Hw-8VcpBP1sxyHSkR-rVe6TIZr6SD5UEJM20oHmqV910A1zrVFOljowbgrKlBM~RDF7rinHdqT9wDMY6BzB9bvoB2hA__'
                  className='w-12 h-12 rounded-full'
                  alt=''
                />
                <span>
                  <h4 className='text-base font-medium text-cyan-900'>João Eduardo</h4>
                  <div className='flex flex-row items-center gap-x-2'>
                    <TbFishHook size={20} className='text-sky-500' />
                    <p className='text-sm ml-[-6px] text-cyan-950'>Pescador a 20 anos</p>
                  </div>
                </span>
              </div>
              <span className='flex flex-row flex-end items-center gap-x-1 text-sm text-cyan-950'>
                {`${4.7}`.replace('.', ',')}
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
                <p className='font-medium text-xl text-cyan-900'>R$ 6,80 / kg</p>
                <p className='text-base text-cyan-900'>
                  <span className='font-medium text-sky-500'>Obs.</span> Pedido minímo de 2kg
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
                  placeholder='KG'
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
                  if (+quantity === 0) return alert('Quantidade não foi selecionada.');

                  handleAddProduct({
                    fullQuantity: 20,
                    id: '1',
                    title: 'Tainha',
                    ownerName: 'João Eduardo',
                    unitValue: 6.8,
                    selectedQuantity: quantity
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
