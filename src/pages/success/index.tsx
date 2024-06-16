import { useNavigate } from 'react-router-dom';
import { Background } from '../../components/background';
import { Button } from '../../components/button';
import { Separator } from '../../components/separator';
import Logo from '../../assets/main.png';
export default function Success() {
  const navigate = useNavigate();
  return (
    <Background full>
      <section className='flex flex-col px-5 mt-12'>
        <img src={Logo} className='self-center w-[50%] mt-[30%]' alt='' />
        <div className='flex flex-col items-center space-y-2'>
          <h1 className='text-3xl text-sky-500 mt-5 font-semibold flex flex-row items-center gap-x-1'>Parabéns!</h1>
          <p className='text-lg font-medium text-cyan-900'>Sua compra foi efetuada com sucesso</p>
        </div>
        <Separator />
        <p className='text-md text-wrap text-sky-500'>Em breve você receberá seu produto conforme soliticado</p>
        <footer className='absolute bottom-0 px-5 w-full left-0 mb-5'>
          <Button
            size={'large'}
            onPress={() => {
              navigate('/home');
            }}
            title='Ir pro início'
          />
        </footer>
      </section>
    </Background>
  );
}
