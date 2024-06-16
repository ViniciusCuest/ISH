import { FaStar, FaUserCircle } from 'react-icons/fa';
import { TbFishHook } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/button';
import { Header } from '../../components/header';
import { Separator } from '../../components/separator';

export function UserView() {
  const navigate = useNavigate();
  const data = [
    {
      id: 1,
      title: 'Peixes',
      img: 'https://conteudo.imguol.com.br/c/entretenimento/e2/2019/05/22/peixes-frescos-1558560558974_v2_900x506.jpg'
    },
    {
      id: 2,
      title: 'Ostras',
      img: 'https://s1.static.brasilescola.uol.com.br/be/2022/01/ostra.jpg'
    },
    {
      id: 3,
      title: 'Camarões',
      img: 'https://static.itdg.com.br/images/auto-auto/81811329cc1a8c91abfdcb32860c461f/diferenca-entre-lagostim-e-camarao.jpg'
    },
    {
      id: 4,
      title: 'Caranguejo',
      img: 'https://revistadeguste.com/wp-content/uploads/2015/08/3fd74ce2128cc0e3eb3bc2c6c319532ee5b67d465e80f7dabaccbf883982df6b.jpg'
    },
    {
      id: 5,
      title: 'Lagosta',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmRLhOqki-xsFNY27RUfm7oTvsQuUdrpREzA&s'
    }
  ];

  const cards = [
    {
      id: 1,
      user: {
        id: 1,
        nome: 'Marcos Antônio',
        img: ''
      },
      datetime: '',
      title: 'Ostras',
      weight: 0,
      units: 40,
      price: 69.9,
      img: 'https://s1.static.brasilescola.uol.com.br/be/2022/01/ostra.jpg',
      rating: 4.5
    },
    {
      id: 2,
      user: {
        id: 2,
        nome: 'João Eduardo',
        img: ''
      },
      datetime: '',
      title: 'Tainha',
      weight: 200,
      units: 0,
      rating: 5.0,
      price: 12.99,
      img: 'https://www.infoescola.com/wp-content/uploads/2010/06/tainha-161139446.jpg'
    }
  ];
  return (
    <section className='px-5 flex flex-col w-full'>
      <Header />
      <section className='flex overflow-x-auto space-x-4'>
        {data.map((item) => (
          <div key={item.id} className='flex flex-col mt-14 items-center gap-y-2 flex-none select-none'>
            <img draggable={false} className='object-cover relative h-[90px] w-[98px] rounded-xl ' src={item.img} alt='' />
            <h6 className='text-sm text-cyan-900'>{item.title}</h6>
          </div>
        ))}
      </section>
      <Separator />
      <section className='flex flex-col w-full space-y-4 items-center justify-center'>
        <h2 className='text-xl text-sky-500 font-medium'>Anunciados Recentemente</h2>
        {cards.map((item) => (
          <div className='flex flex-row justify-between p-2 shadow-[0px_4px_5px_0px_#0000001c] w-full rounded-xl' key={item.id}>
            <img src={item.img} className='w-[25%] object-cover rounded-xl' alt='' />
            <div className='flex flex-col'>
              <div className='flex flex-row gap-x-1 items-center'>
                <FaUserCircle size={26} className='text-sky-400' />
                <span>
                  <p className='text-xs text-cyan-900'>{item.user.nome}</p>
                </span>
              </div>
              <h4 className='text-base text-sky-500 font-medium'>
                {item.title} | {item.weight ? `${item.weight}Kg` : `${item.units} unidades`}
              </h4>
              <div className='flex flex-row items-center ml-[-6px] mt-1'>
                <TbFishHook size={20} className='text-sky-500' />
                <p className='text-xs mt-[2px] text-cyan-900'>Pescado há 5 horas</p>
              </div>
            </div>
            <div className='flex flex-col justify-between items-end'>
              <span className='flex flex-row flex-end items-center gap-x-1 text-sm text-cyan-900'>
                {`${item.rating.toFixed(1)}`.replace('.', ',')}
                <FaStar className='text-cyan-900' />
              </span>
              <Button
                title='Pedir'
                size='small'
                onPress={() => {
                  navigate(`/product/${item.id}`, {
                    state: {
                      user: {
                        id: item.user.id,
                        nome: item.user.nome,
                        img: item.user.img
                      },
                      id: item.id,
                      datetime: item.datetime,
                      title: item.title,
                      weight: item.weight,
                      units: item.units,
                      rating: item.rating,
                      price: item.price,
                      img: item.img
                    }
                  });
                }}
              />
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
