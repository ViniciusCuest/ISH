import { Background } from '../../components/background';
import { UserView } from './user.view';
import { FisherView } from './fisher.view';

export default function Home() {
  const user = {
    type: 'fisher'
  }

  return (
    <Background full={user.type === 'fisher'}>
      {
        user.type === 'fisher' ?
          <FisherView /> :
          <UserView />
      }
    </Background >
  );
}
