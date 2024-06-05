import { PiPiggyBank } from "react-icons/pi";
import { IoFishOutline, IoSettingsOutline } from "react-icons/io5";
import { RiFileList3Line } from "react-icons/ri";
import { BsFileEarmarkText } from "react-icons/bs";
import { Separator } from "../../components/separator";
import { Button } from "../../components/button";
import { useState } from "react";
import { FaChevronRight, FaStar } from "react-icons/fa6";

export function FisherView() {
   const [active, setActive] = useState<string[]>([]);
   return (
      <section>
         <header className="w-full p-3 flex flex-row bg-sky-500 justify-between items-center z-50 rounded-b-2xl shadow-[0px_4px_5px_0px_#0000001c]">
            <div className="flex flex-row gap-x-2">
               <span className="h-12 w-12 rounded-full bg-white">
               </span>
               <span>
                  <h6 className="font-semibold text-lg text-white">João Eduardo</h6>
                  <p className="text-sm flex flex-row items-center gap-x-1 text-white underline font-light">Editar meus dados <FaChevronRight size={10} /></p>
               </span>
            </div>
            <div className="flex items-center justify-center flex-col">
               <h4 className="flex font-semibold text-cyan-950 flex-row items-center self-end gap-x-1">
                  {`${4.7}`.replace('.', ',')}
                  <FaStar className='text-cyan-900' />
               </h4>
               <p className="text-sm text-white gap-x-1 font-light underline">Ver avaliações</p>
            </div>
         </header>
         <article className="flex mt-6 gap-x-2 flex-row items-center justify-evenly flex-1 w-full px-4">
            <div style={{ flexBasis: '100%' }} className="flex flex-col items-center justify-center bg-sky-200 h-20 space-y-1 rounded-xl p-2">
               <BsFileEarmarkText size={35} className="text-sky-500" />
               <p className="text-sm text-cyan-900">Pedidos</p>
            </div>
            <div style={{ flexBasis: '100%' }} className="flex flex-col items-center justify-center bg-sky-200 h-20 space-y-1 rounded-xl p-2">
               <IoFishOutline size={35} className="text-sky-500" />
               <p className="text-sm text-cyan-900">Produtos</p>
            </div>
            <div style={{ flexBasis: '100%' }} className="flex flex-col items-center justify-center bg-sky-200 h-20 space-y-1 rounded-xl p-2">
               <PiPiggyBank size={35} className="text-sky-500" />
               <p className="text-sm text-cyan-900">Caixa</p>
            </div>
            <div style={{ flexBasis: '100%' }} className="flex flex-col items-center justify-center bg-sky-200 rounded-xl space-y-1 h-20 p-2">
               <IoSettingsOutline className='text-sky-500' size={35} />
               <p className="text-sm text-cyan-900">Configurações</p>
            </div>
         </article>
         <section className="px-5 flex flex-col">
            <div className="flex flex-row itemsc-center justify-center">
               <h1 className="font-semibold text-sky-500 text-xl mt-4">Últimos pedidos</h1>
            </div>
            <Separator small />
            <div className="flex flex-col space-y-2">
               {
                  [{ id: '1' }, { id: '2' }].map((item) => (
                     <div key={item.id} className=" bg-zinc-100 w-full transition-all rounded-xl px-3 py-4 shadow-[0px_4px_5px_0px_#dadada36]"
                        onClick={() => {
                           setActive(prev => {
                              if (prev.find(active => active === item.id))
                                 return prev.filter(active => active !== item.id)
                              return [...prev, item.id]
                           })
                        }}>
                        <div className="flex flex-row justify-between items-center">
                           <div>
                              <p className="text-base text-cyan-900">Pedido: <span className="uppercase font-medium text-sky-500">AJ456789234</span></p>
                              <p className="text-sm text-cyan-900">10/02/2024 às 14:40</p>
                           </div>
                           <p className="text-sm text-cyan-900">Status: <span className="font-medium">Não visualizado</span></p>
                        </div>
                        <div
                           style={{
                              display: active.find(active => active === item.id) ? 'block' : 'none'
                           }}
                           className="mt-2"
                        >
                           <div className="flex flex-row items-center justify-between">
                              <p className="font-semibold text-cyan-900">Itens:</p>
                              <p className="text-sm"><span className="text-sky-500 font-semibold">Feito por: </span>Vinicius Costa</p>
                           </div>
                           <ul style={{ listStyle: 'inside', paddingLeft: 8, marginTop: 4 }}>
                              <li className="text-sm text-cyan-900">
                                 Tainha (2kg) - R$ 10,39/kg
                              </li>
                              <li className="text-sm text-cyan-900">
                                 Camarão (20kg) - R$ 10,39/kg
                              </li>
                           </ul>
                           <p className="text-lg mt-2 font-semibold text-sky-500 flex flex-row justify-between">
                              Total: <span className="text-cyan-900">R$ 150,58</span>
                           </p>
                           <p className="text-sm text-wrap mt-2 text-cyan-900">Endereço: Rua Tristão Lobo, 267, Centro - Cananeía, SP </p>
                           <img
                              className="w-[100%] h-36 object-cover rounded-xl my-3"
                              src="https://s3-alpha-sig.figma.com/img/512c/452f/fc2cad763117c301bc0f17130f9911b6?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CxFrN7dYoidtn-U1q26slJfXvT3Qtm5NRDyPdegJQDZfIM69KwA8nnHtzzpUKUglGbh4LqY-RVmkWOBko5VVeCLn4~Zt6RKZyxRUO0JSe1cW-sFGPOBCBnwbfIc2nWV6EyrWdzOs38CkJwEWxuXKe5KSndCkv518UWV5Se4X25eLo~jJ5boyhkv~EKzimoqH9R8ozHo-QZTu6L0cUSlmEHjr4r9-7S-0DxLnZQWLRI~9kNOL5cApi4GYqEt-sbuZNtSrULGCwiETxTnVXUX~BdJRJhKcO5LAvUyGu7ozmt1hchtAy3TmeUfSGeOzIzQg1cykKgNoBHY64Et6K0z39Q__"
                              alt=""
                           />
                           <Button title="Enviar pedido" size='large' onPress={() => { }} />
                        </div>
                     </div>
                  ))
               }
            </div>
         </section>
      </section>
   )
}