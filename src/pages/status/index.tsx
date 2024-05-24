import { Background } from "../../components/background";
import Main from '../../assets/main.png'

export default function Status () {
    return (
        <Background full>
            <section className='px-5 flex flex-col w-full space-y-6'>
                <img src={Main} alt="" />
            </section>
        </Background>
    )
}