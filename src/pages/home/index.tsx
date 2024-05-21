import { useNavigate } from 'react-router-dom'
import { Background } from '../../components/background'
import { Button } from '../../components/button'
import { Header } from '../../components/header'
import { FaStar } from 'react-icons/fa'
import Fishhook from '../../assets/fishhook.png'
export default function Home() {
  const navigate = useNavigate()
  const data = [
    {
      id: 1,
      title: 'Peixes',
      img: 'https://s3-alpha-sig.figma.com/img/08f8/0046/9b217ce80eaa7a5ccd68442220368a10?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PlQ9qm6-Ut-va-WXmDkIxCVHEAjw24lT23HgYjWFYmitjkUyLdY6RaWoofw6QQuACEQFoST0Y9WgyWG~mH6XrnbwymDvlyWxeTYXfWl9GKQWDekQtljTMmDv7C5GZgw3W4vsTp6yePF6RVBDERgfjBgAQirJ~ZhM6njjs1-Vm7HK~9GVWojb9gZgP3wyirlhTqoaB9ysU~dSAjdMYaeqKD5G3GIYfJGNsEyVWnsJgZcTYNjg5nhQBEQd1ggLWAc-JS6ZnVThOu3P9VCZdF-N-9-v~b7IT4JQ7gYtt5z1IQO8W6VH228tWzGChpTh~BPfgEdBhhxBSmIbF02bvnFZRQ__'
    },
    {
      id: 2,
      title: 'Ostras',
      img: 'https://s3-alpha-sig.figma.com/img/c8f9/e635/36c49eedb556149121be676883b79bbf?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=prEy4Y6phGmYpS8Kh~BcUbi839I9cX4jL10G~35VO2Kw2XqV9KmpRvjT3Hg57MTvRnNyySqWeKh7XPSATNO~1RSK3b~zl5Kn8ST-H-gBtuHvFts5M6tmnuzLAnPAP2TLHH7dFx845xY-Ao2J8PVnVtgNmirCxoqB53lyn5HEp6kWnRhhOsUZPc0Z~BKGQA8flfTGZaTPaDs3dsyQygbhGV5st7U3TsbL8q~y2OSFTlavro1WMMYYuKFe0~qbxR9g3yW2FTBlBPz6Jqtyv0k9~yb7rU4et5ZHj9A6Tsp0Y07agy346bPIYGWjDjOMXBZnqm~y2OMdpiz0d-4LuYsrJw__'
    },
    {
      id: 3,
      title: 'Camarões',
      img: 'https://s3-alpha-sig.figma.com/img/3d99/81f2/c9ba1bcec3dff9874e992ed3ca4ed9ce?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jT0-QyzEDaZNS1Yj1-l0po0ZynFXqL4Hjn64SJK0biTf0B1SMWHKKj0YzD8kuEWuAps08jYJvmpHw719hXihQvBzzk01jGpciOpiHNcvOsXTrcJiB6cGheC62ry7Bb30F7OOXmSKeopXLCCIzwKQtXXFsIKLI4HZimHLheWgf49VwfYWhLqcK-hoq7mQeJRBZFNfxy4kyaANhnimxd~SDKz9Itvu9DpzqD-I3g~1xWQrF8yaH5-OLdlNaAD2EvcJAch4d71U~w82PJv8jiRLv~CINjirO4~gAh0riNCfQ5n3xEFFnOODJAMOs~Ab81z1VwdMj~MdmkL9JUYQe8U6YQ__'
    },
    {
      id: 4,
      title: 'Caranguejo',
      img: 'https://s3-alpha-sig.figma.com/img/212d/2d92/0533790cced6845eaceb17d49e983a4a?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ecpKZ7aTcQ~XGDomLj3I5pVadF2X1J25KFYLfa8mPVxTqN6FmK6E69TtQixMmlzZJ~vf6cPaWFXp1GnFtXOaNxovNKtuB7MGC5Q416S1x0rLL6bZaXSJnefo0ZtrYI3pYqvx4EaJtIsQ4YjYhjYLLYdbGbQ248wl~SzdnGu5sWZKA9ShiewMv01kfa3hobXlLpIFoa8xGolXJa56I3rludi5p-1TjxC-HBIrvbcEAkDgdnC6v-OArtNKg~gN-1G8W1anloUQL3woCMoWRKBjBqE~BtC6FwiPV2zdptMn8hWCiye8fxxqCZ2bg8Or1SHX0DTOj-u6MGcgxqiY9bgw~g__'
    },
    {
      id: 5,
      title: 'Peixes',
      img: 'https://s3-alpha-sig.figma.com/img/08f8/0046/9b217ce80eaa7a5ccd68442220368a10?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PlQ9qm6-Ut-va-WXmDkIxCVHEAjw24lT23HgYjWFYmitjkUyLdY6RaWoofw6QQuACEQFoST0Y9WgyWG~mH6XrnbwymDvlyWxeTYXfWl9GKQWDekQtljTMmDv7C5GZgw3W4vsTp6yePF6RVBDERgfjBgAQirJ~ZhM6njjs1-Vm7HK~9GVWojb9gZgP3wyirlhTqoaB9ysU~dSAjdMYaeqKD5G3GIYfJGNsEyVWnsJgZcTYNjg5nhQBEQd1ggLWAc-JS6ZnVThOu3P9VCZdF-N-9-v~b7IT4JQ7gYtt5z1IQO8W6VH228tWzGChpTh~BPfgEdBhhxBSmIbF02bvnFZRQ__'
    }
  ]

  const cards = [
    {
      id: 1,
      user: {
        id: 1,
        nome: 'Marcos Antônio',
        img: 'https://s3-alpha-sig.figma.com/img/1a14/694e/1e4a7505c3f362efa96e570b432e48aa?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RhyjEeghvcFzpK8UsTrIIsw1aFBo1E8Bwnrg1g2FSVf0e-pq6ih14jxeBBhXYYQ5aWAUjTcioy2zxlLxexDtcI-fCXS-eYRyfgnvcd4hbDEocmWKL9QQWo14FrMthYZX6iT4EOxhCqO2h3Kn7bVzjHihK79eVjpIlFQH89ufjPbh~DgoliMd1Vbm5cGAim0qYTluzSoLq-eyeT6I6WX0y~2awBsW8l4qgpxPXwfHxHckUzAin3tMUUX8eF5Hw-8VcpBP1sxyHSkR-rVe6TIZr6SD5UEJM20oHmqV910A1zrVFOljowbgrKlBM~RDF7rinHdqT9wDMY6BzB9bvoB2hA__'
      },
      datetime: '',
      title: 'Ostras',
      weight: 0,
      units: 40,
      img: 'https://s3-alpha-sig.figma.com/img/8d72/f896/a54c882383811590443787c6e5b65f19?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oGEso00n3oKHx7-x7OZOCGwuTSbnJdtM4K5BtkjAiZzVPcIlSeBnIHdHkjWUIe0O64eJmd2hJnPUGt-aurvLV5FHcZGcieCHp~0RmdZ2Pn5vm3TvpFVZXxwWwovqm21KE8SMaecXxh-yb98nvg3TEzZZneo1HiMgCQWExX988b1686NHVMyg0ZHtTtFcasPuePm-0l-DjPv45Rq5frKL8w5q1K4KeqFXyc~LWKPDS8kh07TV-UzOo828Ur63z2~46DXWf9r7wI33-ZENiNBAPC-yjHp15bD8HKGgoKR-rNXI8ROnDQybGzClaIM4Bb3aGe6EXxR5Aw0auO-3oGeQ8g__',
      rating: 4.5
    }
  ]
  return (
    <Background>
      <section className='px-5 flex flex-col w-full'>
        <Header />
        <section className='flex overflow-x-auto space-x-4'>
          {data.map((item) => (
            <div key={item.id} className='flex flex-col items-center gap-y-2 flex-none select-none'>
              <img draggable={false} className='object-cover relative h-[90px] w-[98px] rounded-xl ' src={item.img} alt='' />
              <h6>{item.title}</h6>
            </div>
          ))}
        </section>
        <hr />
        <section className='flex flex-col w-full items-center justify-center'>
          <h2 className='text-2xl text-sky-500 font-medium'>Anunciados Recentemente</h2>
          {cards.map((item) => (
            <div className='flex flex-row justify-between p-2 shadow-[0px_4px_5px_0px_#0000001c] w-full rounded-xl' key={item.id}>
              <img src={item.img} className='w-[78px] h-[84px] object-cover rounded-xl' alt='' />
              <div className='flex flex-col'>
                <div className='flex flex-row gap-x-2'>
                  <img src={item.user.img} className='w-8 h-8 rounded-full' alt='' />
                  <span>
                    <div>
                      <p className='text-xs'>{item.user.nome}</p>
                      <h4 className='text-lg text-sky-500 font-medium'>
                        {item.title} | {item.weight ? `${item.weight}Kg` : `${item.units} unidades`}
                      </h4>
                    </div>
                  </span>
                </div>
                <div className='flex flex-row items-center gap-x-2 mt-1'>
                  <img src={Fishhook} alt='' />
                  <p className='text-sm mt-[2px]'>Pescado há 5 horas</p>
                </div>
              </div>
              <div className='flex flex-col space-y-[50%] items-end'>
                <span className='flex flex-row flex-end items-center gap-x-1'>
                  {`${item.rating}`.replace('.', ',')}
                  <FaStar className='text-cyan-900' />
                </span>
                <Button
                  title='Pedir'
                  size='small'
                  onPress={() => {
                    navigate(`/product/${item.id}`)
                  }}
                />
              </div>
            </div>
          ))}
        </section>
      </section>
    </Background>
  )
}
